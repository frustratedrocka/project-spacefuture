---
{"dg-publish":true,"permalink":"/database/factions/jovian-consortium/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-09-19T14:15:17.216-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Jovians","Beliefs":["Obedience Through Power","Trust The (Long) Process"],"Paragon":"The CEO","Fealty":4,"Fellowship":2,"Force":6,"Fraternity":8,"aliases":["Insiders","Jovian"]}}
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

> [!blank|embed] FACTION CHARACTERS
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Character</span></th><th class="table-view-th"><span>Aspects</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Database/People/The CEO.md" data-href="Database/People/The CEO.md" href="Database/People/The CEO.md" class="internal-link" target="_blank" rel="noopener nofollow">The CEO</a></span></td><td><span>CEO of <a data-href="Storm's Eye Heavy Industries" href="Storm's Eye Heavy Industries" class="internal-link" target="_blank" rel="noopener nofollow">Storm's Eye Heavy Industries</a> - Relationship - When You Think Jovians, You Think CEO</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Database/People/The XO.md" data-href="Database/People/The XO.md" href="Database/People/The XO.md" class="internal-link" target="_blank" rel="noopener nofollow">The XO</a></span></td><td><span>Hard Times Make Hard Asses - - - -</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Database/Things/Storm's Eye Heavy Industries.md" data-href="Database/Things/Storm's Eye Heavy Industries.md" href="Database/Things/Storm's Eye Heavy Industries.md" class="internal-link" target="_blank" rel="noopener nofollow">Storm's Eye Heavy Industries</a></span></td><td><span>Key Mobile Suit Manufacturer - Sells To Everyone, Including You - One Hand On The Tiller</span></td></tr></tbody></table>


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
>  | Mobile Suits                                                            | Name                                                                                |
> | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
> | ![Admin/Attachments/Hoplite_SQ.webp\|Hoplite_SQ.webp](/img/user/Admin/Attachments/Hoplite_SQ.webp)                 | **[[Database/Mobile Suits/UT-F-08 Hoplite\|UT-F-08 Hoplite]]**                   |
> | ![Admin/Attachments/Hoplite_Striker_SQ.webp\|Hoplite_Striker_SQ.webp](/img/user/Admin/Attachments/Hoplite_Striker_SQ.webp) | **[[Database/Mobile Suits/UT-F-08S Hoplite Striker\|UT-F-08S Hoplite Striker]]** |
> 
{ .block-language-dataview}