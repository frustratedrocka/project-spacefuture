---
{"dg-publish":true,"permalink":"/database/factions/jovian-consortium/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-10T16:51:01.762-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Jovians","Beliefs":["Obedience Through Power","Trust The (Long) Process"],"Paragon":"[[Database/People/The CEO]]","Fealty":4,"Fellowship":2,"Force":6,"Fraternity":8,"aliases":["Insiders"]}}
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
    - file.tags.contains("npc")
    - Faction == "Jovian Consortium"
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
    separator: " - "
    markers: none
    indentProperties: false

```
{ #FactionTable}


```base
filters:
  and:
    - faction_Control == "Jovian Consortium"
    - file.tags.contains("location")
properties:
  file.name:
    displayName: Location
  note.faction_Control:
    displayName: Leadership
  note.faction_Presence:
    displayName: Other Factions
  note.control:
    displayName: Status
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - faction_Control
      - control
      - faction_Presence
    indentProperties: false

```

```base
filters:
  and:
    - User_Factions.contains("Jovian Consortium")
    - file.tags.contains("Mech")
    - file.folder != "Database/Mechs/Sample"
properties:
  file.name:
    displayName: Mech
views:
  - type: cards
    name: Mobile Suits
    order:
      - file.name
    indentProperties: false
    imageAspectRatio: 0.5
    image: MECH_Portrait
    imageFit: cover

```
