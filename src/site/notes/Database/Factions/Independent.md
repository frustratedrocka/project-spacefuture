---
{"dg-publish":true,"permalink":"/database/factions/independent/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-09-19T14:43:05.690-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Independent","Beliefs":[[null]],"Paragon":"","Fealty":2,"Fellowship":2,"Force":2,"Fraternity":2,"aliases":null}}
---







> [!blank|embed] FACTION CHARACTERS
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Character</span></th><th class="table-view-th"><span>Aspects</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div>


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
>  | Mobile Suits                                            | Name                                                              |
> | ------------------------------------------------------- | ----------------------------------------------------------------- |
> | ![Admin/Attachments/Hoplite_SQ.webp\|Hoplite_SQ.webp](/img/user/Admin/Attachments/Hoplite_SQ.webp) | **[[Database/Mobile Suits/UT-F-08 Hoplite\|UT-F-08 Hoplite]]** |
> 
{ .block-language-dataview}