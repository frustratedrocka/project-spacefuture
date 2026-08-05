---
{"dg-publish":true,"permalink":"/database/factions/jovians/","tags":["faction"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-08-04T21:15:47.969-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Faction 4","Beliefs":["Obedience Through Power"],"Paragon":"[[The CEO]]","Fealty":2,"Fellowship":2,"Force":2,"Fraternity":2,"aliases":null}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** Obedience Through Power
**PARAGON** [[Database/Factions/The CEO\|The CEO]]
```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Faction X"
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

