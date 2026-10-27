# Digital Garden Image Sizing Compatibility — v1.1.0

An incremental replacement for v1.0.0 of `image-sizing-compat`. Reconstructs
image sizing from modifiers retained in Digital Garden's HTML `alt` attribute.

## Why this fixes HarOS

The published HarOS `<img>` has `alt="Haro.webpws-med right"` and displays at
its natural 538 × 534 pixels. `ws-med` is accessible in the HTML but no working
CSS sizing rule applies. This plugin recognizes `ws-med`, sets `width: 300px`
and `height: auto`, and **does not touch** DG's existing `float: inline-end`.

## Recognized numeric modifiers (unchanged from 1.0.0)

| Published `alt` suffix | Image behavior |
| --- | --- |
| `cover250x250` | 250 × 250 px, cropped (`object-fit: cover`) |
| `cover\|250x350` | 250 × 350 px, cropped |
| `250x275` | 250 × 275 px, `object-fit: contain` |

## ITS named pixel sizes (new)

| Width token | Width | Height token | Height |
| --- | ---: | --- | ---: |
| `wtiny` | 100px | `htiny` | 100px |
| `wsmall` | 200px | `hsmall` | 200px |
| `ws-med` | 300px | `hs-med` | 300px |
| `wm-sm` | 400px | `hm-sm` | 400px |
| `wmed` | 500px | `hmed` | 500px |
| `wm-tl` | 600px | `hm-tl` | 600px |
| `wtall` | 700px | `htall` | 700px |

Width-only modifiers use `height: auto`; height-only modifiers use `width: auto`.
A numeric size takes precedence if a modifier string has both numeric and named
sizes. `cover` applies `object-fit: cover` when both dimensions are specified.

Image alignment such as `right` is **not overridden**. Other ITS features like
banners, profiles, rotation, and the special `full` sizes are not yet translated.
This is a sizing compatibility upgrade, not an exact replacement for the entire
ITS Image Adjustments CSS snippet.

## Installation

Replace the existing `src/plugins/image-sizing-compat/` with this folder in
your garden repo, commit, and trigger a rebuild. **Do not install a second copy
alongside v1.0.0.** It shares the same plugin ID, and this version preserves the
numeric-sizing behavior while adding the named presets. You can also install
from a GitHub repository containing this plugin at its root.

## Browser diagnostic (published HarOS page)

```js
const haro = [...document.querySelectorAll('.content img')]
  .find(img => img.src.includes('Haro.webp'));
console.table({
  alt: haro?.alt,
  width: haro?.style.width,
  height: haro?.style.height,
  float: haro ? getComputedStyle(haro).float : null,
  renderedWidth: haro?.getBoundingClientRect().width,
  renderedHeight: haro?.getBoundingClientRect().height
});
```

Expected: `width: 300px`, `height: auto`, `float: inline-end`,
and rendered width around 300px (or less on a narrow screen).

## Implementation notes

- Uses the `common.footer` Digital Garden plugin slot.
- Watches for dynamically inserted Dataview images and `alt` changes.
- Does not rewrite image URLs, links, or alt attributes.
- Leaves images without supported modifiers unchanged.
- Responsive width cap (`max-width: 100%`) is retained from v1.0.0.
- Tested in a simulated DOM and checked for JavaScript syntax; **a live
  Digital Garden deployment has not yet been tested**.
