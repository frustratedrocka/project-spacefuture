"use strict";

(() => {
/*
 * Digital Garden Blockquote Continuity Fix
 *
 * Repairs publisher-generated blocks that escape from the blockquote/callout
 * containing the embed or query that generated them.
 *
 * Per-note switch:
 *
 *     dg-bq-fix: true
 *
 * The plugin can also be enabled by default from its garden-level settings;
 * an explicit per-note dg-bq-fix: false then disables it for that note.
 */

const fs = require("fs");
const path = require("path");

const NOTE_SETTING_KEY = "dgBqFix";
const NOTE_FRONTMATTER_KEY = "dg-bq-fix";
const MAX_REPAIR_PASSES = 12;

const DATAVIEW_MARKER = /^\s*\{\s*\.block-language-dataview\s*\}\s*$/;

/*
 * Reading the file is only a fallback when Markdown-It's env does not expose
 * the note setting. Cache by mtime so watch-mode edits are still noticed.
 */
const FRONTMATTER_CACHE = new Map();

function asBoolean(value) {
  if (value === true || value === "true" || value === 1 || value === "1") {
    return true;
  }

  if (value === false || value === "false" || value === 0 || value === "0") {
    return false;
  }

  return undefined;
}

function ownBoolean(object, key) {
  if (
    !object ||
    typeof object !== "object" ||
    !Object.prototype.hasOwnProperty.call(object, key)
  ) {
    return undefined;
  }

  return asBoolean(object[key]);
}

/*
 * Digital Garden documents noteSettings for template data, not specifically
 * for Markdown-It env. Different render paths can expose the note data in
 * slightly different places, so accept every shape DG currently uses before
 * falling back to the source file's frontmatter.
 */
function getEnvNoteOverride(env) {
  if (!env || typeof env !== "object") {
    return undefined;
  }

  let value;

  value = ownBoolean(env.settings, NOTE_SETTING_KEY);
  if (value !== undefined) return value;

  value = ownBoolean(env, NOTE_SETTING_KEY);
  if (value !== undefined) return value;

  value = ownBoolean(env, NOTE_FRONTMATTER_KEY);
  if (value !== undefined) return value;

  const nested = env["dg-note-properties"];

  value = ownBoolean(nested, NOTE_SETTING_KEY);
  if (value !== undefined) return value;

  value = ownBoolean(nested, NOTE_FRONTMATTER_KEY);
  if (value !== undefined) return value;

  return undefined;
}

function getInputPath(env) {
  if (!env || typeof env !== "object") {
    return "";
  }

  const candidates = [
    env.page && env.page.inputPath,
    env.inputPath,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate.trim();
    }
  }

  return "";
}

function extractFrontmatterBoolean(text) {
  const source = String(text || "").replace(/^\uFEFF/, "");

  if (!source.startsWith("---")) {
    return undefined;
  }

  const endMatch = source.slice(3).match(/\r?\n---(?:\r?\n|$)/);

  if (!endMatch) {
    return undefined;
  }

  const frontmatterEnd = 3 + endMatch.index;
  const frontmatter = source.slice(3, frontmatterEnd);

  /*
   * The Obsidian publisher commonly writes the generated note frontmatter as
   * a one-line JSON object inside --- fences. Check that form first.
   */
  const trimmed = frontmatter.trim();

  if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
    try {
      const parsed = JSON.parse(trimmed);

      let value = ownBoolean(parsed, NOTE_SETTING_KEY);
      if (value !== undefined) return value;

      value = ownBoolean(parsed, NOTE_FRONTMATTER_KEY);
      if (value !== undefined) return value;
    } catch {
      /* Fall through to the simple YAML/key scan below. */
    }
  }

  /*
   * Also accept ordinary YAML frontmatter. We only need a literal boolean,
   * so deliberately avoid pulling in a general YAML parser for one flag.
   */
  const yamlMatch = frontmatter.match(
    /^\s*(?:dgBqFix|dg-bq-fix)\s*:\s*(true|false)\s*(?:#.*)?$/im
  );

  if (yamlMatch) {
    return yamlMatch[1].toLowerCase() === "true";
  }

  return undefined;
}

function getFileNoteOverride(env) {
  const inputPath = getInputPath(env);

  if (!inputPath) {
    return undefined;
  }

  const absolutePath = path.isAbsolute(inputPath)
    ? inputPath
    : path.resolve(process.cwd(), inputPath);

  let stat;

  try {
    stat = fs.statSync(absolutePath);
  } catch {
    return undefined;
  }

  const cached = FRONTMATTER_CACHE.get(absolutePath);

  if (cached && cached.mtimeMs === stat.mtimeMs) {
    return cached.value;
  }

  let value;

  try {
    const source = fs.readFileSync(absolutePath, "utf8");
    value = extractFrontmatterBoolean(source);
  } catch {
    value = undefined;
  }

  FRONTMATTER_CACHE.set(absolutePath, {
    mtimeMs: stat.mtimeMs,
    value,
  });

  return value;
}

function isEnabledForNote(env, enabledByDefault) {
  let override = getEnvNoteOverride(env);

  if (override === undefined) {
    override = getFileNoteOverride(env);
  }

  return override === undefined
    ? enabledByDefault
    : override;
}

/*
 * Very cheap first gate. Ordinary notes return here before any line splitting,
 * frontmatter file read, regex repair pass, etc.
 */
function looksLikeRepairCandidate(source) {
  if (typeof source !== "string" || source.length === 0) {
    return false;
  }

  return (
    source.includes(".block-language-dataview") ||
    source.includes("transclusion internal-embed is-loaded") ||
    source.includes("```base")
  );
}

/*
 * Return the leading Markdown blockquote depth and the content after it.
 * Handles both compact markers (>> text) and spaced markers (> > text).
 */
function splitQuotePrefix(line) {
  const input = String(line);
  let index = 0;

  /* CommonMark permits up to three spaces before a blockquote marker. */
  while (index < input.length && index < 3 && input[index] === " ") {
    index++;
  }

  const leadingWhitespace = input.slice(0, index);
  let cursor = index;
  let depth = 0;

  while (cursor < input.length && input[cursor] === ">") {
    depth++;
    cursor++;

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

    /* 1. Dataview's generated trailing attribute marker escapes the quote. */
    if (DATAVIEW_MARKER.test(content)) {
      lines[i] = addQuoteLevels(lines[i], missingDepth);
      repairs++;
      continue;
    }

    /* 2. Expanded note transclusion escapes the quote. */
    if (isTransclusionOpen(lines[i])) {
      const endIndex = findTransclusionEnd(lines, i);

      if (endIndex !== -1) {
        addQuoteLevelsToRange(lines, i, endIndex, missingDepth);
        repairs++;
      }

      continue;
    }

    /* 3. A .base embed is expanded to a naked ```base fence. */
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
  setupMarkdown(md, context) {
    console.log("[blockquote-continuity] Markdown hook loaded (v1.0.2).");

    const enabledByDefault = !!(
      context &&
      context.settings &&
      context.settings.enabledByDefault === true
    );

    md.core.ruler.before(
      "block",
      "blockquote-continuity-fix",
      function blockquoteContinuityRule(state) {
        /* Most pages stop here. */
        if (!looksLikeRepairCandidate(state.src)) {
          return;
        }

        if (!isEnabledForNote(state.env, enabledByDefault)) {
          return;
        }

        const result = repairBlockquoteContinuity(state.src);

        if (result.repairs > 0) {
          state.src = result.source;

          const page = getInputPath(state.env);
          const suffix = page ? ` (${page})` : "";

          console.log(
            `[blockquote-continuity] Repaired ${result.repairs} generated block(s)${suffix}`
          );
        }
      }
    );
  },
};

})();
