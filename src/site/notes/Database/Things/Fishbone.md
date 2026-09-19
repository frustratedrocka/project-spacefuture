---
{"dg-publish":true,"permalink":"/database/things/fishbone/","tags":["ship","character","weird","location"],"noteIcon":"","updated":"2026-09-19T03:08:16.453-04:00","dg-note-properties":{"tags":["ship","character","weird","location"],"Portrait":"[[Admin/Attachments/PCShip.webp]]","Type":"[[Database/Glossary/Ship]]","Class":"[[Database/Glossary/Ship|Guernica-Class Destroyer]]","Faction":["[[Database/Factions/Rebels]]"],"Control":"Courtesy Of the Consortium","Faction_Presence":["[[Database/Factions/Jovian Consortium]]"],"Rank":5,"Strain":8,"Consequences":["","","",""],"Concept":"Rebel Destroyer, Closest Thing To Home","Relationship":"Relationship","Aspects":["Courtesy Of [[Jovian Consortium|the Consortium]]",null,null],"Stunts":["**STUNT** Description","**STUNT** Description","**STUNT** Description"],"skill_5":[[null]],"approach_5":[[null]],"skill_4":[[null]],"approach_4":[[null]],"skill_3":["Skill"],"approach_3":["Approach"],"skill_2":["Skill","Skill"],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill"],"approach_1":["Approach","Approach","Approach"]}}
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

| Aspects                                           |
| ------------------------------------------------- |
| Rebel Destroyer, Closest Thing To Home            |
| Relationship                                      |
| Courtesy Of [[Database/Factions/Jovian Consortium\|the Consortium]] |

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


## Data

| Session                                       | Name         | Scenario                                                    | Part | Date               |
| --------------------------------------------- | ------------ | ----------------------------------------------------------- | ---- | ------------------ |
| [[Session Notes/Session 00B\|Session 00B]] | Training Sim | [[Session Notes/Scenarios/Pregame Setup\|Pregame Setup]] | 2    | September 15, 2026 |

{ .block-language-dataview}

<div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span><span class="dataview small-text">0</span></th><th class="table-view-th"><span>Date</span></th><th class="table-view-th"><span>Event</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div></div>

| Session | Changelog |
| ------- | --------- |

{ .block-language-dataview}