---
{"dg-publish":true,"permalink":"/database/factions/rebels/","tags":["faction"],"noteIcon":"","updated":"2026-09-19T12:59:53.507-04:00","dg-note-properties":{"tags":["faction"],"Faction":"[[Database/Factions/Rebels]]","Beliefs":["This Cannot Continue"],"Paragon":[null],"Fealty":6,"Fellowship":8,"Force":4,"Fraternity":2,"aliases":["Roiders"],"Portrait":"Admin/Attachments/RebelInsignia.webp"}}
---

>[!infobox|embed ws-med]
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



>[!cards|dataview 4 collapse img-tiny txt-c]
>  | Portrait                                                                  | Player Character                                                  |
> | ------------------------------------------------------------------------- | ----------------------------------------------------------------- |
> | ![Admin/Attachments/Auggie_SQ.webp\|Auggie_SQ.webp](/img/user/Admin/Attachments/Auggie_SQ.webp)                     | **[[Player Characters/August Grier\|August Grier]]**           |
> | ![Admin/Attachments/Lane_Sq.webp\|Lane_Sq.webp](/img/user/Admin/Attachments/Lane_Sq.webp)                         | **[[Player Characters/Lane Gable\|Lane Gable]]**               |
> | ![Admin/Attachments/Menodora_SQ.webp\|Menodora_SQ.webp](/img/user/Admin/Attachments/Menodora_SQ.webp)                 | **[[Player Characters/Menodora Thaliana\|Menodora Thaliana]]** |
> | ![Admin/Attachments/Verg_Profile_pic_SQ.webp\|Verg_Profile_pic_SQ.webp](/img/user/Admin/Attachments/Verg_Profile_pic_SQ.webp) | **[[Player Characters/Vergen Koni\|Vergen Koni]]**             |
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
  file.name:
    displayName: Name
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Concept
      - Faction
      - Control
      - Faction_Presence
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.Concept: 218
      note.Faction: 133
      note.Control: 136
      note.Faction_Presence: 251
    rowHeight: medium

```


> [!cards|dataview collapse 4 img-tiny] FACTION MECHS
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Mobile Suits</span></th><th class="table-view-th"><span>Name</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><img alt="Admin/Attachments/DagDoll_SQ.webp" src="app://997d2805319a6c58972e7792c9f869004531/C:/Users/bkfor/Documents/Obsidian/GundamGame/Admin/Attachments/DagDoll_SQ.webp?1789773051897"></td><td><span><strong><a data-tooltip-position="top" aria-label="Database/Mobile Suits/Elegant Sky.md" data-href="Database/Mobile Suits/Elegant Sky.md" href="Database/Mobile Suits/Elegant Sky.md" class="internal-link" target="_blank" rel="noopener nofollow">Elegant Sky</a></strong></span></td></tr><tr><td><img alt="Admin/Attachments/HopliteCustom_SQ.webp" src="app://997d2805319a6c58972e7792c9f869004531/C:/Users/bkfor/Documents/Obsidian/GundamGame/Admin/Attachments/HopliteCustom_SQ.webp?1789773046554"></td><td><span><strong><a data-tooltip-position="top" aria-label="Database/Mobile Suits/Hoplite Custom.md" data-href="Database/Mobile Suits/Hoplite Custom.md" href="Database/Mobile Suits/Hoplite Custom.md" class="internal-link" target="_blank" rel="noopener nofollow">Hoplite Custom</a></strong></span></td></tr><tr><td><img alt="Admin/Attachments/Hyper_Seeker_CQC_SQ.webp" src="app://997d2805319a6c58972e7792c9f869004531/C:/Users/bkfor/Documents/Obsidian/GundamGame/Admin/Attachments/Hyper_Seeker_CQC_SQ.webp?1789773046613"></td><td><span><strong><a data-tooltip-position="top" aria-label="Database/Mobile Suits/Hyper Seeker CQC.md" data-href="Database/Mobile Suits/Hyper Seeker CQC.md" href="Database/Mobile Suits/Hyper Seeker CQC.md" class="internal-link" target="_blank" rel="noopener nofollow">Hyper Seeker CQC</a></strong></span></td></tr></tbody></table>