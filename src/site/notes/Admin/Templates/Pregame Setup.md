---
{"dg-publish":true,"permalink":"/admin/templates/pregame-setup/","tags":["index","Tracker"],"noteIcon":"","updated":"2026-09-13T21:31:49.240-04:00","dg-note-properties":{"tags":["index","Tracker"]}}
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
    name: Table
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

```