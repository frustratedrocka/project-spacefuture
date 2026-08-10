---
{"dg-publish":true,"permalink":"/database/factions/jovian-consortium/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-10T10:33:39.350-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Jovians","Beliefs":["Obedience Through Power","Trust The (Long) Process"],"Paragon":"[[The CEO]]","Fealty":4,"Fellowship":2,"Force":6,"Fraternity":8,"aliases":["Insiders"]}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 4 | 2 | 6 | 8 |

**BELIEFS** Obedience Through Power,Trust The (Long) Process
**PARAGON** [[Database/People/The CEO\|The CEO]]

The corporate council that forms the effective governing body of the [[Database/Places/Jupiter Sphere/Jupiter\|Jupiter]] sphere. Whether they hold the leash of [[Database/Factions/Apsis\|Apsis]] or the other way around is becoming a murkier question every day.

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Jovians"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    markers: none
    indentProperties: false
    separator: " - "

```
{ #FactionTable}


```base
filters:
  and:
    - Faction == ""
	- file.hasTag("")
views:
  - type: list
    name: 
    order:
      - file.name
    image: note.Portrait
    imageAspectRatio: 0.65
    cardSize: 200
    indentProperties: false

```