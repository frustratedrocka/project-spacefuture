---
{"dg-publish":true,"permalink":"/database/people/the-mother-and-the-father/","tags":["npc","character"],"noteIcon":"","updated":"2026-09-15T17:44:31.889-04:00","dg-note-properties":{"tags":["npc","character"],"Portrait":"[[Admin/Attachments/GenericFeddie_SQ.png]]","Faction":["[[Database/Factions/Mindful Eyes]]"],"Strain":4,"Rank":0,"Consequences":["Mild","Moderate","Severe"],"Concept":"High Concept","Relationship":"Relationship","Loyalty":"Loyalty","Aspects":[null],"Stunts":[[null]],"skill_5":[[null],[null],[null],[null]],"approach_5":[[null]],"skill_4":[[null],[null],[null],[null]],"approach_4":[[null],[null]],"skill_3":["Skill",[null],[null],[null]],"approach_3":["Approach",[null]],"skill_2":["Skill","Skill",[null],[null]],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill",[null]],"approach_1":["Approach","Approach","Approach"]}}
---

> [!infobox|left wsmall]
> # The Mother And The Father
> ![Admin/Attachments/GenericFeddie_SQ.png\|GenericFeddie_SQ.png](/img/user/Admin/Attachments/GenericFeddie_SQ.png)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Mindful Eyes\|Mindful Eyes]]|
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

## Quotes

## appearances


```base
filters:
  and:
    - file.hasTag("session")
    - '!file.inFolder("Admin/Templates")'
    - or:
        - Attending.containsAny(link(this.file.name))
        - NPCs.containsAny(link(this.file.name))
        - Locations.contains(link(this.file.name))
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

```


```base
filters:
  and:
    - Impact.join("\n").contains(this.file.name + "]]")
    - '!file.inFolder("Admin/Templates")'
formulas:
  Impact: Impact.filter(value.toString().contains(this.file.name)).join("<br>")
views:
  - type: table
    name: Events
    order:
      - file.name
      - formula.Impact
    sort:
      - property: formula.Impact
        direction: ASC
    rowHeight: medium

```
