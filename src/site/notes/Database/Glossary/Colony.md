---
{"dg-publish":true,"permalink":"/database/glossary/colony/","tags":["index","glossary"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-26T05:50:42.713-04:00","dg-note-properties":{"tags":["index","glossary"]}}
---

![Stanford.jpg\|right ws-med](/img/user/Admin/Attachments/Stanford.jpg)

"Down" is a *very* fluid concept on most asteroid colonies.

The standard colony plan involves a rotating ring,  kilometers across, with the line between its center and the asteroid's center of gravity as its axis of rotation. This produces a similar effect to the common  hub-and-spokes space station / colony design proposal / scifi classic that uses centrifugal force to generate artificial gravity. 

The difference is that, on asteroids large enough to have perceptible microgravity, the outer ring needs to be a little bit tilted to compensate. It is not a perfect solution - an unavoidable side effect of the design is that the further starward you get, the heavier you effectively are. It's not by much, but it's not zero. 

Since terrestrial cardinal directions are a completely useless concept on a spinning almost-torus:

Up = hubward
Down = rimward
Spinward = turnwise = deosil
Anti/counterspinward = antiturnwise = widdershins
Away from the asteroid surface = starward/ skyward
Towards the asteroid surface = stone

For dimensions, we're looking at *roughly* 3 km stone-to-sky, 36km outer circumference. On average, each colony is designed to comfortably support a population of 5 million. 

Very few of them can currently be described as anywhere within a light minute of "comfortable." And the few that can would very much prefer that nobody think too hard about how they've stayed that way.

There's a noted irony here: the colonies with the massive visible densely-packed refugee spaces constructed in what was skyward dead space are the ones generally considered by non-shitheads to be doing it *right*, even as that exact image becomes xenophobic propaganda fuel.

```base
filters:
  and:
    - file.tags.contains("location")
    - Type == "Colony"
properties:
  note.file.name:
    displayName: Location
  note.Faction:
    displayName: Leadership
  note.Faction_Presence:
    displayName: Other Factions
  note.control:
    displayName: Status
views:
  - type: table
    name: Known Examples
    order:
      - file.name
      - Faction
      - Control
      - Faction_Presence
    indentProperties: false

```