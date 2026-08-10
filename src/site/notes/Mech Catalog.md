---
{"dg-publish":true,"permalink":"/mech-catalog/","tags":["Tracker"],"noteIcon":"","updated":"2026-08-10T15:34:26.487-04:00","dg-note-properties":{"tags":["Tracker"]}}
---

```base
filters:
  and:
    - file.hasTag("Mech")
    - file.folder != "Admin/Templates"
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
    image: MECH_Portrait
    imageFit: cover
    cardSize: 200
    imageAspectRatio: 0.65

```