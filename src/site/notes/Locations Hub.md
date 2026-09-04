---
{"dg-publish":true,"permalink":"/locations-hub/","tags":["index","Tracker"],"noteIcon":"","updated":"2026-09-04T08:15:18.578-04:00","dg-note-properties":{"tags":["index","Tracker"],"aliases":["Dwarf Planet","Planetoid","Moon"]}}
---

Big round rocks in unique, stable orbit around something bigger, and the things attached to them.

```base
filters:
  and:
    - file.tags.contains("location")
    - '!file.inFolder("Admin/Templates")'
properties:
  note.file.name:
    displayName: Location
  note.Faction:
    displayName: Leadership
  note.Faction_Presence:
    displayName: Other Factions
  note.control:
    displayName: Status
views:
  - type: cards
    name: Known Locations
    order:
      - file.name
      - Type
      - Faction
      - Control
      - Faction_Presence
    indentProperties: false
    image: note.Portrait
    cardSize: 160

```