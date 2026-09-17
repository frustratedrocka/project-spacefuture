---
{"dg-publish":true,"permalink":"/session-notes/scenarios/pregame-setup/","tags":["index","mission","Tracker"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-09-16T21:47:52.484-04:00","dg-note-properties":{"tags":["index","mission","Tracker"],"SCEN_Prev":"None","SCEN_Next":"[[Session Notes/Scenarios/Mission 01]]"}}
---

## Summary
A *very* extended session zero, handling worldbuilding, character creation, and a tutorial for the game's very non-standard [[Rules/4 Challenges, Conflicts, & Contests#Simultaneous Initiative\|initiative]] rules.

### Impact
- This is a test, you should be able to read this

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
>  | Portrait                                            | NPC                                       |
> | --------------------------------------------------- | ----------------------------------------- |
> | ![Admin/Attachments/Saul_Tigh.jpg\|Saul_Tigh.jpg](/img/user/Admin/Attachments/Saul_Tigh.jpg) | [[Database/People/The XO\|The XO]]     |
> | ![Admin/Attachments/PCShip.webp\|PCShip.webp](/img/user/Admin/Attachments/PCShip.webp)     | [[Database/Things/Fishbone\|Fishbone]] |
> 
{ .block-language-dataview}
## Mobile Suits
> [!cards|dataview 4]
>  | Portrait                                                                | Mobile Suit                                                                     |
> | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
> | ![Admin/Attachments/DagDoll_SQ.webp\|DagDoll_SQ.webp](/img/user/Admin/Attachments/DagDoll_SQ.webp)                 | [[Database/Mobile Suits/Elegant Sky\|Elegant Sky]]                           |
> | ![Admin/Attachments/HopliteCustom_SQ.png\|HopliteCustom_SQ.png](/img/user/Admin/Attachments/HopliteCustom_SQ.png)       | [[Database/Mobile Suits/Hoplite Custom\|Hoplite Custom]]                     |
> | ![Admin/Attachments/Hyper_Seeker_CQC_SQ.png\|Hyper_Seeker_CQC_SQ.png](/img/user/Admin/Attachments/Hyper_Seeker_CQC_SQ.png) | [[Database/Mobile Suits/Hyper Seeker CQC\|Hyper Seeker CQC]]                 |
> | ![Admin/Attachments/Theseus_SQ.webp\|Theseus_SQ.webp](/img/user/Admin/Attachments/Theseus_SQ.webp)                 | [[Database/Mobile Suits/Kerbstomp\|Kerbstomp]]                               |
> | ![Admin/Attachments/Hoplite_SQ.png\|Hoplite_SQ.png](/img/user/Admin/Attachments/Hoplite_SQ.png)                   | [[Database/Mobile Suits/UT-F-08 Hoplite\|UT-F-08 Hoplite]]                   |
> | ![Admin/Attachments/GM-II-AEUG_SQ.png\|GM-II-AEUG_SQ.png](/img/user/Admin/Attachments/GM-II-AEUG_SQ.png)             | [[Database/Mobile Suits/UT-F-08S Hoplite Striker\|UT-F-08S Hoplite Striker]] |
> 
{ .block-language-dataview}

## Locations
| File Name                                        | Type                                    | Faction                                                     | Control                 | Presence                                                                                                                                                                                                                                                          |
| ------------------------------------------------ | --------------------------------------- | ----------------------------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[Database/Places/Colonies/Arjuna\|Arjuna]]   | [[Database/Glossary/Colony\|Colony]] | [[Database/Factions/Rebels\|Rebels]]                     | Contested               | <ul><li>[[Database/Factions/Republic Of Mars\|ROM]]</li></ul>                                                                                                                                                                                                 |
| [[Database/Places/Colonies/Theseus\|Theseus]] | [[Database/Glossary/Colony\|Colony]] | [[Database/Factions/Independent\|Independent]]           | Under The Radar         | <ul><li>[[Database/Factions/Republic Of Mars\|Republic Of Mars]]</li><li>[[Database/Factions/Apsis\|Apsis]]</li></ul>                                                                                                                                     |
| [[Database/Places/Earth\|Luna]]               | [[Locations Hub\|Planet]]            | [[Database/Factions/Apsis\|Apsis]]                       | No Man's Land           | <ul><li>[[Database/Factions/Armada Ejecta\|Armada Ejecta]]</li><li>[[Database/Factions/Mindful Eyes\|Mindful Eyes]]</li><li>[[Database/Factions/Hive Cult\|Hive Cult]]</li><li>[[Database/Factions/Republic Of Mars\|Republic Of Mars]]</li></ul> |
| [[Database/Places/Mars\|Mars]]                | [[Locations Hub\|Planet]]            | [[Database/Factions/Republic Of Mars\|Republic Of Mars]] | Semi-Occupied Territory | <ul><li>[[Database/Factions/Apsis\|Apsis]]</li></ul>                                                                                                                                                                                                          |
| [[Database/Things/Charun\|Charun]]            | [[Locations Hub\|Ferry]]             | [[Database/Factions/Independent\|Independent]]           | Semi-Extraterritorial   | <ul><li>[[Database/Factions/Jovian Consortium\|Jovian Consortium]]</li></ul>                                                                                                                                                                                  |
| [[Database/Things/Fishbone\|Fishbone]]        | [[Database/Glossary/Ship\|Ship]]     | [[Database/Factions/Rebels\|Rebels]]                     | Closest Thing To Home   | <ul><li>\-</li></ul>                                                                                                                                                                                                                                              |

{ .block-language-dataview}

|Previous|Next|
|:---|---:|
|None|[[Session Notes/Scenarios/Mission 01\|Mission 01]]|