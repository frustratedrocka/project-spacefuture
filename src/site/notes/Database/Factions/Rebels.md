---
{"dg-publish":true,"permalink":"/database/factions/rebels/","tags":["faction"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-08-09T23:54:21.744-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Rebels","Beliefs":[[null]],"Paragon":"","Fealty":2,"Fellowship":2,"Force":2,"Fraternity":2,"aliases":["Faction 1"]}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** `=this.Paragon`

```base
filters:
  and:
    - Faction == "Rebels"
    - or:
        - file.hasTag("PC", "npc")
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    image: note.Portrait
    imageAspectRatio: 0.65
    cardSize: 200
    indentProperties: false

```
{ #FactionTable}

