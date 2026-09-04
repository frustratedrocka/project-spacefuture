---
{"dg-publish":true,"permalink":"/database/factions/rebels/","tags":["faction"],"noteIcon":"","updated":"2026-09-04T09:57:29.291-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Rebels","Beliefs":["This Cannot Continue"],"Paragon":"","Fealty":6,"Fellowship":8,"Force":4,"Fraternity":2,"aliases":["Roiders"],"Portrait":"Admin/Attachments/RebelInsignia.webp"}}
---

>[!INFOBOX|ws-med]
># Rebels
>![Admin/Attachments/RebelInsignia.webp\|RebelInsignia.webp](/img/user/Admin/Attachments/RebelInsignia.webp)
>
>|||
>|--|--|
>|**PARAGON**|[[|]]|
>|**BELIEFS**|"This Cannot Continue"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|6|
>|**FELLOWSHIP**|8|
>|**FORCE**|4|
>|**FRATERNITY**|2|

The [[Database/Factions/Rebels\|Rebels]] are a motley assortment of defectors, pirates, deniable government support, ideologues, and anyone else willing and able to take drastic measures to correct Apsis's lethal overreach. They officially formed as a direct response to [[Database/Factions/Apsis\|Apsis]] attempting to make an example of multiple dissenting colonies - [[Database/Places/Colonies/Cairo\|Cairo]], [[Database/Places/Colonies/Brisbane\|Brisbane]], [[Database/Places/Colonies/Mumbai\|Mumbai]] - by cutting their food allotments below starvation levels. 

The current mission is simple: Intercept excess food shipments and redirect them from the Jupiter sphere towards the places where they're most needed. That said, the questions of who gets to define "excess" and what counts as "most needed" are matters of significant internal debate.

```base
filters:
  and:
    - Faction.contains("Rebels")
    - file.hasTag("PC")
    - '!file.inFolder("Admin/Templates")'
    - '!file.inFolder("Player Characters/Archive")'
views:
  - type: cards
    name: PCs
    order:
      - file.name
      - concept
    image: note.Portrait
    imageAspectRatio: 0.5
    cardSize: 160
    indentProperties: false

```

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction.contains("Rebels")
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
