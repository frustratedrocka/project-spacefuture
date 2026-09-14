---
{"dg-publish":true,"permalink":"/database/people/the-xo/","tags":["npc","character"],"noteIcon":"","updated":"2026-09-13T23:29:10.211-04:00","dg-note-properties":{"tags":["npc","character"],"Portrait":[["Saul_Tigh.jpg"]],"Faction":["[[Database/Factions/Rebels]]","[[Database/Factions/Jovian Consortium]]"],"Rank":3,"Assoc":["[[Database/Things/Fishbone]]"],"Strain":4,"Consequences":["Mild","Moderate","Severe"],"Concept":"Hard Times Make Hard Asses","Relationship":null,"Loyalty":null,"Aspects":[null,null,null],"Stunts":["**STUNT** Description","**STUNT** Description","**STUNT** Description"],"skill_5":[[null]],"approach_5":[[null]],"skill_4":[[null]],"approach_4":[[null]],"skill_3":["Skill"],"approach_3":["Approach"],"skill_2":["Skill","Skill"],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill"],"approach_1":["Approach","Approach","Approach"]}}
---

> [!infobox|left wsmall]
> # The XO
> ![[Saul_Tigh.jpg\|Saul_Tigh.jpg]]
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Rebels\|Rebels]]<br>[[Database/Factions/Jovian Consortium\|Jovian Consortium]]|
> | **STRAIN**| `REDACTED` |
>  
> |HARM|CONSEQUENCE|
> |----|-----|
> |2 Mild|Mild|
> |4 Mod|Moderate|
> |6 Svr|Severe|

| Aspects                    |
| -------------------------- |
| Hard Times Make Hard Asses |

{ .block-language-dataview}

`REDACTED`

>[!blank|static wfull]

# Notes


```base
filters:
  and:
    - file.hasTag("session")
    - '!file.inFolder("Admin/Templates")'
    - or:
        - Attending.containsAny(link(this.file.name))
        - NPCs.containsAny(link(this.file.name))
        - Location.containsAny(link(this.file.name))
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
