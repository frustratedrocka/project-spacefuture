---
{"dg-publish":true,"permalink":"/database/factions/armada-ejecta/","tags":["faction"],"dgShowToc":true,"noteIcon":"","updated":"2026-09-19T12:59:53.445-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Armada Ejecta","Beliefs":["Take Back What's Ours","Loyalty Among Thieves"],"Paragon":"[[Database/People/The Pirate King]]","Fealty":2,"Fellowship":8,"Force":6,"Fraternity":4,"aliases":["Survivors","Space Pirates"],"Portrait":"Admin/Attachments/CV_Recolor.webp"}}
---


>[!infobox|embed ws-med]
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
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Mobile Suits</span></th><th class="table-view-th"><span>Name</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><img alt="Admin/Attachments/DagDoll_SQ.webp" src="app://997d2805319a6c58972e7792c9f869004531/C:/Users/bkfor/Documents/Obsidian/GundamGame/Admin/Attachments/DagDoll_SQ.webp?1789773051897"></td><td><span><strong><a data-tooltip-position="top" aria-label="Database/Mobile Suits/Elegant Sky.md" data-href="Database/Mobile Suits/Elegant Sky.md" href="Database/Mobile Suits/Elegant Sky.md" class="internal-link" target="_blank" rel="noopener nofollow">Elegant Sky</a></strong></span></td></tr><tr><td><img alt="Admin/Attachments/Descolada_SQ.webp" src="app://997d2805319a6c58972e7792c9f869004531/C:/Users/bkfor/Documents/Obsidian/GundamGame/Admin/Attachments/Descolada_SQ.webp?1789773051919"></td><td><span><strong><a data-tooltip-position="top" aria-label="Database/Mobile Suits/GS-79 Gundam Descolada.md" data-href="Database/Mobile Suits/GS-79 Gundam Descolada.md" href="Database/Mobile Suits/GS-79 Gundam Descolada.md" class="internal-link" target="_blank" rel="noopener nofollow">GS-79 Gundam Descolada</a></strong></span></td></tr><tr><td><img alt="Admin/Attachments/Hoplite_SQ.webp" src="app://997d2805319a6c58972e7792c9f869004531/C:/Users/bkfor/Documents/Obsidian/GundamGame/Admin/Attachments/Hoplite_SQ.webp?1789773046504"></td><td><span><strong><a data-tooltip-position="top" aria-label="Database/Mobile Suits/UT-F-08 Hoplite.md" data-href="Database/Mobile Suits/UT-F-08 Hoplite.md" href="Database/Mobile Suits/UT-F-08 Hoplite.md" class="internal-link" target="_blank" rel="noopener nofollow">UT-F-08 Hoplite</a></strong></span></td></tr><tr><td><img alt="Admin/Attachments/Hoplite_Striker_SQ.webp" src="app://997d2805319a6c58972e7792c9f869004531/C:/Users/bkfor/Documents/Obsidian/GundamGame/Admin/Attachments/Hoplite_Striker_SQ.webp?1789773051958"></td><td><span><strong><a data-tooltip-position="top" aria-label="Database/Mobile Suits/UT-F-08S Hoplite Striker.md" data-href="Database/Mobile Suits/UT-F-08S Hoplite Striker.md" href="Database/Mobile Suits/UT-F-08S Hoplite Striker.md" class="internal-link" target="_blank" rel="noopener nofollow">UT-F-08S Hoplite Striker</a></strong></span></td></tr></tbody></table>