---
{"dg-publish":true,"permalink":"/mindful-eyes/","tags":["faction"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-08-04T21:29:03.397-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Mindful Eyes","Beliefs":["Don't Let Your Gift Be Abused"],"Paragon":"[[The Mother And The Father]]","Fealty":6,"Fellowship":8,"Force":2,"Fraternity":4,"aliases":null}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 6 | 8 | 2 | 4 |

**BELIEFS** Don't Let Your Gift Be Abused
**PARAGON** [[The Mother And The Father\|The Mother And The Father]]
```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Mindful Eyes"
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


Hive Remnants