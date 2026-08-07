---
{"dg-publish":true,"permalink":"/database/factions/jovians/","tags":["faction"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-08-04T21:53:48.440-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Jovians","Beliefs":["Obedience Through Power","Trust The (Long) Process"],"Paragon":"[[The CEO]]","Fealty":4,"Fellowship":2,"Force":6,"Fraternity":8,"aliases":"Insiders"}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 4 | 2 | 6 | 8 |

**BELIEFS** Obedience Through Power,Trust The (Long) Process
**PARAGON** [[Database/NPCs/The CEO\|The CEO]]
```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Jovians"
views:
  - type: table
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty

```
{ #FactionTable}

