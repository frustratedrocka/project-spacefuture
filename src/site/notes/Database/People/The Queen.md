---
{"dg-publish":true,"permalink":"/database/people/the-queen/","tags":["npc","character"],"noteIcon":"","updated":"2026-09-13T22:45:01.142-04:00","dg-note-properties":{"tags":["npc","character"],"NPC_Name":"The Queen","Portrait":"Admin/Attachments/GenericFeddie_SQ.png","portrait_Link":"![[Admin/Attachments/GenericFeddie_SQ.png]]","Faction":"[[Database/Factions/Hive Cult]]","Assoc":null,"Origin":null,"Rank":0,"Strain":4,"Consequences":["Mild","Moderate","Severe"],"Concept":"High Concept","Relationship":"Relationship","Loyalty":"Loyalty","Aspects":[null],"Stunts":[null],"MECH_Name":"Eubiont","MECH_Model":"[[Database/Mobile Suits/Eubiont]]","MECH_Portrait":"Admin/Attachments/Eubiont_SQ.png","Armor":4,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Concept":"High Concept","MECH_Trouble":"Trouble","MECH_Relationship":"Relationship","MECH_Gear":["Bladed Funnels","Secondary Equipment"],"MECH_Stunts":[null],"skill_5":[[null],[null],[null],[null]],"approach_5":[[null]],"skill_4":[[null],[null],[null],[null]],"approach_4":[[null],[null]],"skill_3":["Skill",[null],[null],[null]],"approach_3":["Approach",[null]],"skill_2":["Skill","Skill",[null],[null]],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill",[null]],"approach_1":["Approach","Approach","Approach"]}}
---

> [!infobox|left wsmall]
> # The Queen
> ![Admin/Attachments/GenericFeddie_SQ.png\|GenericFeddie_SQ.png](/img/user/Admin/Attachments/GenericFeddie_SQ.png)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Hive Cult\|Hive Cult]]|
> | **STRAIN**| `REDACTED` |
>  
> |HARM|CONSEQUENCE|
> |----|-----|
> |2 Mild|Mild|
> |4 Mod|Moderate|
> |6 Svr|Severe|



| Aspects      |
| ------------ |
| High Concept |
| Relationship |
| Loyalty      |

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
