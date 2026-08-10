---
{"dg-publish":true,"permalink":"/database/factions/mindful-eyes/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-10T17:32:59.463-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Mindful Eyes","Beliefs":["Don't Let Your Gift Be Abused","Survival Through Secrecy"],"Paragon":"[[Database/People/The Mother And The Father]]","Fealty":6,"Fellowship":8,"Force":2,"Fraternity":4,"aliases":["Hive"]}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 6 | 8 | 2 | 4 |

**BELIEFS** Don't Let Your Gift Be Abused,Survival Through Secrecy
**PARAGON** [[Database/People/The Mother And The Father\|The Mother And The Father]]

The semi-organized portion of what's left of [[Game Creation/The Hive Mind\|The Hive Mind]]. Not all survivors are aligned with the faction, but all are aware of it.

```base
filters:
  and:
    - file.hasTag("npc")
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


