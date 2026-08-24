---
{"dg-publish":true,"permalink":"/database/glossary/planet/","tags":["index","glossary"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-24T05:43:59.278-04:00","dg-note-properties":{"tags":["index","glossary"],"aliases":["Dwarf Planet","Planetoid","Moon"]}}
---

Big round rocks in unique, stable orbit around something bigger. 

```base
filters:
  and:
    - file.tags.contains("location")
    - or:
      - Type == "Planet"
      - Type == "Dwarf Planet"
      - Type == "Planetoid"
      - Type == "Moon"
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
  - type: table
    name: Known Examples
    order:
      - file.name
      - Faction
      - Control
      - Faction_Presence
    indentProperties: false

```