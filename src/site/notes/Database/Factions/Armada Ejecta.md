---
{"dg-publish":true,"permalink":"/database/factions/armada-ejecta/","tags":["faction"],"dgShowToc":true,"noteIcon":"","updated":"2026-09-04T09:58:14.012-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Armada Ejecta","Beliefs":["Take Back What's Ours","Loyalty Among Thieves"],"Paragon":"[[Database/People/The Pirate King]]","Fealty":2,"Fellowship":8,"Force":6,"Fraternity":4,"aliases":["Survivors","Space Pirates"],"Portrait":"Admin/Attachments/CV_Recolor.webp"}}
---


>[!INFOBOX|ws-med]
># Armada Ejecta
>![Admin/Attachments/CV_Recolor.webp\|CV_Recolor.webp](/img/user/Admin/Attachments/CV_Recolor.webp)
>
>|||
>|--|--|
>|**PARAGON**|[[Database/People/The Pirate King\|The Pirate King]]|
>|**BELIEFS**|"Take Back What's Ours"<br>"Loyalty Among Thieves"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|2|
>|**FELLOWSHIP**|8|
>|**FORCE**|6|
>|**FRATERNITY**|4|

Space pirates. Also refugees, displaced survivors of [[Database/Places/Earth\|Earth]] and Luna, exiles with chips on their shoulder. Formed into a loose collective `REDACTED`, largely on [[Database/People/The Pirate King\|The Pirate King]]'s initiative.

The Armada is defined by shared identity and broadly accepted practices, rather than ideology. Ships and flotillas are independent entities bound together by voluntary articles and personal loyalty, inspired by the formal pirate codes of old Earth. The King is looked up to as an exemplar of what it means to be a pirate and why being one matters; he's also very aware he would be airlocked immediately if he ever tried to leverage that give a ship not under his command an order they were strongly against.


```base
filters:
  and:
    - file.hasTag("character")
    - Faction.contains(this.file.name)
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
        - Faction.contains(this.file.name)
        - Faction_Presence.contains(this.file.name)
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

```



```base
filters:
  and:
    - file.hasTag("Mech")
    - '!file.inFolder("Admin/Templates")'
    - '!file.inFolder("Database/Mechs/Sample")'
    - Faction.contains(this.file.name)
views:
  - type: cards
    name: Mobile Suits
    order:
      - file.name
    cardSize: 160
    image: note.MECH_Portrait
    imageAspectRatio: 0.5

```
