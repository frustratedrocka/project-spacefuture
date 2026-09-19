---
{"dg-publish":true,"permalink":"/database/factions/jovian-consortium/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-09-19T12:20:30.607-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Jovians","Beliefs":["Obedience Through Power","Trust The (Long) Process"],"Paragon":"The CEO","Fealty":4,"Fellowship":2,"Force":6,"Fraternity":8,"aliases":["Insiders","Jovian"]}}
---


>[!infobox|embed ws-med]
># Jovian Consortium
>`=embed(link(this.Portrait))`
>
>|||
>|--|--|
>|**PARAGON**|[[Database/People/The CEO\|The CEO]]|
>|**BELIEFS**|"Obedience Through Power"<br>"Trust The (Long) Process"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|4|
>|**FELLOWSHIP**|2|
>|**FORCE**|6|
>|**FRATERNITY**|8|

The corporate council that forms the effective governing body of the [[Database/Places/Jupiter Sphere/Jupiter\|Jupiter]] sphere. Whether they hold the leash of [[Database/Factions/Apsis\|Apsis]] or the other way around is becoming a murkier question every day. The Consortium believes that since it produces the [[Helium-3\|Helium-3]] that the rest of the solar system runs on, it's somewhat entitled to throw its weight around. This is largely what led to the unstable stalemate that ended the Ground War: Jupiter needs food (which currently only the [[Database/Factions/Republic Of Mars\|Republic Of Mars]] and a few dedicated colonies in [[Database/Glossary/The Belt\|The Belt]] can grow enough of to export) and soil (which also needs Mars and/or the Belt as staging areas for extraction), but eventually enough of the latter will allow them self-sufficiency for the former. Mars and the Belt, on the other hand, will never stop needing Jovian fuel. 

`REDACTED`

With that attitude as a baseline, it came as something of a shock to outside observers - and even many within the Consortium - that Apsis's increasingly blatant attempts to keep Mars dependent on it and their recent escalation in the belt caused a number of Jovian military personnel to defect outright and take their materiel with them. Those defectors formed roughly half the initial backbone of the nascent [[Database/Factions/Rebels\|Rebels]]. 

`REDACTED`

Jovian culture firmly believes that nothing worth doing happens quickly. Which, considering that it takes each [[Database/Things/Charun\|Charun]] ferry a month and change to travel from [[Database/Glossary/The Belt\|The Belt]] to [[Database/Places/Jupiter Sphere/Jupiter\|Jupiter]] and another month for it to get back, and 43 minutes for a message sent at the speed of light to travel the distance to Sol and another 43 minutes for the response to come in, is understandable. `REDACTED`


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
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Mobile Suits</span></th><th class="table-view-th"><span>Name</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><img alt="Admin/Attachments/Hoplite_SQ.webp" src="app://997d2805319a6c58972e7792c9f869004531/C:/Users/bkfor/Documents/Obsidian/GundamGame/Admin/Attachments/Hoplite_SQ.webp?1789773046504"></td><td><span><strong><a data-tooltip-position="top" aria-label="Database/Mobile Suits/UT-F-08 Hoplite.md" data-href="Database/Mobile Suits/UT-F-08 Hoplite.md" href="Database/Mobile Suits/UT-F-08 Hoplite.md" class="internal-link" target="_blank" rel="noopener nofollow">UT-F-08 Hoplite</a></strong></span></td></tr><tr><td><img alt="Admin/Attachments/Hoplite_Striker_SQ.webp" src="app://997d2805319a6c58972e7792c9f869004531/C:/Users/bkfor/Documents/Obsidian/GundamGame/Admin/Attachments/Hoplite_Striker_SQ.webp?1789773051958"></td><td><span><strong><a data-tooltip-position="top" aria-label="Database/Mobile Suits/UT-F-08S Hoplite Striker.md" data-href="Database/Mobile Suits/UT-F-08S Hoplite Striker.md" href="Database/Mobile Suits/UT-F-08S Hoplite Striker.md" class="internal-link" target="_blank" rel="noopener nofollow">UT-F-08S Hoplite Striker</a></strong></span></td></tr></tbody></table>