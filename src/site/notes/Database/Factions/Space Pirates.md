---
{"dg-publish":true,"permalink":"/database/factions/space-pirates/","tags":["faction"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-08-11T15:56:26.043-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Space Pirates","Beliefs":["Take Back What's Ours","Loyalty Among Thieves"],"Paragon":"[[Database/People/The Pirate King]]","Fealty":2,"Fellowship":8,"Force":6,"Fraternity":4,"aliases":["Survivors"]}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 8 | 6 | 4 |

**BELIEFS** Take Back What's Ours,Loyalty Among Thieves
**PARAGON** [[Database/People/The Pirate King\|The Pirate King]]

Refugees, displaced people, exiles with chips on their shoulder

```base
filters:
  and:
    - file.hasTag("character")
    - Faction == "Space Pirates"
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
        - Faction == "Space Pirates"
        - Faction_Presence.contains("Space Pirates")
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
    - Faction.contains("Space Pirates")
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