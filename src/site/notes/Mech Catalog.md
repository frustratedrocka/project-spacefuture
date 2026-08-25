---
{"dg-publish":true,"permalink":"/mech-catalog/","tags":["Tracker","index"],"noteIcon":"","updated":"2026-08-24T03:08:35.000-04:00","dg-note-properties":{"tags":["Tracker","index"]}}
---

```base
filters:
  and:
    - file.hasTag("Mech")
    - file.folder != "Admin/Templates"
    - file.folder != "Database/Mobile Suits/Sample"
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