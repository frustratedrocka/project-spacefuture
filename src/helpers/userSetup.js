/*ORIGINAL CONTENTS
function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
*/

/*
 * ================================================================
 * DIGITAL GARDEN BASES: `this` COMPATIBILITY LAYER
 * ================================================================
 *
 * Tested against the architecture of Digital Garden template 1.88.0.
 *
 *
 * THE PROBLEM
 * -----------
 *
 * Native Obsidian Bases understands:
 *
 *     this.Property
 *     this.file.name
 *
 * as references to the NOTE CONTAINING THE BASE.
 *
 * Digital Garden's Bases evaluator currently does not receive that
 * host-note context, so those expressions resolve incorrectly.
 *
 *
 * WHAT THIS DOES
 * --------------
 *
 * It does NOT replace Digital Garden's Bases engine.
 * It does NOT modify any upstream Digital Garden files.
 *
 * Immediately before a Base is handed to Digital Garden's normal
 * renderer, this wrapper:
 *
 *   1. Identifies the note containing the Base.
 *   2. Reads that note's published metadata.
 *   3. Replaces supported `this.*` references with literal values.
 *   4. Hands the rewritten Base back to Digital Garden.
 *
 * Everything after that remains stock Digital Garden:
 *
 *   - filtering
 *   - formulas
 *   - sorting
 *   - tables
 *   - cards
 *   - links
 *   - images
 *   - summaries
 *   - grouping
 *   - rendering
 *
 *
 * EXAMPLES
 * --------
 *
 * On a note whose:
 *
 *     Faction: Apsis
 *
 * this:
 *
 *     Faction == this.Faction
 *
 * becomes:
 *
 *     Faction == "Apsis"
 *
 *
 * On a note named:
 *
 *     The Man Upstairs
 *
 * this:
 *
 *     Character == this.file.name
 *
 * becomes:
 *
 *     Character == "The Man Upstairs"
 *
 *
 * If the host note contains:
 *
 *     PCs:
 *       - Alice
 *       - Bob
 *
 * this:
 *
 *     Attending.containsAny(this.PCs)
 *
 * becomes:
 *
 *     Attending.containsAny("Alice", "Bob")
 *
 *
 * WHY containsAny()/containsAll() NEED SPECIAL HANDLING
 * -----------------------------------------------------
 *
 * Digital Garden 1.88.0 implements these as variadic arguments:
 *
 *     containsAny("Alice", "Bob")
 *
 * A multi-item host list passed as ONE argument:
 *
 *     containsAny(["Alice", "Bob"])
 *
 * does not mean the same thing to the current DG evaluator.
 *
 *
 * SAFETY
 * ------
 *
 * This lives entirely in userSetup.js, Digital Garden's intended
 * customization hook.
 *
 * If Digital Garden eventually implements native `this`, this entire
 * compatibility layer can simply be removed.
 * ================================================================
 */

const yaml = require("yaml");


/*
 * Tags added internally by Digital Garden which should not appear as
 * ordinary Obsidian file.tags values.
 *
 * This matches Digital Garden 1.88.0's own Bases evaluator.
 */
const SYSTEM_TAGS = new Set([
  "note",
  "gardenEntry",
]);


/*
 * ------------------------------------------------
 * HTML ESCAPING FOR ERROR OUTPUT
 * ------------------------------------------------
 */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}


/*
 * ------------------------------------------------
 * PATH NORMALIZATION
 * ------------------------------------------------
 *
 * Depending on where a path comes from, the same note might appear as:
 *
 *     /notes/Database/Factions/Apsis
 *     src/site/notes/Database/Factions/Apsis.md
 *     Database/Factions/Apsis
 *
 * Digital Garden's Bases note objects use the final form.
 */
function normalizeNotePath(value) {
  if (!value) {
    return "";
  }

  let result = String(value)
    .replace(/\\/g, "/")
    .replace(/^\.\//, "");

  const notesRoot = "src/site/notes/";
  const notesRootIndex = result.lastIndexOf(notesRoot);

  if (notesRootIndex !== -1) {
    result = result.slice(
      notesRootIndex + notesRoot.length
    );
  }

  return result
    .replace(/^\/?notes\//, "")
    .replace(/\.(md|markdown)$/i, "")
    .replace(/^\/+/, "");
}


/*
 * ------------------------------------------------
 * FIND THE CURRENT PAGE PATH
 * ------------------------------------------------
 *
 * `env` is the Markdown-It / Eleventy environment for the page
 * currently being rendered.
 */
function getHostPath(env) {
  if (!env) {
    return "";
  }

  const possiblePaths = [
    env.page && env.page.filePathStem,
    env.page && env.page.inputPath,
    env.filePathStem,
    env.inputPath,
  ];

  for (const possiblePath of possiblePaths) {
    const normalized =
      normalizeNotePath(possiblePath);

    if (normalized) {
      return normalized;
    }
  }

  return "";
}


/*
 * ------------------------------------------------
 * GET THE BASES NOTE COLLECTION
 * ------------------------------------------------
 *
 * env.basesNotes is created by Digital Garden specifically for its
 * Bases engine.
 *
 * During normal full-page rendering, Digital Garden may also have a
 * richer version containing computed links/backlinks. We obtain that
 * lazily so requiring userSetup.js does not create an initialization
 * cycle with linkUtils.
 */
function getBasesNotes(env) {
  try {
    const linkUtils = require("./linkUtils");

    if (
      Array.isArray(
        linkUtils._basesNotesWithLinks
      )
    ) {
      return linkUtils._basesNotesWithLinks;
    }
  } catch {
    /*
     * Harmless fallback below.
     */
  }

  if (
    env &&
    Array.isArray(env.basesNotes)
  ) {
    return env.basesNotes;
  }

  return [];
}


/*
 * ------------------------------------------------
 * BUILD HOST-NOTE CONTEXT
 * ------------------------------------------------
 *
 * The current page itself is authoritative for WHICH note contains
 * the Base.
 *
 * Once its path is known, find the corresponding Bases note object so
 * property lookup uses the same metadata representation as Digital
 * Garden's own Bases engine.
 */
function getHostContext(env) {
  const path = getHostPath(env);

  if (!path) {
    return null;
  }

  const notes = getBasesNotes(env);

  const note =
    notes.find(
      (candidate) =>
        normalizeNotePath(candidate.path) === path
    ) || null;

  return {
    path,
    note,
    env,
  };
}


/*
 * ------------------------------------------------
 * USER PROPERTY LOOKUP
 * ------------------------------------------------
 *
 * Digital Garden 1.88.0 checks:
 *
 *     metadata["dg-note-properties"]
 *
 * first, then legacy top-level metadata.
 *
 * Do the same.
 */
function getMetadataProperty(
  metadata,
  propertyName
) {
  if (
    !metadata ||
    typeof metadata !== "object"
  ) {
    return undefined;
  }

  const nested =
    metadata["dg-note-properties"];

  if (
    nested &&
    Object.prototype.hasOwnProperty.call(
      nested,
      propertyName
    )
  ) {
    return nested[propertyName];
  }

  if (
    Object.prototype.hasOwnProperty.call(
      metadata,
      propertyName
    )
  ) {
    return metadata[propertyName];
  }

  return undefined;
}


/*
 * Read a property belonging to the note containing the Base.
 *
 * Prefer the matching Bases note's canonical metadata.
 *
 * Fall back to the actual Eleventy environment because it is still
 * the current page and can contain the same frontmatter directly.
 */
function getHostProperty(
  host,
  propertyName
) {
  if (!host) {
    return undefined;
  }

  if (
    host.note &&
    host.note.metadata
  ) {
    const value =
      getMetadataProperty(
        host.note.metadata,
        propertyName
      );

    if (value !== undefined) {
      return value;
    }
  }

  return getMetadataProperty(
    host.env,
    propertyName
  );
}


/*
 * ------------------------------------------------
 * `this.file.*`
 * ------------------------------------------------
 *
 * Resolve the host note's file properties in the same shape Digital
 * Garden's own Bases evaluator uses wherever practical.
 */
function getHostFileProperty(
  host,
  propertyName
) {
  if (!host) {
    return undefined;
  }

  const path = host.path || "";

  switch (propertyName) {
    case "name": {
      const parts = path.split("/");

      return (
        parts[parts.length - 1] || ""
      );
    }

    case "path":
      return path;

    case "folder": {
      const lastSlash =
        path.lastIndexOf("/");

      return lastSlash === -1
        ? ""
        : path.substring(0, lastSlash);
    }

    case "ext":
      return "md";

    case "tags": {
      const tags =
        getHostProperty(host, "tags");

      if (!Array.isArray(tags)) {
        return tags || [];
      }

      return tags.filter(
        (tag) => !SYSTEM_TAGS.has(tag)
      );
    }

    case "links":
      return (
        (host.note &&
          host.note._links) ||
        getHostProperty(
          host,
          "links"
        ) ||
        []
      );

    case "backlinks":
      return (
        (host.note &&
          host.note._backlinks) ||
        getHostProperty(
          host,
          "backlinks"
        ) ||
        []
      );

    case "size":
    case "ctime":
    case "mtime":
      return getHostProperty(
        host,
        propertyName
      );

    default:
      return undefined;
  }
}


/*
 * ------------------------------------------------
 * TURN JS VALUES INTO BASES EXPRESSIONS
 * ------------------------------------------------
 *
 * Examples:
 *
 *     Apsis
 *       -> "Apsis"
 *
 *     true
 *       -> true
 *
 *     42
 *       -> 42
 *
 *     ["Alice", "Bob"]
 *       -> ["Alice", "Bob"]
 *
 * Undefined and null remain distinct.
 *
 * Arbitrary objects FAIL LOUDLY rather than silently becoming
 * "[object Object]" or undefined and producing misleading query
 * results.
 */
function toBasesLiteral(
  value,
  description = "this value"
) {
  if (value === undefined) {
    return "undefined";
  }

  if (value === null) {
    return "null";
  }

  if (value instanceof Date) {
    return JSON.stringify(
      value.toISOString()
    );
  }

  if (Array.isArray(value)) {
    return (
      "[" +
      value
        .map((item) =>
          toBasesLiteral(
            item,
            description
          )
        )
        .join(", ") +
      "]"
    );
  }

  switch (typeof value) {
    case "string":
      return JSON.stringify(value);

    case "number":
      if (!Number.isFinite(value)) {
        throw new Error(
          `${description} is not a finite number.`
        );
      }

      return String(value);

    case "boolean":
      return value
        ? "true"
        : "false";

    default:
      throw new Error(
        `${description} has unsupported type "${typeof value}".`
      );
  }
}


/*
 * Expand a host value into separate function arguments.
 *
 * Needed for Digital Garden's current containsAny()/containsAll()
 * implementation.
 */
function toBasesArguments(
  value,
  description
) {
  if (value === undefined) {
    return "undefined";
  }

  if (value === null) {
    return "null";
  }

  const values =
    Array.isArray(value)
      ? value
      : [value];

  return values
    .map((item) =>
      toBasesLiteral(
        item,
        description
      )
    )
    .join(", ");
}


/*
 * ------------------------------------------------
 * IDENTIFIER HELPERS
 * ------------------------------------------------
 */
function isIdentifierCharacter(ch) {
  return (
    !!ch &&
    /[A-Za-z0-9_$-]/.test(ch)
  );
}


function readIdentifier(
  expression,
  start
) {
  const match =
    expression
      .slice(start)
      .match(
        /^[A-Za-z_$][A-Za-z0-9_$-]*/
      );

  if (!match) {
    return null;
  }

  return {
    value: match[0],
    end: start + match[0].length,
  };
}


/*
 * Is this `this.Property` occurring directly as an argument to
 * containsAny() or containsAll()?
 *
 * Common case:
 *
 *     Attending.containsAny(this.PCs)
 *
 * We detect this from the immediately preceding expression text.
 *
 * The special expansion is required only for a list value.
 */
function isVariadicContainsArgument(
  expression,
  start
) {
  const before =
    expression.slice(0, start);

  return (
    /\.contains(?:Any|All)\(\s*$/.test(
      before
    )
  );
}


/*
 * ------------------------------------------------
 * REWRITE ONE EXPRESSION
 * ------------------------------------------------
 *
 * This scanner is intentionally quote-aware.
 *
 * Therefore:
 *
 *     Property == "this.Faction"
 *
 * leaves the quoted text alone.
 *
 * It handles:
 *
 *     this.Property
 *     this.file.name
 *     this.file.path
 *     this.file.folder
 *     this.file.ext
 *     this.file.tags
 *     this.file.links
 *     this.file.backlinks
 *     this.file.size
 *     this.file.ctime
 *     this.file.mtime
 */
function rewriteExpression(
  expression,
  host
) {
  if (
    typeof expression !== "string" ||
    !expression.includes("this.")
  ) {
    return expression;
  }

  let result = "";
  let i = 0;

  let quote = null;
  let escaped = false;

  while (i < expression.length) {
    const ch = expression[i];


    /*
     * --------------------------------------------
     * INSIDE A QUOTED STRING
     * --------------------------------------------
     */
    if (quote !== null) {
      result += ch;

      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === quote) {
        quote = null;
      }

      i++;
      continue;
    }


    /*
     * --------------------------------------------
     * START OF A QUOTED STRING
     * --------------------------------------------
     */
    if (
      ch === '"' ||
      ch === "'"
    ) {
      quote = ch;
      result += ch;
      i++;
      continue;
    }


    /*
     * `this` must begin as its own identifier.
     *
     * Don't match:
     *
     *     somethingthis.Property
     */
    const previous =
      i > 0
        ? expression[i - 1]
        : "";

    const validBoundary =
      !isIdentifierCharacter(previous);


    /*
     * --------------------------------------------
     * this.file.*
     * --------------------------------------------
     */
    if (
      validBoundary &&
      expression.startsWith(
        "this.file.",
        i
      )
    ) {
      const propertyStart =
        i + "this.file.".length;

      const identifier =
        readIdentifier(
          expression,
          propertyStart
        );

      if (identifier) {
        const propertyName =
          identifier.value;

        const value =
          getHostFileProperty(
            host,
            propertyName
          );

        result +=
          toBasesLiteral(
            value,
            `this.file.${propertyName}`
          );

        i = identifier.end;
        continue;
      }
    }


    /*
     * --------------------------------------------
     * this.Property
     * --------------------------------------------
     */
    if (
      validBoundary &&
      expression.startsWith(
        "this.",
        i
      )
    ) {
      const propertyStart =
        i + "this.".length;

      const identifier =
        readIdentifier(
          expression,
          propertyStart
        );

      if (identifier) {
        const propertyName =
          identifier.value;

        const value =
          getHostProperty(
            host,
            propertyName
          );

        const description =
          `this.${propertyName}`;


        /*
         * Digital Garden currently expects:
         *
         *     containsAny("A", "B")
         *
         * not:
         *
         *     containsAny(["A", "B"])
         *
         * So expand host lists when they are passed directly to one
         * of these functions.
         */
        if (
          Array.isArray(value) &&
          isVariadicContainsArgument(
            expression,
            i
          )
        ) {
          result +=
            toBasesArguments(
              value,
              description
            );
        } else {
          result +=
            toBasesLiteral(
              value,
              description
            );
        }

        i = identifier.end;
        continue;
      }
    }


    /*
     * Ordinary character.
     */
    result += ch;
    i++;
  }

  return result;
}


/*
 * ------------------------------------------------
 * REWRITE FILTER TREES
 * ------------------------------------------------
 *
 * Bases filters may be:
 *
 *     "expression"
 *
 * an array:
 *
 *     - expression
 *     - expression
 *
 * or nested:
 *
 *     and:
 *       - ...
 *       - or:
 *           - ...
 *
 * Recursively walk the structure and rewrite expression strings.
 */
function rewriteFilterBlock(
  block,
  host
) {
  if (typeof block === "string") {
    return rewriteExpression(
      block,
      host
    );
  }

  if (Array.isArray(block)) {
    return block.map(
      (item) =>
        rewriteFilterBlock(
          item,
          host
        )
    );
  }

  if (
    block &&
    typeof block === "object"
  ) {
    const rewritten = {};

    for (
      const [key, value]
      of Object.entries(block)
    ) {
      rewritten[key] =
        rewriteFilterBlock(
          value,
          host
        );
    }

    return rewritten;
  }

  return block;
}


/*
 * ------------------------------------------------
 * REWRITE AN ENTIRE BASE
 * ------------------------------------------------
 *
 * Parse the YAML and touch ONLY actual expression-bearing fields.
 *
 * This avoids blindly changing:
 *
 *     display names
 *     view names
 *     other unrelated strings
 *
 * Digital Garden itself normalizes escaped pipes before parsing Base
 * YAML, so this does the same.
 */
function rewriteBaseYaml(
  source,
  host
) {
  let base;

  try {
    base = yaml.parse(
      source.replace(/\\\|/g, "|")
    );
  } catch (error) {
    throw new Error(
      "Could not parse Base YAML: " +
      error.message
    );
  }

  if (
    !base ||
    typeof base !== "object"
  ) {
    return source;
  }


  /*
   * Global filters.
   */
  if (base.filters !== undefined) {
    base.filters =
      rewriteFilterBlock(
        base.filters,
        host
      );
  }


  /*
   * Formulas.
   *
   * Formula values are Base expressions.
   */
  if (
    base.formulas &&
    typeof base.formulas === "object" &&
    !Array.isArray(base.formulas)
  ) {
    for (
      const [name, expression]
      of Object.entries(
        base.formulas
      )
    ) {
      if (
        typeof expression === "string"
      ) {
        base.formulas[name] =
          rewriteExpression(
            expression,
            host
          );
      }
    }
  }


  /*
   * Individual views may also contain filters.
   */
  if (Array.isArray(base.views)) {
    for (const view of base.views) {
      if (
        view &&
        typeof view === "object" &&
        view.filters !== undefined
      ) {
        view.filters =
          rewriteFilterBlock(
            view.filters,
            host
          );
      }
    }
  }


  return yaml.stringify(base);
}


/*
 * ================================================================
 * MARKDOWN-IT HOOK
 * ================================================================
 */
function userMarkdownSetup(md) {
  /*
   * In Digital Garden 1.88.0 this is already a wrapper which
   * eventually delegates Base fences to basesPlugin.
   */
  const previousFence =
    md.renderer.rules.fence ||
    function (
      tokens,
      idx,
      options,
      env,
      self
    ) {
      return self.renderToken(
        tokens,
        idx,
        options
      );
    };


  md.renderer.rules.fence =
    function (
      tokens,
      idx,
      options,
      env,
      self
    ) {
      const token = tokens[idx];


      /*
       * Not a Base?
       *
       * Leave it completely untouched.
       */
      if (
        !token ||
        !token.info ||
        token.info.trim() !== "base"
      ) {
        return previousFence(
          tokens,
          idx,
          options,
          env,
          self
        );
      }


      /*
       * Base doesn't use `this`?
       *
       * Again, stock Digital Garden only.
       */
      if (
        !/\bthis\./.test(
          token.content
        )
      ) {
        return previousFence(
          tokens,
          idx,
          options,
          env,
          self
        );
      }


      /*
       * Establish the actual page containing this Base.
       */
      const host =
        getHostContext(env);


      /*
       * If we cannot even identify the host page, FAIL THIS BASE
       * VISIBLY.
       *
       * Do not silently convert a broken `this` lookup into undefined,
       * because that is exactly how the original blank-property false
       * matches happen.
       */
      if (!host) {
        const message =
          "Could not determine the note containing this Base.";

        console.error(
          "[Bases this compatibility] " +
          message
        );

        return (
          '<div class="obsidian-base-error">' +
          escapeHtml(message) +
          "</div>"
        );
      }


      const originalContent =
        token.content;


      try {
        /*
         * Resolve host-page `this` references.
         */
        token.content =
          rewriteBaseYaml(
            originalContent,
            host
          );


        /*
         * Hand the rewritten Base straight back through Digital
         * Garden's existing renderer chain.
         */
        return previousFence(
          tokens,
          idx,
          options,
          env,
          self
        );
      } catch (error) {
        const message =
          "Error resolving this.* in Base: " +
          (
            error &&
            error.message
              ? error.message
              : String(error)
          );

        console.error(
          "[Bases this compatibility]",
          error
        );

        return (
          '<div class="obsidian-base-error">' +
          escapeHtml(message) +
          "</div>"
        );
      } finally {
        /*
         * Never leave rewritten YAML attached to the Markdown token.
         */
        token.content =
          originalContent;
      }
    };
}


/*
 * No Eleventy-level setup is required.
 */
function userEleventySetup(
  eleventyConfig
) {
}


exports.userMarkdownSetup =
  userMarkdownSetup;

exports.userEleventySetup =
  userEleventySetup;
