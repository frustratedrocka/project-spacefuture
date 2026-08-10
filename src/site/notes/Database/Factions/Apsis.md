---
{"dg-publish":true,"permalink":"/database/factions/apsis/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-10T16:30:14.623-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Faction 2","Beliefs":["We Are The Line Between The System And Starvation","Our Ends Justify Any Means"],"Paragon":"[[Database/People/The Man Upstairs]]","Fealty":4,"Fellowship":2,"Force":8,"Fraternity":6,"aliases":["Faction 2","Oppressors"]}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 4 | 2 | 8 | 6 |

**BELIEFS** We Are The Line Between The System And Starvation,Our Ends Justify Any Means
**PARAGON** [[Database/People/The Man Upstairs\|The Man Upstairs]]

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Apsis"
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
    - faction_Control == "Apsis"
    - file.tags.contains("location")
properties:
  file.name:
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
      - faction_Control
      - control
      - faction_Presence
    indentProperties: false

```

```base
filters:
  and:
    - file.hasTag("Mech")
    - file.folder != "Admin/Templates"
    - User_Factions.contains("Apsis")
properties:
  note.MECH_Concept:
    displayName: Concept
  note.MECH_Trouble:
    displayName: Trouble
  note.MECH_Stunts:
    displayName: Stunts
  note.Known_Users:
    displayName: Known Pilots
  note.User_Factions:
    displayName: Associated Factions
views:
  - type: cards
    name: Mech Catalog
    order:
      - file.name
      - Known_Users
      - User_Factions
    image: MECH_Portrait
    imageFit: cover
    cardSize: 200
    imageAspectRatio: 0.65

```

