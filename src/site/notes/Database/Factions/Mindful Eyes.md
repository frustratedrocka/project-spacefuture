---
{"dg-publish":true,"permalink":"/database/factions/mindful-eyes/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-09-19T14:15:40.490-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Mindful Eyes","Beliefs":["Don't Let Your Gift Be Abused","Survival Through Secrecy"],"Paragon":"[[Database/People/The Mother And The Father]]","Fealty":6,"Fellowship":8,"Force":2,"Fraternity":4,"aliases":["Hive"]}}
---


>[!infobox|embed ws-med]
># Mindful Eyes
>`=embed(link(this.Portrait))`
>
>|||
>|--|--|
>|**PARAGON**|[[Database/People/The Mother And The Father\|The Mother And The Father]]|
>|**BELIEFS**|"Don't Let Your Gift Be Abused"<br>"Survival Through Secrecy"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|6|
>|**FELLOWSHIP**|8|
>|**FORCE**|2|
>|**FRATERNITY**|4|

[[Database/History/The Hive Mind\|Hive mind]] refugees that came together due to war, betrayal, and abuse of their gift. They find comfort and community between themselves with two defacto leaders that are more symbolic than literal. 

Paragons: Mother and Father. Nature and nurture with structure and care.

Fellowship: Care for your fellow Eye. Make sure we stay together through tough times. 

Fealty: Above all else, never let your power be abused. We've been used once before... but not again. 

Fraternity: With wars and conflicts, some still have connections with some of their allies. 

Force: Not the forefront, but not slacked. If ever needed, they rely on small, elite strike teams. Unfortunately, their low numbers mean they need to be very deliberate about when and where to deploy, and they can't answer every threat without giving ground elsewhere.

The Eyes are still processing the idea that the Moondrop and the Ground War all stemmed from an attempt to wipe _them, specifically_, off the face of the solar system; it's one of the biggest things they collectively don't know how to feel about. Being part of the Hive Mind does not mean you don't get to have your own emotions and point of view on things, just that you also have access to everyone else's. This comes mostly in the form of vague emotional connotations and flashes, especially since there's far fewer of them now than there were at the peak of the fungal spread and the connection has weakened proportionately to their numbers.

> [!blank|embed] FACTION CHARACTERS
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Character</span></th><th class="table-view-th"><span>Aspects</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Database/People/The Mother And The Father.md" data-href="Database/People/The Mother And The Father.md" href="Database/People/The Mother And The Father.md" class="internal-link" target="_blank" rel="noopener nofollow">The Mother And The Father</a></span></td><td><span>High Concept - Relationship - Loyalty</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Player Characters/Vergen Koni.md" data-href="Player Characters/Vergen Koni.md" href="Player Characters/Vergen Koni.md" class="internal-link" target="_blank" rel="noopener nofollow">Vergen Koni</a></span></td><td><span>Mind's Eye Protector - - - -</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Player Characters/Menodora Thaliana.md" data-href="Player Characters/Menodora Thaliana.md" href="Player Characters/Menodora Thaliana.md" class="internal-link" target="_blank" rel="noopener nofollow">Menodora Thaliana</a></span></td><td><span>Hive-Linked Lunarian Refugee - - - -</span></td></tr></tbody></table>


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
>  | Mobile Suits                                                              | Name                                                                |
> | ------------------------------------------------------------------------- | ------------------------------------------------------------------- |
> | ![Admin/Attachments/Hyper_Seeker_CQC_SQ.webp\|Hyper_Seeker_CQC_SQ.webp](/img/user/Admin/Attachments/Hyper_Seeker_CQC_SQ.webp) | **[[Database/Mobile Suits/Hyper Seeker CQC\|Hyper Seeker CQC]]** |
> 
{ .block-language-dataview}