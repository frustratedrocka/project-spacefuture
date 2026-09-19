---
{"dg-publish":true,"permalink":"/database/factions/independent/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-09-19T12:20:59.875-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Independent","Beliefs":[[null]],"Paragon":"","Fealty":2,"Fellowship":2,"Force":2,"Fraternity":2,"aliases":null}}
---







```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Independent"
    - or:
        - Faction == link("Independent")
        - Faction.isEmpty()
views:
  - type: list
    name: Unaligned NPCs
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    columnSize:
      note.Concept: 212
    separator: " - "
    markers: none
    image: note.Portrait
    imageAspectRatio: 0.7
    cardSize: 240
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
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Mobile Suits</span></th><th class="table-view-th"><span>Name</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><img alt="Admin/Attachments/Hoplite_SQ.webp" src="app://997d2805319a6c58972e7792c9f869004531/C:/Users/bkfor/Documents/Obsidian/GundamGame/Admin/Attachments/Hoplite_SQ.webp?1789773046504"></td><td><span><strong><a data-tooltip-position="top" aria-label="Database/Mobile Suits/UT-F-08 Hoplite.md" data-href="Database/Mobile Suits/UT-F-08 Hoplite.md" href="Database/Mobile Suits/UT-F-08 Hoplite.md" class="internal-link" target="_blank" rel="noopener nofollow">UT-F-08 Hoplite</a></strong></span></td></tr></tbody></table>