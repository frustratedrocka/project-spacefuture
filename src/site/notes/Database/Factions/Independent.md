---
{"dg-publish":true,"permalink":"/database/factions/independent/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-09-04T09:59:07.020-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Independent","Beliefs":[[null]],"Paragon":"","Fealty":2,"Fellowship":2,"Force":2,"Fraternity":2,"aliases":null}}
---







```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Independent"
views:
  - type: list
    name: Unaligned NPCs
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    columnSize:
      note.Concept: 212
    separator: " - "
    markers: none
    image: note.Portrait
    imageAspectRatio: 0.7
    cardSize: 240
    indentProperties: false

```
{ #FactionTable}



```base
filters:
  and:
    - file.hasTag("location")
    - or:
        - Faction.contains(this.file.name)
        - Faction_Presence.contains(this.file.name)
    - '!file.inFolder("Admin/Templates")'
properties:
  note.Faction_Presence:
    displayName: Other Presence
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Type
      - Faction
      - Control
      - Faction_Presence

```



```base
filters:
  and:
    - file.hasTag("Mech")
    - '!file.inFolder("Admin/Templates")'
    - '!file.inFolder("Database/Mechs/Sample")'
    - Faction.contains(this.file.name)
views:
  - type: cards
    name: Mobile Suits
    order:
      - file.name
    cardSize: 160
    image: note.MECH_Portrait
    imageAspectRatio: 0.5

```
