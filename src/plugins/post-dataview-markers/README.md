# Post-Dataview Filters

Digital Garden build plugin for a second regex-filter pass **after Dataview has already been compiled by the Obsidian publisher** and **before Markdown is rendered to HTML**.

## Configure filters

There is no fixed number of filter slots.

Open `garden-plugin.json`. The **first field in the file** is the array you edit:

```json
"postDataviewFilters": [
  {
    "name": "Redacted",
    "pattern": "!r!([\\s\\S]*?)!/r!",
    "replacement": "`REDACTED`",
    "flags": "g"
  },
  {
    "name": "Hidden",
    "pattern": "!h!([\\s\\S]*?)!/h!",
    "replacement": "",
    "flags": "g"
  }
]
```

Filters run **top to bottom**. Add, remove, or reorder objects in that array as needed.

- **name** — human-readable label used in error messages; it does not affect matching.
- **pattern** — JavaScript regular-expression source.
- **replacement** — replacement text. Normal JavaScript replacement tokens such as `$1` work.
- **flags** — JavaScript RegExp flags such as `g`, `gi`, or `gs`. If omitted/blank, the plugin uses `g`.

### Empty filter template

Paste this inside `postDataviewFilters` whenever you need another filter:

```json
{
  "name": "DESCRIBE THIS FILTER",
  "pattern": "",
  "replacement": "",
  "flags": "g"
}
```

Remember to put a comma between adjacent filter objects.

## Default filters

The supplied manifest starts with:

| Filter | Pattern | Replacement | Flags |
| --- | --- | --- | --- |
| Redacted | `!r!([\\s\\S]*?)!/r!` | `` `REDACTED` `` | `g` |
| Hidden | `!h!([\\s\\S]*?)!/h!` | *(empty)* | `g` |
| Mech conditional | `!mech!([\\s\\S]*?)!/mech!` | *(empty)* | `g` |

The hook contains no marker-specific behavior. These are ordinary configurable regex replacements stored in the manifest.

## Why configuration lives in `garden-plugin.json`

Digital Garden's garden-plugin settings schema does not expose the repeatable `+ / -` array control used by its built-in Custom Filters UI. A manifest-defined array avoids an arbitrary slot limit while keeping the configuration in one obvious place.

Because `garden-plugin.json` is loaded by the hook when the build starts, **restart the Eleventy dev server after changing the filter array**.

## Install

Copy this folder to:

`src/plugins/post-dataview-markers/`

Then restart the Eleventy dev server.

## Intended conditional template use

Opening marker:

```md
`=choice(this.MECH_Model[0] = null, "!mech"+"!", choice(this.MECH_Secret = true, "!h"+"!", ""))`
```

Closing marker:

```md
`=choice(this.MECH_Model[0] = null, "!/mech"+"!", choice(this.MECH_Secret = true, "!/h"+"!", ""))`
```

With the default filters:

- no current mech -> `!mech! ... !/mech!` -> removed
- secret current mech -> `!h! ... !/h!` -> removed
- ordinary pilot -> no wrapper -> rendered normally

## Security boundary

This plugin removes protected content during the **garden build**. If the repository containing the published Markdown is publicly readable, material hidden only by dynamically generated markers may still exist in repository source even though it is absent from the built site. Keep the source repository private if dynamically hidden material is genuinely secret.
