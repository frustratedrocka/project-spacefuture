---
{"dg-publish":true,"permalink":"/space-pirates/","tags":["faction"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-08-04T21:48:56.535-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Pirates","Beliefs":["Take Back What's Ours","Loyalty Among Thieves"],"Paragon":"[[The Pirate King]]","Fealty":2,"Fellowship":8,"Force":6,"Fraternity":4,"aliases":"Survivors"}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 8 | 6 | 4 |

**BELIEFS** Take Back What's Ours,Loyalty Among Thieves
**PARAGON** [[The Pirate King\|The Pirate King]]
```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Pirates"
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


Refugees, displaced people, exiles with chips on their shoulder