"use strict";

/*
 * Digital Garden Blockquote Continuity Fix
 *
 * Repairs two related classes of publisher damage:
 *
 *   1. DG-generated blocks (Dataview markers, expanded note embeds, Base
 *      embeds) that lose the blockquote depth of the source line they replaced.
 *
 *   2. Naked blank lines left between quoted regions. In CommonMark, those
 *      blank lines close the current blockquote, so the next `>` starts a new
 *      blockquote even when nothing actually occurred outside the quote.
 *
 * The plugin is globally enabled when enabled in Digital Garden's plugin menu,
 * but candidate-gated: pages containing none of the relevant structures return
 * immediately after a few cheap substring checks.
 */

const MAX_REPAIR_PASSES = 12;

const DATAVIEW_MARKER =
  /^\s*\{\s*\.block-language-dataview\s*\}\s*$/;

function looksLikeRepairCandidate(source) {
  if (
    typeof source !== "string" ||
    source.length === 0
  ) {
    return false;
  }

  return (
    source.includes(".block-language-dataview") ||
    source.includes("transclusion internal-embed is-loaded") ||
    source.includes("```base") ||
    source.includes("\n>\n") ||
    source.includes("\n> \n")
  );
}

/*
 * Return the leading Markdown blockquote depth and the content after it.
 * Handles both compact markers (>> text) and spaced markers (> > text).
 */
function splitQuotePrefix(line) {
  const input = String(line);
  let index = 0;

  /*
   * CommonMark permits up to three spaces before a blockquote marker.
   */
  while (
    index < input.length &&
    index < 3 &&
    input[index] === " "
  ) {
    index++;
  }

  const leadingWhitespace =
    input.slice(0, index);

  let cursor = index;
  let depth = 0;

  while (
    cursor < input.length &&
    input[cursor] === ">"
  ) {
    depth++;
    cursor++;

    if (
      input[cursor] === " " ||
      input[cursor] === "\t"
    ) {
      cursor++;
    }
  }

  if (depth === 0) {
    return {
      depth: 0,
      content: input,
      leadingWhitespace: "",
    };
  }

  return {
    depth,
    content: input.slice(cursor),
    leadingWhitespace,
  };
}

function quoteOnlyDepth(line) {
  const parsed =
    splitQuotePrefix(line);

  if (
    parsed.depth > 0 &&
    parsed.content.trim() === ""
  ) {
    return parsed.depth;
  }

  return 0;
}

/*
 * Add N OUTER quote levels while preserving any quote depth already present.
 *
 * Example:
 *
 *     > [!infobox]
 *
 * plus one missing outer level becomes:
 *
 *     >> [!infobox]
 */
function addQuoteLevels(
  line,
  levels
) {
  if (levels <= 0) {
    return line;
  }

  const input = String(line);
  const parsed =
    splitQuotePrefix(input);

  const prefix =
    ">".repeat(levels);

  if (parsed.depth > 0) {
    const start =
      parsed.leadingWhitespace.length;

    return (
      input.slice(0, start) +
      prefix +
      input.slice(start)
    );
  }

  if (input.trim() === "") {
    return prefix;
  }

  return prefix + " " + input;
}

function contentWithoutQuotePrefix(line) {
  return splitQuotePrefix(line).content;
}

function isCalloutDeclaration(line) {
  const parsed =
    splitQuotePrefix(line);

  return (
    parsed.depth > 0 &&
    /^\s*\[![^\]]+\]/.test(
      parsed.content
    )
  );
}

function isTransclusionOpen(line) {
  const content =
    contentWithoutQuotePrefix(line);

  const openingTag =
    content.match(
      /^\s*<div\b[^>]*>/i
    );

  if (!openingTag) {
    return false;
  }

  const classMatch =
    openingTag[0].match(
      /\bclass\s*=\s*(["'])([\s\S]*?)\1/i
    );

  if (!classMatch) {
    return false;
  }

  const classes =
    new Set(
      classMatch[2]
        .split(/\s+/)
        .filter(Boolean)
    );

  return (
    classes.has("transclusion") &&
    classes.has("internal-embed") &&
    classes.has("is-loaded")
  );
}

function isTransclusionClose(line) {
  return (
    /^\s*<\/div>\s*<\/div>\s*$/
      .test(
        contentWithoutQuotePrefix(line)
      )
  );
}

function findTransclusionEnd(
  lines,
  startIndex
) {
  let nesting = 0;

  for (
    let i = startIndex;
    i < lines.length;
    i++
  ) {
    if (isTransclusionOpen(lines[i])) {
      nesting++;
    }

    if (isTransclusionClose(lines[i])) {
      nesting--;

      if (nesting === 0) {
        return i;
      }
    }
  }

  return -1;
}

function getBaseFenceLength(line) {
  const content =
    contentWithoutQuotePrefix(line)
      .trim();

  const match =
    content.match(
      /^(`{3,})base(?:\s.*)?$/i
    );

  return match
    ? match[1].length
    : 0;
}

function findFenceEnd(
  lines,
  startIndex,
  fenceLength
) {
  for (
    let i = startIndex + 1;
    i < lines.length;
    i++
  ) {
    const content =
      contentWithoutQuotePrefix(lines[i])
        .trim();

    const match =
      content.match(
        /^(`{3,})\s*$/
      );

    if (
      match &&
      match[1].length >= fenceLength
    ) {
      return i;
    }
  }

  return -1;
}

function addQuoteLevelsToRange(
  lines,
  startIndex,
  endIndex,
  levels
) {
  for (
    let i = startIndex;
    i <= endIndex;
    i++
  ) {
    lines[i] =
      addQuoteLevels(
        lines[i],
        levels
      );
  }
}

/*
 * Repair one known DG-generated block whose immediately preceding quoted
 * placeholder tells us the quote depth it should have inherited.
 */
function repairGeneratedBlocksOnePass(lines) {
  let repairs = 0;

  for (
    let i = 1;
    i < lines.length;
    i++
  ) {
    const targetDepth =
      quoteOnlyDepth(
        lines[i - 1]
      );

    if (targetDepth === 0) {
      continue;
    }

    const currentDepth =
      splitQuotePrefix(
        lines[i]
      ).depth;

    if (
      currentDepth >= targetDepth
    ) {
      continue;
    }

    const missingDepth =
      targetDepth - currentDepth;

    const content =
      contentWithoutQuotePrefix(
        lines[i]
      );

    /*
     * 1. Dataview's generated trailing attribute marker.
     */
    if (
      DATAVIEW_MARKER.test(content)
    ) {
      lines[i] =
        addQuoteLevels(
          lines[i],
          missingDepth
        );

      repairs++;
      continue;
    }

    /*
     * 2. Expanded note transclusion.
     */
    if (
      isTransclusionOpen(
        lines[i]
      )
    ) {
      const endIndex =
        findTransclusionEnd(
          lines,
          i
        );

      if (endIndex !== -1) {
        addQuoteLevelsToRange(
          lines,
          i,
          endIndex,
          missingDepth
        );

        repairs++;
      }

      continue;
    }

    /*
     * 3. A .base embed expanded to a naked ```base fence.
     */
    const fenceLength =
      getBaseFenceLength(
        lines[i]
      );

    if (fenceLength > 0) {
      const endIndex =
        findFenceEnd(
          lines,
          i,
          fenceLength
        );

      if (endIndex !== -1) {
        addQuoteLevelsToRange(
          lines,
          i,
          endIndex,
          missingDepth
        );

        repairs++;
      }
    }
  }

  return repairs;
}

/*
 * Repair naked blank-line runs between quoted regions.
 *
 * Example after repairing a generated Base:
 *
 *     > ```
 *
 *     > ## Appearing
 *
 * CommonMark sees the naked blank line as the end of the first blockquote, so
 * the heading begins a brand-new blockquote. If NOTHING except blank lines lies
 * between two quoted regions, preserve their shared quote ancestry instead.
 *
 * The inserted depth is the shallower of the two sides:
 *
 *     >> child content
 *
 *     > parent content
 *
 * becomes:
 *
 *     >> child content
 *     >
 *     > parent content
 *
 * which closes only the child quote and keeps the parent quote alive.
 *
 * Exception: a callout declaration at the same-or-shallower depth intentionally
 * starts a new callout, so do not bridge into it.
 */
function repairBlankContinuityOnePass(lines) {
  let repairs = 0;
  let i = 1;

  while (i < lines.length - 1) {
    if (lines[i].trim() !== "") {
      i++;
      continue;
    }

    const runStart = i;

    while (
      i < lines.length &&
      lines[i].trim() === ""
    ) {
      i++;
    }

    const runEnd = i - 1;

    if (
      runStart === 0 ||
      i >= lines.length
    ) {
      continue;
    }

    const previous =
      splitQuotePrefix(
        lines[runStart - 1]
      );

    const next =
      splitQuotePrefix(
        lines[i]
      );

    if (
      previous.depth === 0 ||
      next.depth === 0
    ) {
      continue;
    }

    const continuityDepth =
      Math.min(
        previous.depth,
        next.depth
      );

    if (continuityDepth === 0) {
      continue;
    }

    /*
     * Same-level (or shallower) [!callout] means "new callout", exactly the
     * explicit boundary we do not want to erase.
     *
     * A deeper callout is nested inside the existing quote, so preserving the
     * outer depth is still correct.
     */
    if (
      isCalloutDeclaration(
        lines[i]
      ) &&
      next.depth <= previous.depth
    ) {
      continue;
    }

    const marker =
      ">".repeat(
        continuityDepth
      );

    for (
      let j = runStart;
      j <= runEnd;
      j++
    ) {
      lines[j] = marker;
    }

    repairs++;
  }

  return repairs;
}

function repairBlockquoteContinuity(source) {
  const input =
    String(source);

  const newline =
    input.includes("\r\n")
      ? "\r\n"
      : "\n";

  const lines =
    input.split(/\r?\n/);

  let generatedRepairs = 0;
  let continuityRepairs = 0;

  /*
   * Repeat to stability. Repairing an outer generated block can expose a nested
   * generated block or a continuity gap that becomes repairable on the next
   * pass.
   */
  for (
    let pass = 0;
    pass < MAX_REPAIR_PASSES;
    pass++
  ) {
    const generatedThisPass =
      repairGeneratedBlocksOnePass(
        lines
      );

    const continuityThisPass =
      repairBlankContinuityOnePass(
        lines
      );

    generatedRepairs +=
      generatedThisPass;

    continuityRepairs +=
      continuityThisPass;

    if (
      generatedThisPass === 0 &&
      continuityThisPass === 0
    ) {
      break;
    }
  }

  return {
    source:
      lines.join(newline),

    generatedRepairs,
    continuityRepairs,
  };
}

module.exports = {
  setupMarkdown(md) {
    console.log(
      "[blockquote-continuity] Markdown hook loaded (v1.0.4; generated-block + blank-continuity mode)."
    );

    md.core.ruler.before(
      "block",
      "blockquote-continuity-fix",
      function blockquoteContinuityRule(
        state
      ) {
        if (
          !looksLikeRepairCandidate(
            state.src
          )
        ) {
          return;
        }

        const result =
          repairBlockquoteContinuity(
            state.src
          );

        if (
          result.generatedRepairs > 0 ||
          result.continuityRepairs > 0
        ) {
          state.src =
            result.source;

          console.log(
            "[blockquote-continuity] " +
            `Repaired ${result.generatedRepairs} generated block(s) and ` +
            `${result.continuityRepairs} blank continuity gap(s).`
          );
        }
      }
    );
  },
};
