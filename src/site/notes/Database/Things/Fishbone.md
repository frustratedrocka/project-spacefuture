---
{"dg-publish":true,"permalink":"/database/things/fishbone/","tags":["ship","character","npc","weird","location"],"noteIcon":"","updated":"2026-09-15T12:39:09.084-04:00","dg-note-properties":{"tags":["ship","character","npc","weird","location"],"Portrait":"[[Admin/Attachments/PCShip.webp]]","Type":"[[Database/Glossary/Ship]]","Class":"[[Database/Glossary/Ship|Guernica-Class Destroyer]]","Faction":["[[Database/Factions/Rebels]]"],"Control":"Closest Thing To Home","Faction_Presence":[null],"Rank":5,"Strain":8,"Consequences":["","","",""],"Concept":"Rebel Destroyer, Courtesy Of ???","Relationship":"Relationship","Aspects":["Improved Point Defenses",null,null],"Stunts":["**STUNT** Description","**STUNT** Description","**STUNT** Description"],"skill_5":[[null]],"approach_5":[[null]],"skill_4":[[null]],"approach_4":[[null]],"skill_3":["Skill"],"approach_3":["Approach"],"skill_2":["Skill","Skill"],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill"],"approach_1":["Approach","Approach","Approach"]}}
---

> [!infobox|left wsmall]
> # Fishbone
> ![Admin/Attachments/PCShip.webp\|PCShip.webp](/img/user/Admin/Attachments/PCShip.webp)
> >[!caption]
> >[[Database/Glossary/Ship\|Guernica-Class Destroyer]]
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Rebels\|Rebels]]|
> | **ARMOR**| `REDACTED` |
> 
>  
> |HARM|BREAKDOWN|
> |----|-----|
> |2 Dnt|`=this.Consequences[0]`|
> |2 Dmg|`=this.Consequences[1]`|
> |4 Dsbl|`=this.Consequences[2]`|
> |6 Dst|`=this.Consequences[3]`|

| Aspects                          |
| -------------------------------- |
| Rebel Destroyer, Courtesy Of ??? |
| Relationship                     |
| Improved Point Defenses          |

{ .block-language-dataview}

`REDACTED`

>[!blank|static wfull]

# Notes


```base
filters:
  and:
    - file.hasTag("character")
    - or:
        - Origin==link(this.file.name)
        - Assoc.contains(link(this.file.name))
    - '!file.inFolder("Player Characters/Archive")'
views:
  - type: table
    name: Associated Characters
    order:
      - file.name
      - Origin
      - Assoc
    columnSize:
      file.name: 245
      note.Origin: 108

```



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
      - property: Scenario_Index
        direction: ASC

```
