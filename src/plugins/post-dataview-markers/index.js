// Post-Dataview Markers
//
// Digital Garden compiles Dataview in Obsidian before the note reaches the
// Eleventy site build. This markdown-it rule therefore sees both ordinary
// authored markers and markers emitted dynamically by Dataview.
//
// Publication behavior:
//   !h!    ... !/h!     -> remove contents completely
//   !r!    ... !/r!     -> replace contents with `REDACTED`
//   !mech! ... !/mech!  -> remove contents completely
//
// Nesting policy: first/outermost marker wins. If an outer region closes
// across malformed nested markers, the nested state is discarded with it.
// An unmatched opening marker fails closed: the remainder is suppressed.

const RULES = [
    {
        name: "hidden",
        open: "!h!",
        close: "!/h!",
        replacement: "",
    },
    {
        name: "redacted",
        open: "!r!",
        close: "!/r!",
        replacement: "`REDACTED`",
    },
    {
        name: "mech",
        open: "!mech!",
        close: "!/mech!",
        replacement: "",
    },
];

function buildTokens() {
    const tokens = [];

    RULES.forEach((rule, ruleIndex) => {
        tokens.push({
            text: rule.open,
            kind: "open",
            ruleIndex,
        });
        tokens.push({
            text: rule.close,
            kind: "close",
            ruleIndex,
        });
    });

    // If markers ever share a prefix, prefer the longest exact token.
    return tokens.sort((a, b) => b.text.length - a.text.length);
}

const TOKENS = buildTokens();

function findNextMarker(source, start) {
    let best = null;

    for (const token of TOKENS) {
        const index = source.indexOf(token.text, start);
        if (index === -1) continue;

        if (
            best === null ||
            index < best.index ||
            (index === best.index && token.text.length > best.token.text.length)
        ) {
            best = { index, token };
        }
    }

    return best;
}

function processMarkers(source) {
    if (typeof source !== "string" || source.length === 0) {
        return source;
    }

    // Cheap exit for the overwhelmingly common case.
    if (!RULES.some((rule) => source.includes(rule.open))) {
        return source;
    }

    let output = "";
    let position = 0;
    const stack = [];

    while (position < source.length) {
        const marker = findNextMarker(source, position);

        if (!marker) {
            // Fail closed: if a hide/redact/conditional region was opened but
            // never closed, do not leak the remainder of the note.
            if (stack.length === 0) {
                output += source.slice(position);
            }
            break;
        }

        // Ordinary text is emitted only when no visibility marker is active.
        if (stack.length === 0) {
            output += source.slice(position, marker.index);
        }

        const { token } = marker;
        position = marker.index + token.text.length;

        if (token.kind === "open") {
            const wasOutside = stack.length === 0;
            stack.push(token.ruleIndex);

            // The outermost marker owns the whole region. Redaction emits its
            // replacement once, at the point where the outer region begins.
            if (wasOutside) {
                output += RULES[token.ruleIndex].replacement;
            }

            continue;
        }

        // Closing marker. Find its matching opener in the active stack.
        // If malformed/crossing markers exist, closing an outer region also
        // consumes anything that was opened inside it: outermost wins.
        let matchIndex = -1;
        for (let i = stack.length - 1; i >= 0; i--) {
            if (stack[i] === token.ruleIndex) {
                matchIndex = i;
                break;
            }
        }

        if (matchIndex !== -1) {
            stack.length = matchIndex;
        }
        // Unmatched closing markers are stripped rather than published.
    }

    return output;
}

module.exports = {
    setupMarkdown(md) {
        md.core.ruler.before(
            "normalize",
            "post-dataview-markers",
            (state) => {
                state.src = processMarkers(state.src);
            },
        );
    },

    // Exported only to make local/manual testing easy; the garden loader
    // ignores exports it does not use.
    processMarkers,
};
