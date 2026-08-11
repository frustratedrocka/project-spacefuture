---
{"dg-publish":true,"permalink":"/database/factions/rebels/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-10T19:52:38.501-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Rebels","Beliefs":[[null]],"Paragon":"","Fealty":2,"Fellowship":2,"Force":2,"Fraternity":2,"aliases":["Rebels"]}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** `=this.Paragon`

Formed as a direct response to [[Database/Factions/Apsis\|Apsis]] attempting to make an example of multiple dissenting colonies - [[Database/Places/Colonies/Cairo\|Cairo]], [[Database/Places/Colonies/Brisbane\|Brisbane]], [[Database/Places/Colonies/Mumbai\|Mumbai]] - by cutting their food allotments below starvation levels. 


```base
filters:
  and:
    - Faction == "Rebels"
    - file.hasTag("npc", "PC")
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
    - faction_Control == "Rebels"
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
    - User_Factions.contains("Rebels")
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