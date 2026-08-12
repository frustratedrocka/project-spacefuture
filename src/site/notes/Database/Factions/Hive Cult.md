---
{"dg-publish":true,"permalink":"/database/factions/hive-cult/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-11T01:03:27.385-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Hive Cult","Beliefs":["The Queen's Word Is Law","Their Gift Is Our Destiny","Never Turn A Blind Eye"],"Paragon":"[[Database/People/The Queen]]","Fealty":8,"Fellowship":6,"Force":4,"Fraternity":2,"aliases":["Cult"]}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 8 | 6 | 4 | 2 |

**BELIEFS** The Queen's Word Is Law,Their Gift Is Our Destiny,Never Turn A Blind Eye
**PARAGON** [[Database/People/The Queen\|The Queen]]

Hive Cultists

They decide they want in on [[Database/History/The Hive Mind\|The Hive Mind]] even though it has been cut off, which leads down a path of kidnapping, experimentation, and cannibalism. This leads to something like a mixture of the hivemind and Superkuru coming into being; it's all the worst aspects of the concept of a Hivemind the OG avoided. 

Don't like [[Database/Factions/Mindful Eyes\|Mindful Eyes]] - think they could do better if only they were given a chance. If they find a member, *take them*. "Never Turn A Blind Eye" includes being ever-vigilant and never missing an opportunity.

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Hive Cult"
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

^FactionTable