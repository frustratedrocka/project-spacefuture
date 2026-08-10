---
{"dg-publish":true,"permalink":"/mech-catalog/","tags":["Tracker"],"noteIcon":"","updated":"2026-08-10T13:57:11.871-04:00","dg-note-properties":{"tags":["Tracker"]}}
---

```base
filters:
  and:
    - file.hasTag("Mech")
    - file.folder != "Admin/Templates"
    - file.folder != "Database/Mechs/Sample"
properties:
  note.MECH_Concept:
    displayName: Concept
  note.MECH_Trouble:
    displayName: Trouble
  note.MECH_Stunts:
    displayName: Stunts
  note.Known_Users:
    displayName: Known Pilots
  note.User_Factions:
    displayName: Associated Factions
views:
  - type: cards
    name: Mech Catalog
    order:
      - file.name
      - Known_Users
      - User_Factions
    image: note.MECH_Portrait

```