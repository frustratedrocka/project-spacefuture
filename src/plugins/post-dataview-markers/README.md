# Post-Dataview Markers

Digital Garden build plugin for a second visibility-marker pass **after Dataview has already been compiled by the Obsidian publisher** and **before Markdown is rendered to HTML**.

## Markers

| Marker | Published result |
| --- | --- |
| `!h! ... !/h!` | removed completely |
| `!r! ... !/r!` | replaced with `` `REDACTED` `` |
| `!mech! ... !/mech!` | removed completely |

The parser is nesting-aware and uses the outermost marker as the governing rule. Unclosed opening markers fail closed: the rest of the note is suppressed.

## Install

Copy this folder to:

`src/plugins/post-dataview-markers/`

A valid `garden-plugin.json` is sufficient for Digital Garden to load it. Restart the local Eleventy dev server after adding or changing the hook/manifest.

## Intended template use

Opening marker:

```md
`=choice(this.MECH_Model[0] = null, "!mech"+"!", choice(this.MECH_Secret = true, "!h"+"!", ""))`
```

Closing marker:

```md
`=choice(this.MECH_Model[0] = null, "!/mech"+"!", choice(this.MECH_Secret = true, "!/h"+"!", ""))`
```

Result:

- no current mech -> `!mech! ... !/mech!` -> omitted publicly
- secret current mech -> `!h! ... !/h!` -> omitted publicly
- ordinary pilot -> no markers -> rendered normally

## Important security boundary

This plugin removes protected content during the **garden build**. If the repository containing the published Markdown is publicly readable, material that only becomes hidden through dynamically generated markers may still exist in the repository source even though it is absent from the built site. Keep the source repository private if those dynamically hidden sections are genuinely secret.
