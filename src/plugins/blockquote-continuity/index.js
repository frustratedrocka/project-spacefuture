/*
 * Digital Garden Blockquote Continuity Fix
 *
 * Digital Garden's publisher can expand content that originally lived inside
 * a blockquote/callout at quote depth zero. Markdown-It then (correctly)
 * treats the generated block as having escaped the surrounding blockquote.
 *
 * This plugin repairs only notes that opt in with:
 *
 *     dg-bq-fix: true
 *
 * The plugin's manifest declares dgBqFix as a Digital Garden note setting,
 * so the normal DG note-setting resolution applies: per-note frontmatter
 * overrides the garden-wide default.
 */

const NOTE_SETTING_KEY = "dgBqFix";
const MAX_REPAIR_PASSES = 12;

const DATAVIEW_MARKER = /^\s*\{\s*\.block-language-dataview\s*\}\s*$/;

function isTrue(value) {
  return value === true || value === "true" || value === 1 || value === "1";
}

function isEnabledForNote(env) {
  if (!env || typeof env !== "object") {
    return false;
  }

  // Canonical Digital Garden note-setting location.
  if (
    env.settings &&
    typeof env.settings === "object" &&
    isTrue(env.settings[NOTE_SETTING_KEY])
  ) {
    return true;
  }

  // Defensive fallbacks for builds where computed note settings are not yet
  // attached to the Markdown-It environment.
  if (isTrue(env[NOTE_SETTING_KEY]) || isTrue(env["dg-bq-fix"])) {
    return true;
  }

  const nested = env["dg-note-properties"];
  return !!(
    nested &&
    typeof nested === "object" &&
    (isTrue(nested[NOTE_SETTING_KEY]) || isTrue(nested["dg-bq-fix"]))
  );
}

/*
 * Return the leading Markdown blockquote depth and the content after it.
 * Handles both compact markers (>> text) and spaced markers (> > text).
 */
function splitQuotePrefix(line) {
  const input = String(line);
  let index = 0;

  // CommonMark permits up to three spaces before a blockquote marker.
  while (index < input.length && index < 3 && input[index] === " ") {
    index++;
  }

  const leadingWhitespace = input.slice(0, index);
  let cursor = index;
  let depth = 0;

  while (cursor < input.length && input[cursor] === ">") {
    depth++;
    cursor++;

    // A single optional space after each marker is conventional and is what
    // Digital Garden emits. Accept tabs too without consuming arbitrary text.
    if (input[cursor] === " " || input[cursor] === "\t") {
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
  const parsed = splitQuotePrefix(line);

  if (parsed.depth > 0 && parsed.content.trim() === "") {
    return parsed.depth;
  }

  return 0;
}

/* Add N outer quote levels while preserving any quote depth already present. */
function addQuoteLevels(line, levels) {
  if (levels <= 0) {
    return line;
  }

  const input = String(line);
  const parsed = splitQuotePrefix(input);
  const prefix = ">".repeat(levels);

  if (parsed.depth > 0) {
    const start = parsed.leadingWhitespace.length;
    return input.slice(0, start) + prefix + input.slice(start);
  }

  if (input.trim() === "") {
    return prefix;
  }

  // Put the quote marker before the original line, including any indentation,
  // so indented generated Markdown remains indented *inside* the blockquote.
  return prefix + " " + input;
}

function contentWithoutQuotePrefix(line) {
  return splitQuotePrefix(line).content;
}

function isTransclusionOpen(line) {
  const content = contentWithoutQuotePrefix(line);
  const openingTag = content.match(/^\s*<div\b[^>]*>/i);

  if (!openingTag) {
    return false;
  }

  const classMatch = openingTag[0].match(
    /\bclass\s*=\s*(["'])([\s\S]*?)\1/i
  );

  if (!classMatch) {
    return false;
  }

  const classes = new Set(classMatch[2].split(/\s+/).filter(Boolean));

  return (
    classes.has("transclusion") &&
    classes.has("internal-embed") &&
    classes.has("is-loaded")
  );
}

function isTransclusionClose(line) {
  return /^\s*<\/div>\s*<\/div>\s*$/.test(
    contentWithoutQuotePrefix(line)
  );
}

function findTransclusionEnd(lines, startIndex) {
  let nesting = 0;

  for (let i = startIndex; i < lines.length; i++) {
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
  const content = contentWithoutQuotePrefix(line).trim();
  const match = content.match(/^(`{3,})base(?:\s.*)?$/i);
  return match ? match[1].length : 0;
}

function findFenceEnd(lines, startIndex, fenceLength) {
  for (let i = startIndex + 1; i < lines.length; i++) {
    const content = contentWithoutQuotePrefix(lines[i]).trim();
    const match = content.match(/^(`{3,})\s*$/);

    if (match && match[1].length >= fenceLength) {
      return i;
    }
  }

  return -1;
}

function addQuoteLevelsToRange(lines, startIndex, endIndex, levels) {
  for (let i = startIndex; i <= endIndex; i++) {
    lines[i] = addQuoteLevels(lines[i], levels);
  }
}

function repairOnePass(lines) {
  let repairs = 0;

  for (let i = 1; i < lines.length; i++) {
    const targetDepth = quoteOnlyDepth(lines[i - 1]);

    if (targetDepth === 0) {
      continue;
    }

    const currentDepth = splitQuotePrefix(lines[i]).depth;

    if (currentDepth >= targetDepth) {
      continue;
    }

    const missingDepth = targetDepth - currentDepth;
    const content = contentWithoutQuotePrefix(lines[i]);

    /*
     * 1. Dataview's generated trailing attribute marker escapes the quote.
     */
    if (DATAVIEW_MARKER.test(content)) {
      lines[i] = addQuoteLevels(lines[i], missingDepth);
      repairs++;
      continue;
    }

    /*
     * 2. Expanded note transclusions escape the quote. Repair the complete DG
     *    wrapper so ordinary embedded prose, nested callouts, Bases, Dataview,
     *    and nested transclusions all inherit the missing outer quote depth.
     */
    if (isTransclusionOpen(lines[i])) {
      const endIndex = findTransclusionEnd(lines, i);

      if (endIndex !== -1) {
        addQuoteLevelsToRange(lines, i, endIndex, missingDepth);
        repairs++;
      }

      continue;
    }

    /*
     * 3. A .base embed is expanded to a naked ```base fence. Repair the whole
     *    fence, not merely its opening line.
     */
    const fenceLength = getBaseFenceLength(lines[i]);

    if (fenceLength > 0) {
      const endIndex = findFenceEnd(lines, i, fenceLength);

      if (endIndex !== -1) {
        addQuoteLevelsToRange(lines, i, endIndex, missingDepth);
        repairs++;
      }
    }
  }

  return repairs;
}

function repairBlockquoteContinuity(source) {
  const input = String(source);
  const newline = input.includes("\r\n") ? "\r\n" : "\n";
  const lines = input.split(/\r?\n/);
  let totalRepairs = 0;

  // Repeating to stability lets a repaired outer transclusion expose a nested
  // broken quote depth on the next pass without special recursive code.
  for (let pass = 0; pass < MAX_REPAIR_PASSES; pass++) {
    const repairedThisPass = repairOnePass(lines);
    totalRepairs += repairedThisPass;

    if (repairedThisPass === 0) {
      break;
    }
  }

  return {
    source: lines.join(newline),
    repairs: totalRepairs,
  };
}

module.exports = {
  setupMarkdown(md) {
    /*
     * Run after Markdown-It's source normalization but before block parsing.
     * At this point we can repair the publisher-generated Markdown before the
     * parser turns the accidental depth changes into separate blockquotes.
     */
    md.core.ruler.before(
      "block",
      "blockquote-continuity-fix",
      function blockquoteContinuityRule(state) {
        if (!isEnabledForNote(state.env)) {
          return;
        }

        const result = repairBlockquoteContinuity(state.src);

        if (result.repairs > 0) {
          state.src = result.source;

          const page =
            state.env && state.env.page && state.env.page.inputPath
              ? ` (${state.env.page.inputPath})`
              : "";

          console.log(
            `[blockquote-continuity] Repaired ${result.repairs} generated block(s)${page}`
          );
        }
      }
    );
  },
};
