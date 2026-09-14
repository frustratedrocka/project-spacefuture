---
{"dg-publish":true,"permalink":"/admin/templates/pregame-setup/","tags":["index","Tracker"],"noteIcon":"","updated":"2026-09-13T21:32:50.153-04:00","dg-note-properties":{"tags":["index","Tracker"]}}
---

```base
filters:
  and:
    - file.hasTag("session")
    - Scenario == this.file.name
properties:
  note.Scenario_Index:
    displayName: Part
views:
  - type: table
    name: Sessions
    order:
      - file.name
      - Scenario_Index
      - SESH_Name
      - Attending
    sort:
      - property: Scenario_Index
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize: {}
    rowHeight: medium

```
```base
filters:
  and:
    - file.hasTag("npc")
views:
  - type: cards
    name: NPCs
    cardSize: 100
    image: note.Portrait

```