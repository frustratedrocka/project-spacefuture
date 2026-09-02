---
{"dg-publish":true,"permalink":"/database/glossary/colony/","tags":["index","glossary"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-09-02T05:46:24.833-04:00","dg-note-properties":{"tags":["index","glossary"]}}
---

![Stanford.jpg\|right ws-med](/img/user/Admin/Attachments/Stanford.jpg)

# Orientation
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

For dimensions, we're looking at *roughly* 3 km stone-to-sky, 36km outer circumference. 

## Population Constraints
On average, each colony is designed to comfortably support a population of 5 million, with enough green space to facilitate emergency subsistence levels of agriculture and (mostly) densely-packed urban residential areas

Very few of them can currently be described as anywhere within a light minute of "comfortable." And the few that can would very much prefer that nobody think too hard about how they've stayed that way.

There's a noted irony here: the colonies with the massive visible densely-packed refugee spaces constructed in what was skyward dead space are the ones generally considered by non-shitheads to be doing it *right*, even as that exact image becomes xenophobic propaganda fuel.

## It Seemed Like A Good Idea At The Time...
The standard urban plan for a colony includes a few consistent features:

- Built with the axis of rotation perpendicular to the sun (to the greatest extent possible based on the spin of the asteroid it's on)
- If asteroid is effectively tidally locked (ideal but rare), build 60% of the skyward bulkhead with a window to create a natural day/night cycle supplemented by artificial lighting
- The further stone you go, the taller the buildings get - except where rich people have circumvented that and bought their way around regulations meant to ensure everyone can get some natural light. Which is most places.
- So realistically, most of the light is artificial.
- The major industrial sections jut out from the stone wall at the spoke connectors, far enough to easily access the freight elevators to and from the hangars and docks at the hub, and going pretty much all the way up to the hubward ceiling of the actual colony ring, where exhaust goes out to a scrubber system and gets contaminants separated from the air and spaced before the air is filtered back into the ring proper.

So, to recap: The _expected_ design was that the shorter skyward buildings would be flatter - homes of the rich (more desirable real estate and less of it available), parks, eventually farmland. The entire stoneward wall that you can see from most parts of the colony is practically one enormous packed-in housing project. Between is the gradient. Now, add one colossal unanticipated population influx to this design.

Congratulations, you now have one gigantic clusterfuck repeated dozens of times, each with its own unique brand of chaos! 

# Ship Logistics
Ships either dock with the (static) internal hub of the wheel, or match speed with the asteroid and "park" as close as is feasible, with colony longshoremen in mobile suits loading and unloading containers.

# Governance
Each colony is its own independent polity, so government structures vary wildly between them. See [[Database/Glossary/The Belt\|The Belt]] and individual colony pages for details. 

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