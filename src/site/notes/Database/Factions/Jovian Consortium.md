---
{"dg-publish":true,"permalink":"/database/factions/jovian-consortium/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-12T05:53:50.488-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Jovians","Beliefs":["Obedience Through Power","Trust The (Long) Process"],"Paragon":"The CEO","Fealty":4,"Fellowship":2,"Force":6,"Fraternity":8,"aliases":["Insiders"]}}
---


>[!INFOBOX|wm-sm]
># Jovian Consortium
>`=embed(link(this.Portrait))`
>
>
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|4|
>|**FELLOWSHIP**|2|
>|**FORCE**|6|
>|**FRATERNITY**|8|
>
>
>**BELIEFS**
><div><ul class="dataview list-view-ul"><li><span>Obedience Through Power</span></li><li><span>Trust The (Long) Process</span></li></ul></div>
>
> **PARAGON**
>[[Database/People/The CEO\|The CEO]]

The corporate council that forms the effective governing body of the [[Database/Places/Jupiter Sphere/Jupiter\|Jupiter]] sphere. Whether they hold the leash of [[Database/Factions/Apsis\|Apsis]] or the other way around is becoming a murkier question every day.

```base
filters:
  and:
    - file.hasTag("character")
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
    image: note.Portrait
    imageAspectRatio: 0.5
    cardSize: 160
    indentProperties: false
```
{ #FactionTable}


```base
filters:
  and:
    - file.tags.contains("location")
    - or:
        - Faction == "Jovian Consortium"
        - Faction_Presence.contains("Jovian Consortium")
properties:
  note.file.name:
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
      - Faction
      - Control
      - Faction_Presence
    indentProperties: false
```

```base
filters:
  and:
    - Faction.contains("Jovian Consortium")
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