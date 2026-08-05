---
{"dg-publish":true,"permalink":"/hive-cult/","tags":["faction"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-08-04T21:30:57.123-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Hive Cult","Beliefs":["The Queen's Word Is Law","Their Gift Is Our Destiny"],"Paragon":"[[The Queen]]","Fealty":8,"Fellowship":6,"Force":4,"Fraternity":2,"aliases":null}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 8 | 6 | 4 | 2 |

**BELIEFS** The Queen's Word Is Law,Their Gift Is Our Destiny
**PARAGON** [[The Queen\|The Queen]]
```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Hive Cult"
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


Hive Cultists

They decide they want in on [[Database/The Hive Mind\|The Hive Mind]] even though it has been cut off, which leads down a path of kidnapping, experimentation, and cannibalism. This leads to something like a mixture of the hivemind and Superkuru coming into being, it's all the worst aspects of the concept of a Hivemind the OG avoided. 

Don't like [[Mindful Eyes\|Mindful Eyes]] - think they could do better if only they were given a chance.