---
{"dg-publish":true,"permalink":"/database/factions/rebels/","tags":["faction"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-08-10T00:18:24.774-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Rebels","Beliefs":[[null]],"Paragon":"","Fealty":2,"Fellowship":2,"Force":2,"Fraternity":2,"aliases":["Faction 1"]}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** `=this.Paragon`

Formed as a direct response to [[Database/Factions/Apsis\|Apsis]] attempting to make an example of multiple dissenting colonies - [[New Cairo\|New Cairo]], [[New Brisbane\|New Brisbane]], [[New Mumbai\|New Mumbai]] - by cutting their food allotments below starvation levels. 

```base
filters:
  and:
    - Faction == "Rebels"
    - file.hasTag("npc")
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
    markers: none

```
{ #FactionTable}

