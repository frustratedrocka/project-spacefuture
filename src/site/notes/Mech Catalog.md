---
{"dg-publish":true,"permalink":"/mech-catalog/","tags":["Tracker"],"noteIcon":"","updated":"2026-08-12T02:03:10.250-04:00","dg-note-properties":{"tags":["Tracker"]}}
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
  note.Faction:
    displayName: Associated Factions
views:
  - type: cards
    name: Mech Catalog
    order:
      - file.name
      - Known_Users
      - Faction
    image: MECH_Portrait
    imageFit: cover
    cardSize: 160
    imageAspectRatio: 0.65

```