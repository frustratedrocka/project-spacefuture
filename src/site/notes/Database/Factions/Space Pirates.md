---
{"dg-publish":true,"permalink":"/database/factions/space-pirates/","tags":["faction"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-08-09T23:59:58.928-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Space Pirates","Beliefs":["Take Back What's Ours","Loyalty Among Thieves"],"Paragon":"[[The Pirate King]]","Fealty":2,"Fellowship":8,"Force":6,"Fraternity":4,"aliases":"Survivors"}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 8 | 6 | 4 |

**BELIEFS** Take Back What's Ours,Loyalty Among Thieves
**PARAGON** [[Database/Factions/The Pirate King\|The Pirate King]]
```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Space Pirates"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    separator: " - "

```
{ #FactionTable}


Refugees, displaced people, exiles with chips on their shoulder