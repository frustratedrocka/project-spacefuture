---
{"dg-publish":true,"permalink":"/database/factions/apsis/","tags":["faction"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-08-04T21:05:05.768-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Faction 2","Beliefs":["The Object of Power Is Power","We Are The Line Between The System And Starvation"],"Paragon":"[[The Man Upstairs]]","Fealty":2,"Fellowship":2,"Force":2,"Fraternity":2,"aliases":["Faction 2"]}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** The Object of Power Is Power,We Are The Line Between The System And Starvation
**PARAGON** [[Database/NPCs/The Man Upstairs\|The Man Upstairs]]

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Faction 2"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
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

