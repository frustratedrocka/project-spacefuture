---
{"dg-publish":true,"permalink":"/session-notes/missions/pregame-setup/","tags":["index","mission","Tracker"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-09-14T05:20:31.600-04:00","dg-note-properties":{"tags":["index","mission","Tracker"]}}
---

# Summary
A *very* extended session zero, handling worldbuilding, character creation, and a tutorial for the game's very non-standard [[Rules/4 Challenges, Conflicts, & Contests#Simultaneous Initiative\|initiative]] rules.
# Vitals
```base
filters:
  and:
    - file.hasTag("session")
    - Scenario == link(this.file.name)
properties:
  note.Scenario_Index:
    displayName: Part
views:
  - type: table
    name: Sessions
    order:
      - file.name
      - SESH_Name
      - Attending
    sort:
      - property: Scenario_Index
        direction: ASC
    columnSize: {}
    rowHeight: medium

```
## NPCs
> [!cards|dataview 4]
>  | Portrait                                            | NPC                                       |
> | --------------------------------------------------- | ----------------------------------------- |
> | ![Admin/Attachments/Saul_Tigh.jpg\|Saul_Tigh.jpg](/img/user/Admin/Attachments/Saul_Tigh.jpg) | [[Database/People/The XO\|The XO]]     |
> | ![Admin/Attachments/PCShip.webp\|PCShip.webp](/img/user/Admin/Attachments/PCShip.webp)     | [[Database/Things/Fishbone\|Fishbone]] |
> 
{ .block-language-dataview}
## Mobile Suits
> [!cards|dataview 4]
>  | Portrait                                                                | Mobile Suit                                                     |
> | ----------------------------------------------------------------------- | --------------------------------------------------------------- |
> | ![Admin/Attachments/DagDoll_SQ.webp\|DagDoll_SQ.webp](/img/user/Admin/Attachments/DagDoll_SQ.webp)                 | [[Database/Mobile Suits/Elegant Sky\|Elegant Sky]]           |
> | ![Admin/Attachments/HopliteCustom_SQ.png\|HopliteCustom_SQ.png](/img/user/Admin/Attachments/HopliteCustom_SQ.png)       | [[Database/Mobile Suits/Hoplite Custom\|Hoplite Custom]]     |
> | ![Admin/Attachments/Hyper_Seeker_CQC_SQ.png\|Hyper_Seeker_CQC_SQ.png](/img/user/Admin/Attachments/Hyper_Seeker_CQC_SQ.png) | [[Database/Mobile Suits/Hyper Seeker CQC\|Hyper Seeker CQC]] |
> | ![Admin/Attachments/Theseus_SQ.webp\|Theseus_SQ.webp](/img/user/Admin/Attachments/Theseus_SQ.webp)                 | [[Database/Mobile Suits/Kerbstomp\|Kerbstomp]]               |
> | ![Admin/Attachments/Akoni_SQ.png\|Akoni_SQ.png](/img/user/Admin/Attachments/Akoni_SQ.png)                       | [[Database/Mobile Suits/SE-832 Akoni\|Akoni]]                |
> | ![Admin/Attachments/Hoplite_SQ.png\|Hoplite_SQ.png](/img/user/Admin/Attachments/Hoplite_SQ.png)                   | [[Database/Mobile Suits/UT-F-08 Hoplite\|UT-F-08 Hoplite]]   |
> 
{ .block-language-dataview}

## Locations
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
