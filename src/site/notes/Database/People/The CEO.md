---
{"dg-publish":true,"permalink":"/database/people/the-ceo/","tags":["npc","character"],"noteIcon":"","updated":"2026-09-13T14:43:27.211-04:00","dg-note-properties":{"tags":["npc","character"],"NPC_Name":"The CEO","Portrait":"Admin/Attachments/GenericFeddie_SQ.png","portrait_Link":"![[Admin/Attachments/GenericFeddie_SQ.png]]","Faction":"Jovian Consortium","Origin":"Jupiter","Assoc":[null],"Rank":0,"Strain":4,"Consequences":["Mild","Moderate","Severe"],"Concept":"CEO of [[Storm's Eye Heavy Industries]]","Relationship":"Relationship","Loyalty":"When You Think Jovians, You Think CEO","Aspects":[[null]],"Stunts":[[null]],"skill_5":[null],"approach_5":[[null]],"skill_4":["Acquire"],"approach_4":["Sway"],"skill_3":["Know"],"approach_3":["Boldly","Cleverly"],"skill_2":["Skill","Skill"],"approach_2":["Subtly","Approach"],"skill_1":["Tinker","Skill","Skill"],"approach_1":["Approach","Approach"]}}
---

> [!infobox|left wsmall]
> # The CEO
> ![Admin/Attachments/GenericFeddie_SQ.png\|GenericFeddie_SQ.png](/img/user/Admin/Attachments/GenericFeddie_SQ.png)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Jovian Consortium\|Jovian Consortium]]|
> | **STRAIN**| `REDACTED` |
>  
> |HARM|CONSEQUENCE|
> |----|-----|
> |2 Mild|Mild|
> |4 Mod|Moderate|
> |6 Svr|Severe|

| Aspects                                 |
| --------------------------------------- |
| CEO of [[Database/Things/Storm's Eye Heavy Industries\|Storm's Eye Heavy Industries]] |
| Relationship                            |
| When You Think Jovians, You Think CEO   |
| <ul><li>\-</li></ul>                    |

{ .block-language-dataview}

`REDACTED`

>[!blank|static wfull]

# Notes
`REDACTED`

`REDACTED`

# Appearances

```base
filters:
  and:
    - file.hasTag("session")
    - '!file.inFolder("Admin/Templates")'
    - or:
        - Attending.contains(link(this.file.name))
        - NPCs.contains(link(this.file.name))
        - Location.contains(link(this.file.name))
        - Mechs.containsAny(link(this.file.name), this.aliases)
properties:
  file.name:
    displayName: Session
  note.SESH_Name:
    displayName: Name
  note.SESH_Date:
    displayName: Date
  note.Scenario_Index:
    displayName: Part
views:
  - type: table
    name: Appearances
    order:
      - file.name
      - Scenario
      - Scenario_Index
      - SESH_Name
      - SESH_Date
    sort:
      - property: file.name
        direction: ASC
      - property: Scenario_Index
        direction: ASC

```
