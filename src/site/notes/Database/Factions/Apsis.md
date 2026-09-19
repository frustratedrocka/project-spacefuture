---
{"dg-publish":true,"permalink":"/database/factions/apsis/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-09-19T13:17:33.531-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Apsis","Beliefs":["We Are The Line Between The System And Starvation","Our Ends Justify Any Means"],"Paragon":"The Man Upstairs","Fealty":4,"Fellowship":2,"Force":8,"Fraternity":6,"aliases":["Faction 2","Oppressors"]}}
---


>[!infobox|embed ws-med]
># Apsis
>`=embed(link(this.Portrait))`
>
>|||
>|--|--|
>|**PARAGON**|[[Database/People/The Man Upstairs\|The Man Upstairs]]|
>|**BELIEFS**|"We Are The Line Between The System And Starvation"<br>"Our Ends Justify Any Means"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|4|
>|**FELLOWSHIP**|2|
>|**FORCE**|8|
>|**FRATERNITY**|6|

Originally a shipping company run by [[Database/People/The Man Upstairs\|The Man Upstairs]], Apsis was empowered by the Ceres Accords that ended [[Database/History/The Ground War\|The Ground War]] as an ostensibly neutral body to oversee food distribution throughout the solar system.

They have proven to be anything *but* neutral, blatantly favoring [[Database/Places/Colonies/Ceres\|Ceres]] and the [[Database/Places/Jupiter Sphere/Jupiter\|Jupiter]] sphere and strangling [[Database/Factions/Republic Of Mars\|Martian]] attempts at self-sufficiency in the cradle. The degree to which they've been centralizing more and more power around themselves is even starting to alarm some members of the [[Database/Factions/Jovian Consortium\|Jovian Consortium]]. 

Their recent actions have pushed the system past the breaking point. In response to increasingly intense protests in [[Database/Glossary/The Belt\|The Belt]], they cut food allotments to the colonies of [[Database/Places/Colonies/Geb\|Geb]], [[Database/Places/Colonies/Kelly\|Kelly]], and [[Database/Places/Colonies/Arjuna\|Arjuna]] below starvation levels. The intent appears to have been to make examples of the colonies. Instead, they pushed [[Database/Factions/Rebels\|their opposition]] into open, armed revolt. 

A major wrinkle in any attempt to permanently deal with Apsis is that they are, currently, indispensable. In no small part because they've gone very far out of their way to ensure they *remain* indispensable.

`REDACTED`

> [!blank|embed] FACTION CHARACTERS
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Character</span></th><th class="table-view-th"><span>Aspects</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Database/People/The Man Upstairs.md" data-href="Database/People/The Man Upstairs.md" href="Database/People/The Man Upstairs.md" class="internal-link" target="_blank" rel="noopener nofollow">The Man Upstairs</a></span></td><td><span>Power-Hungry Expert Shipping Magnate - - - <code>REDACTED</code></span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Database/People/Vantrin Almeyer.md" data-href="Database/People/Vantrin Almeyer.md" href="Database/People/Vantrin Almeyer.md" class="internal-link" target="_blank" rel="noopener nofollow">Vantrin Almeyer</a></span></td><td><span>Strategic &amp; Skilled Field Commander - - - <code>REDACTED</code></span></td></tr></tbody></table>


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
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Mobile Suits</span></th><th class="table-view-th"><span>Name</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><img alt="Admin/Attachments/Akoni_SQ.webp" src="app://997d2805319a6c58972e7792c9f869004531/C:/Users/bkfor/Documents/Obsidian/GundamGame/Admin/Attachments/Akoni_SQ.webp?1789773045881"></td><td><span><strong><a data-tooltip-position="top" aria-label="Database/Mobile Suits/SE-832 Akoni.md" data-href="Database/Mobile Suits/SE-832 Akoni.md" href="Database/Mobile Suits/SE-832 Akoni.md" class="internal-link" target="_blank" rel="noopener nofollow">SE-832 Akoni</a></strong></span></td></tr><tr><td><img alt="Admin/Attachments/Akoni-E_SQ.webp" src="app://997d2805319a6c58972e7792c9f869004531/C:/Users/bkfor/Documents/Obsidian/GundamGame/Admin/Attachments/Akoni-E_SQ.webp?1789773045908"></td><td><span><strong><a data-tooltip-position="top" aria-label="Database/Mobile Suits/SE-832-E Akoni Command Type.md" data-href="Database/Mobile Suits/SE-832-E Akoni Command Type.md" href="Database/Mobile Suits/SE-832-E Akoni Command Type.md" class="internal-link" target="_blank" rel="noopener nofollow">SE-832-E Akoni Command Type</a></strong></span></td></tr></tbody></table>