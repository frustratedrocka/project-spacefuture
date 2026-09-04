---
{"dg-publish":true,"permalink":"/test-bases/","tags":["faction"],"noteIcon":"","updated":"2026-09-04T09:26:48.290-04:00","dg-note-properties":{"tags":["faction"],"Faction":null,"Beliefs":[null],"Paragon":null,"Fealty":2,"Fellowship":2,"Force":2,"Fraternity":2,"aliases":[null]}}
---


>[!INFOBOX|ws-med]
># TEST Bases
>`=embed(link(this.Portrait))`
>
>
>
>|SKILL|RANK|
>|--|:--:|
>|Fealty|2|
>|Fellowship|2|
>|Force|2|
>|Fraternity|2|
>
>
>**BELIEFS**
><div><ul class="dataview list-view-ul"><li><span>-</span></li></ul></div>
>
> **PARAGON**
>`=link(this.Paragon)`



```base
filters:
  and:
    - file.hasTag("character")
    - Faction == this.file.name
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
        - Faction == ""
        - Faction_Presence.contains("")
properties:
  note.file.name:
    displayName: Location
  note.Faction:
    displayName: Leadership
  note.Faction_Presence:
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
    - Faction.contains("")
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