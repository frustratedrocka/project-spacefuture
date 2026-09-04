---
{"dg-publish":true,"permalink":"/database/people/the-man-upstairs/","tags":["npc","character"],"noteIcon":"","updated":"2026-09-04T10:23:29.396-04:00","dg-note-properties":{"tags":["npc","character"],"NPC_Name":"The Man Upstairs","Portrait":"Admin/Attachments/Onassis.jpg","Faction":"Apsis","Origin":"Ceres","Assoc":["Jupiter"],"Rank":0,"Strain":6,"Consequences":["Mild","Moderate","Severe"],"Concept":"Power-Hungry Expert Shipping Magnate","Relationship":null,"Loyalty":"`REDACTED`","Aspects":["`REDACTED`","`REDACTED`"],"Stunts":[[null]],"skill_5":[[null]],"approach_5":[[null]],"skill_4":["Lead","Network","Acquire"],"approach_4":["Subtly","Forcefully"],"skill_3":["Sway","Understand","Skill"],"approach_3":["Carefully","Cleverly"],"skill_2":["Know","Notice","Persevere"],"approach_2":["Quickly","Boldly"],"skill_1":["Operate","Skill","Skill"],"approach_1":[[null]]}}
---

> [!infobox|left wsmall]
> # The Man Upstairs
> ![Admin/Attachments/Onassis.jpg\|Onassis.jpg](/img/user/Admin/Attachments/Onassis.jpg)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Apsis\|Apsis]]|
> | **STRAIN**| `REDACTED` |
>  
> |HARM|CONSEQUENCE|
> |----|-----|
> |2 Mild|Mild|
> |4 Mod|Moderate|
> |6 Svr|Severe|

| Aspects                              |
| ------------------------------------ |
| Power-Hungry Expert Shipping Magnate |
| `REDACTED`                           |
| `REDACTED`                           |
| `REDACTED`                           |

{ .block-language-dataview}

`REDACTED`

>[!blank|static wfull]

# Notes
`REDACTED`

# Quotes
- "Our inquiry has determined that the adjusted allocation remained appropriate to the needs of the colonies, and that any shortfall resulted from failure to comply with Apsis best practices." - on the [[Database/Places/Colonies/Brisbane\|Brisbane]] / [[Database/Places/Colonies/Cairo\|Cairo]] / [[Database/Places/Colonies/Mumbai\|Mumbai]] situation.

`REDACTED`
# Appearances

```base
filters:
  and:
    - file.hasTag("session")
    - '!file.inFolder("Admin/Templates")'
    - or:
        - Attending.contains(this.file.name)
        - NPCs.contains(this.file.name)
        - Location.contains(this.file.name)
        - Mechs.containsAny(this.file.name, this.aliases)
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
      - property: Scenario_Index
        direction: ASC

```
