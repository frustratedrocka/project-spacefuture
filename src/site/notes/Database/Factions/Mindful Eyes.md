---
{"dg-publish":true,"permalink":"/database/factions/mindful-eyes/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-10T02:34:18.678-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Mindful Eyes","Beliefs":["Don't Let Your Gift Be Abused"],"Paragon":"[[Database/People/The Mother And The Father]]","Fealty":6,"Fellowship":8,"Force":2,"Fraternity":4,"aliases":["Hive"]}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 6 | 8 | 2 | 4 |

**BELIEFS** Don't Let Your Gift Be Abused
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
    separator: " - "
    markers: none

```
{ #FactionTable}


