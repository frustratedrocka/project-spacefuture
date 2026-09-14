---
{"dg-publish":true,"permalink":"/database/factions/hive-cult/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-09-13T23:13:43.015-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Hive Cult","Beliefs":["The Queen's Word Is Law","Their Gift Is Our Destiny","Never Turn A Blind Eye"],"Paragon":"[[Database/People/The Queen]]","Fealty":8,"Fellowship":6,"Force":4,"Fraternity":2,"aliases":["Cult"]}}
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
    - Faction.contains(link(this.file.name))
    - '!file.folder.contains("Player Characters/Archive")'
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
    markers: none
    separator: " - "

```



```base
filters:
  and:
    - file.hasTag("location")
    - or:
        - Faction.contains(link(this.file.name))
        - Faction_Presence.contains(link(this.file.name))
    - '!file.inFolder("Admin/Templates")'
properties:
  note.Faction_Presence:
    displayName: Other Presence
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Type
      - Faction
      - Control
      - Faction_Presence
    sort:
      - property: Control
        direction: ASC

```



```base
filters:
  and:
    - file.hasTag("Mech")
    - '!file.inFolder("Admin/Templates")'
    - '!file.inFolder("Database/Mechs/Sample")'
    - Faction.contains(link(this.file.name))
views:
  - type: cards
    name: Mobile Suits
    order:
      - file.name
    cardSize: 160
    image: note.MECH_Portrait
    imageAspectRatio: 0.5

```
