---
{"dg-publish":true,"permalink":"/session-notes/missions/pregame-setup/","tags":["index","Tracker"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-09-13T21:58:19.750-04:00","dg-note-properties":{"tags":["index","Tracker"]}}
---

# Vitals
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
    - formula.matchingSessions.length > 0
formulas:
  matchingSessions: file.backlinks.filter(value.asFile().hasTag("session") && value.asFile().properties.scenario == this.file.name && list(value.asFile().properties.npcs).contains(file))
views:
  - type: cards
    name: NPCs
    order:
      - file.name
    cardSize: 160
    image: note.Portrait
    imageAspectRatio: 0.6

```
```base
filters:
  and:
    - file.hasTag("Mech")
    - formula.matchingSessions.length > 0
formulas:
  matchingSessions: file.backlinks.filter(value.asFile().hasTag("session") && value.asFile().properties.scenario == this.file.name && list(value.asFile().properties.Mechs).contains(file))
views:
  - type: cards
    name: Mobile Suits
    order:
      - file.name
    cardSize: 160
    image: note.MECH_Portrait
    imageAspectRatio: 0.6

```
```base
filters:
  and:
    - file.hasTag("location")
    - formula.matchingSessions.length > 0
formulas:
  matchingSessions: file.backlinks.filter(value.asFile().hasTag("session") && value.asFile().properties.scenario == this.file.name && list(value.asFile().properties.Locations).contains(file))
views:
  - type: table
    name: Locations
    order:
      - file.name
      - Type
      - Faction
      - Control
    cardSize: 160
    image: note.MECH_Portrait
    imageAspectRatio: 0.6

```
```base
filters:
  and:
    - file.hasTag("faction")
    - formula.matchingSessions.length > 0
formulas:
  matchingSessions: file.backlinks.filter(value.asFile().hasTag("session") && value.asFile().properties.scenario == this.file.name && list(value.asFile().properties.Locations).contains(file))
views:
  - type: table
    name: Locations
    order:
      - file.name
      - Type
      - Faction
      - Control
    cardSize: 160
    image: note.MECH_Portrait
    imageAspectRatio: 0.6

```
# Summary
A *very* extended session zero, handling worldbuilding, character creation, and a tutorial for the game's very non-standard [[Rules/4 Challenges, Conflicts, & Contests#Simultaneous Initiative\|initiative]] rules.