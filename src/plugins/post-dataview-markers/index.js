// Post-Dataview Filters
//
// Applies regex replacements during the Digital Garden site build, after
// Obsidian has already compiled Dataview output and before the resulting
// Markdown is rendered to HTML.
//
// FILTER CONFIGURATION LIVES AT THE TOP OF garden-plugin.json under:
//     "postDataviewFilters": [ ... ]
//
// Add or remove as many filter objects as needed. Filters run top-to-bottom.

const manifest = require("./garden-plugin.json");

function collectFilters(sourceManifest = manifest) {
    const configured = sourceManifest?.postDataviewFilters;
    if (!Array.isArray(configured)) return [];

    return configured
        .map((filter, index) => ({
            index,
            name:
                typeof filter?.name === "string" && filter.name.trim()
                    ? filter.name.trim()
                    : `Filter ${index + 1}`,
            pattern:
                typeof filter?.pattern === "string"
                    ? filter.pattern
                    : "",
            replacement:
                typeof filter?.replacement === "string"
                    ? filter.replacement
                    : "",
            flags:
                typeof filter?.flags === "string" && filter.flags.length > 0
                    ? filter.flags
                    : "g",
        }))
        .filter((filter) => filter.pattern.length > 0);
}

function applyFilters(source, sourceManifest = manifest, warn = console.warn) {
    if (typeof source !== "string" || source.length === 0) return source;

    let output = source;

    for (const filter of collectFilters(sourceManifest)) {
        try {
            const regex = new RegExp(filter.pattern, filter.flags);
            output = output.replace(regex, filter.replacement);
        } catch (error) {
            warn(
                `[post-dataview-filters] ${filter.name} skipped: ${error.message}`,
            );
        }
    }

    return output;
}

module.exports = {
    setupMarkdown(md) {
        md.core.ruler.before(
            "normalize",
            "post-dataview-filters",
            (state) => {
                state.src = applyFilters(state.src);
            },
        );
    },

    // Exported for straightforward local/manual tests.
    collectFilters,
    applyFilters,
};
