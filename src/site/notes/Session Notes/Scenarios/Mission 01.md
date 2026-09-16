---
{"dg-publish":true,"permalink":"/session-notes/scenarios/mission-01/","tags":["index","mission","Tracker"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-09-16T18:05:25.849-04:00","dg-note-properties":{"tags":["index","mission","Tracker"],"SCEN_Prev":"[[Session Notes/Scenarios/Pregame Setup]]","SCEN_Next":null}}
---

## Summary


### Impact
- Original command staff and first wing of the [[Database/Things/Fishbone\|Fishbone]] KIA
- [[Database/People/The XO\|The XO]] brevets new command: Captain [[Database/People/Gen Bashaba\|Gen Bashaba]]
- [[Database/Things/The Ace\|The Ace]] in critical condition

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
> [!cards|dataview notion 4 img-tiny] 
>  | Portrait                                              | NPC                                                     |
> | ----------------------------------------------------- | ------------------------------------------------------- |
> | ![Admin/Attachments/Saul_Tigh.jpg\|Saul_Tigh.jpg](/img/user/Admin/Attachments/Saul_Tigh.jpg)   | [[Database/People/The XO\|The XO]]                   |
> | ![Admin/Attachments/Vantrin_SQ.png\|Vantrin_SQ.png](/img/user/Admin/Attachments/Vantrin_SQ.png) | [[Database/People/Vantrin Almeyer\|Vantrin Almeyer]] |
> 
{ .block-language-dataview}
## Mobile Suits
> [!cards|dataview notion 4 img-tiny]
>  | Portrait                                                                | Mobile Suit                                                       |
> | ----------------------------------------------------------------------- | ----------------------------------------------------------------- |
> | ![Admin/Attachments/DagDoll_SQ.webp\|DagDoll_SQ.webp](/img/user/Admin/Attachments/DagDoll_SQ.webp)                 | [[Database/Mobile Suits/Elegant Sky\|Elegant Sky]]             |
> | ![Admin/Attachments/HopliteCustom_SQ.png\|HopliteCustom_SQ.png](/img/user/Admin/Attachments/HopliteCustom_SQ.png)       | [[Database/Mobile Suits/Hoplite Custom\|Hoplite Custom]]       |
> | ![Admin/Attachments/Hyper_Seeker_CQC_SQ.png\|Hyper_Seeker_CQC_SQ.png](/img/user/Admin/Attachments/Hyper_Seeker_CQC_SQ.png) | [[Database/Mobile Suits/Hyper Seeker CQC\|Hyper Seeker CQC]]   |
> | ![Admin/Attachments/Theseus_SQ.webp\|Theseus_SQ.webp](/img/user/Admin/Attachments/Theseus_SQ.webp)                 | [[Database/Mobile Suits/Kerbstomp\|Kerbstomp]]                 |
> | ![Admin/Attachments/Akoni_SQ.png\|Akoni_SQ.png](/img/user/Admin/Attachments/Akoni_SQ.png)                       | [[Database/Mobile Suits/SE-832 Akoni\|Akoni]]                  |
> | ![Admin/Attachments/Akoni-E_SQ.png\|Akoni-E_SQ.png](/img/user/Admin/Attachments/Akoni-E_SQ.png)                   | [[Database/Mobile Suits/SE-832-E Akoni Command Type\|Akoni-E]] |
> 
{ .block-language-dataview}

## Locations
| File Name | Type | Faction | Control | Presence |
| --------- | ---- | ------- | ------- | -------- |

{ .block-language-dataview}



|Previous|Next|
|:---|---:|
|[[Session Notes/Scenarios/Pregame Setup\|Pregame Setup]]|`=link(this.SCEN_Next)`|