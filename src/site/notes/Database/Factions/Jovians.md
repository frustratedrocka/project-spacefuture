---
{"dg-publish":true,"permalink":"/database/factions/jovians/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-10T00:11:52.721-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Jovians","Beliefs":["Obedience Through Power","Trust The (Long) Process"],"Paragon":"[[The CEO]]","Fealty":4,"Fellowship":2,"Force":6,"Fraternity":8,"aliases":"Insiders"}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 4 | 2 | 6 | 8 |

**BELIEFS** Obedience Through Power,Trust The (Long) Process
**PARAGON** [[Database/NPCs/The CEO\|The CEO]]

The corporate council that forms the effective governing body of [[Database/Places/Jupiter\|Jupiter]]. Whether they hold the leash of [[Database/Factions/Apsis\|Apsis]] or the other way around is becoming a murkier question every day.

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

