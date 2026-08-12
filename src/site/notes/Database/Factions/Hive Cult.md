---
{"dg-publish":true,"permalink":"/database/factions/hive-cult/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-12T06:07:34.219-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Hive Cult","Beliefs":["The Queen's Word Is Law","Their Gift Is Our Destiny","Never Turn A Blind Eye"],"Paragon":"[[Database/People/The Queen]]","Fealty":8,"Fellowship":6,"Force":4,"Fraternity":2,"aliases":["Cult"]}}
---


>[!INFOBOX|ws-med]
># Hive Cult
>`=embed(link(this.Portrait))`
>
>|||
>|--|--|
>|**PARAGON**|[[Database/People/The Queen\|The Queen]]|
>|**BELIEFS**|"The Queen's Word Is Law"<br>"Their Gift Is Our Destiny"<br>"Never Turn A Blind Eye"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|8|
>|**FELLOWSHIP**|6|
>|**FORCE**|4|
>|**FRATERNITY**|2|


Hive Cultists

They decide they want in on [[Database/History/The Hive Mind\|The Hive Mind]] even though it has been cut off, which leads down a path of kidnapping, experimentation, and cannibalism. This leads to something like a mixture of the hivemind and Superkuru coming into being; it's all the worst aspects of the concept of a Hivemind the OG avoided. 

Don't like [[Database/Factions/Mindful Eyes\|Mindful Eyes]] - think they could do better if only they were given a chance. If they find a member, *take them*. "Never Turn A Blind Eye" includes being ever-vigilant and never missing an opportunity.

```base
filters:
  and:
    - file.hasTag("character")
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
        - Faction == "Hive Cult"
        - Faction_Presence.contains("Hive Cult")
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
    - Faction.contains("Hive Cult")
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
    cardSize: 160
```