---
{"dg-publish":true,"permalink":"/database/factions/mindful-eyes/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-12T05:55:01.778-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Mindful Eyes","Beliefs":["Don't Let Your Gift Be Abused","Survival Through Secrecy"],"Paragon":"[[Database/People/The Mother And The Father]]","Fealty":6,"Fellowship":8,"Force":2,"Fraternity":4,"aliases":["Hive"]}}
---


>[!INFOBOX|wm-sm]
># Mindful Eyes
>`=embed(link(this.Portrait))`
>
>
>
>|SKILL|RANK|
>|--|:--:|
>|Fealty|6|
>|Fellowship|8|
>|Force|2|
>|Fraternity|4|
>
>
>**BELIEFS**
><div><ul class="dataview list-view-ul"><li><span>Don't Let Your Gift Be Abused</span></li><li><span>Survival Through Secrecy</span></li></ul></div>
>
> **PARAGON**
>[[Database/People/The Mother And The Father\|The Mother And The Father]]

[[Database/History/The Hive Mind\|Hive mind]] refugees that came together due to war, betrayal, and abuse of their gift. They find comfort and community between themselves with two defacto leaders that are more symbolic than literal. 

Paragons: Mother and Father. Nature and nurture with structure and care.

Fellowship: Care for your fellow Eye. Make sure we stay together through tough times. 

Fealty: Above all else, never let your power be abused. We've been used once before... but not again. 

Fraternity: With wars and conflicts, some still have connections with some of their allies. 

Force: Not the forefront, but not slacked. If ever needed, they rely on small, elite strike teams. Unfortunately, their low numbers mean they need to be very deliberate about when and where to deploy, and they can't always answer every threat without giving ground elsewhere.

```base
filters:
  and:
    - file.hasTag("character")
    - Faction == "Mindful Eyes"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    sort:
      - property: Rank
        direction: ASC
    separator: " - "
    markers: none
    image: note.Portrait
    imageAspectRatio: 0.5
    cardSize: 160
    indentProperties: false
```
{ #FactionTable}


```base
filters:
  and:
    - file.tags.contains("location")
    - or:
        - Faction == "Mindful Eyes"
        - Faction_Presence.contains("Mindful Eyes")
properties:
  note.file.name:
    displayName: Location
  note.faction_Control:
    displayName: Leadership
  note.faction_Presence:
    displayName: Other Factions
  note.control:
    displayName: Status
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Faction
      - Control
      - Faction_Presence
    indentProperties: false
```

```base
filters:
  and:
    - Faction.contains("Mindful Eyes")
    - file.tags.contains("Mech")
    - file.folder != "Database/Mechs/Sample"
properties:
  file.name:
    displayName: Mech
views:
  - type: cards
    name: Mobile Suits
    order:
      - file.name
    indentProperties: false
    imageAspectRatio: 0.5
    image: MECH_Portrait
    imageFit: cover
```