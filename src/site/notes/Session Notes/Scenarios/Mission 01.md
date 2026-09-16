---
{"dg-publish":true,"permalink":"/session-notes/scenarios/mission-01/","tags":["index","mission","Tracker"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-09-16T00:29:59.430-04:00","dg-note-properties":{"tags":["index","mission","Tracker"],"SCEN_Prev":"[[Session Notes/Scenarios/Pregame Setup]]","SCEN_Next":"[[Session Notes/Session 02]]"}}
---

## Summary


### Impact

{ .block-language-dataview}

## Sessions

```base
filters:
  and:
    - file.hasTag("session")
    - Scenario == link(this.file.name)
properties:
  note.Scenario_Index:
    displayName: Part
  file.name:
    displayName: Session
  note.SESH_Name:
    displayName: Name
views:
  - type: table
    name: Sessions
    order:
      - file.name
      - SESH_Name
      - Logline
    sort:
      - property: Scenario_Index
        direction: ASC
    columnSize: {}
    rowHeight: medium

```
## NPCs
> [!cards|dataview 4]
>  | Portrait | NPC |
> | -------- | --- |
> 
{ .block-language-dataview}
## Mobile Suits
> [!cards|dataview 4]
>  | Portrait | Mobile Suit |
> | -------- | ----------- |
> 
{ .block-language-dataview}

## Locations
| File Name | Type | Faction | Control | Presence |
| --------- | ---- | ------- | ------- | -------- |

{ .block-language-dataview}



|Previous|Next|
|:---|---:|
|[[Session Notes/Scenarios/Pregame Setup\|Pregame Setup]]|[[Session Notes/Session 02\|Session 02]]|