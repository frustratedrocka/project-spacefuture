---
{"dg-publish":true,"permalink":"/database/factions/rebels/","tags":["faction"],"noteIcon":"","updated":"2026-09-16T15:25:53.603-04:00","dg-note-properties":{"tags":["faction"],"Faction":"[[Database/Factions/Rebels]]","Beliefs":["This Cannot Continue"],"Paragon":[null],"Fealty":6,"Fellowship":8,"Force":4,"Fraternity":2,"aliases":["Roiders"],"Portrait":"Admin/Attachments/RebelInsignia.webp"}}
---

>[!INFOBOX|ws-med]
># Rebels
>![Admin/Attachments/RebelInsignia.webp\|RebelInsignia.webp](/img/user/Admin/Attachments/RebelInsignia.webp)
>
>|||
>|--|--|
>|**PARAGON**||
>|**BELIEFS**|"This Cannot Continue"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|6|
>|**FELLOWSHIP**|8|
>|**FORCE**|4|
>|**FRATERNITY**|2|

The [[Database/Factions/Rebels\|Rebels]] are a motley assortment of defectors, pirates, deniable government support, ideologues, and anyone else willing and able to take drastic measures to correct Apsis's lethal overreach. They officially formed as a direct response to [[Database/Factions/Apsis\|Apsis]] attempting to make an example of multiple dissenting colonies - [[Database/Places/Colonies/Kelly\|Kelly]], [[Database/Places/Colonies/Geb\|Geb]], [[Database/Places/Colonies/Arjuna\|Arjuna]] - by cutting their food allotments below starvation levels. 

The current mission is simple: Intercept excess food shipments and redirect them from the Jupiter sphere towards the places where they're most needed. That said, the questions of who gets to define "excess" and what counts as "most needed" are matters of significant internal debate.

>[!blank|wfull]


>[!cards|dataview 4 notion]
>  | Portrait                                                                | Player Character                                              |
> | ----------------------------------------------------------------------- | ------------------------------------------------------------- |
> | ![Admin/Attachments/Verg_Profile_pic_SQ.png\|Verg_Profile_pic_SQ.png](/img/user/Admin/Attachments/Verg_Profile_pic_SQ.png) | [[Player Characters/Vergen Koni\|Vergen Koni]]             |
> | ![Admin/Attachments/Menodora_SQ.png\|Menodora_SQ.png](/img/user/Admin/Attachments/Menodora_SQ.png)                 | [[Player Characters/Menodora Thaliana\|Menodora Thaliana]] |
> | ![Admin/Attachments/Lane_Sq.webp\|Lane_Sq.webp](/img/user/Admin/Attachments/Lane_Sq.webp)                       | [[Player Characters/Lane Gable\|Lane Gable]]               |
> | ![Admin/Attachments/Auggie_SQ.png\|Auggie_SQ.png](/img/user/Admin/Attachments/Auggie_SQ.png)                     | [[Player Characters/August Grier\|August Grier]]           |
> 
{ .block-language-dataview}


```base
filters:
  and:
    - file.hasTag("npc")
    - Faction.containsAny(link(this.file.name))
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





>[!cards|dataview 4 notion]
>  | Portrait                                                                | Mobile Suit                                                     |
> | ----------------------------------------------------------------------- | --------------------------------------------------------------- |
> | ![Admin/Attachments/DagDoll_SQ.webp\|DagDoll_SQ.webp](/img/user/Admin/Attachments/DagDoll_SQ.webp)                 | [[Database/Mobile Suits/Elegant Sky\|Elegant Sky]]           |
> | ![Admin/Attachments/HopliteCustom_SQ.png\|HopliteCustom_SQ.png](/img/user/Admin/Attachments/HopliteCustom_SQ.png)       | [[Database/Mobile Suits/Hoplite Custom\|Hoplite Custom]]     |
> | ![Admin/Attachments/Hyper_Seeker_CQC_SQ.png\|Hyper_Seeker_CQC_SQ.png](/img/user/Admin/Attachments/Hyper_Seeker_CQC_SQ.png) | [[Database/Mobile Suits/Hyper Seeker CQC\|Hyper Seeker CQC]] |
> | ![Admin/Attachments/Theseus_SQ.webp\|Theseus_SQ.webp](/img/user/Admin/Attachments/Theseus_SQ.webp)                 | [[Database/Mobile Suits/Kerbstomp\|Kerbstomp]]               |
> 
{ .block-language-dataview}