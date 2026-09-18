---
{"dg-publish":true,"permalink":"/database/people/vantrin-almeyer/","tags":["npc","character","pilot"],"noteIcon":"","updated":"2026-09-18T01:57:52.038-04:00","dg-note-properties":{"tags":["npc","character","pilot"],"Portrait":"[[Admin/Attachments/AI_Vantrin_2_SQ.png]]","Faction":["[[Database/Factions/Apsis]]"],"Rank":4,"Origin":"[[Database/Places/Colonies/Interamnia]]","Assoc":["[[Database/Things/Brynhildr]]"],"Strain":5,"Consequences":[null,null,null],"Concept":"Strategic & Skilled Field Commander","Relationship":null,"Loyalty":"`REDACTED`","Aspects":["Ice In His Veins","`REDACTED`","`REDACTED`"],"Stunts":["`REDACTED`","`REDACTED`"],"MECH_Model":"[[Database/Mobile Suits/SE-832-E Akoni Command Type]]","Armor":4,"Breakdown":[[null],[null],[null],[null]],"MECH_Relationship":"`REDACTED`","MECH_Gear":["Akoni Bazooka","Heat Tanto"],"skill_5":[null],"approach_5":[null],"skill_4":[null],"approach_4":[null],"skill_3":["Fight"],"approach_3":["Quickly"],"skill_2":["Move","Understand","Shoot"],"approach_2":["Subtly","Cleverly"],"skill_1":["Know","Persevere","Lead","Sway"],"approach_1":["Carefully","Boldly","Forcefully"],"aliases":["Vantrin"]}}
---

> [!infobox|left wsmall]
> # Vantrin Almeyer
> ![Admin/Attachments/AI_Vantrin_2_SQ.png\|AI_Vantrin_2_SQ.png](/img/user/Admin/Attachments/AI_Vantrin_2_SQ.png)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Apsis\|Apsis]]|
> |**ORIGIN**|`REDACTED`|
> | **STRAIN**| `REDACTED` |
> 

> [!infobox|right wsmall]
> # Akoni-E
> ![Admin/Attachments/Akoni-E_SQ.png\|Akoni-E_SQ.png](/img/user/Admin/Attachments/Akoni-E_SQ.png)
> 
> |  |  |
> |--|--|
> |**MODEL**|[[Database/Mobile Suits/SE-832-E Akoni Command Type\|SE-832-E Akoni Command Type]]|
> | **ARMOR**|`REDACTED`|
> 
> |HARM|BREAKDOWN|
> |----|-----|
> |2 Dent||
> |2 Dmg||
> |4 Dsbl||
> |6 Doom||

| Aspects                             |
| ----------------------------------- |
| Strategic & Skilled Field Commander |
| `REDACTED`                          |
| Ice In His Veins                    |
| `REDACTED`                          |
| `REDACTED`                          |

{ .block-language-dataview}

| Mech Aspects                            |
| --------------------------------------- |
| Apsis's First Line Of Offense, Enhanced |
| Designed To Punch Down                  |
| `REDACTED`                              |

{ .block-language-dataview}

| Gear Aspects  |
| ------------- |
| Akoni Bazooka |
| Heat Tanto    |

{ .block-language-dataview}

>[!blank|static wfull]
>
`REDACTED`

| Mech Stunts                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **30 SECONDS TO DISPERSE** +1 when you Lead Forcefully to intimidate a group into complying with your demands, +2 if you intend to meet noncompliance with violence against people not in mobile suits. |
| `REDACTED`                                                                                                                                                                                              |

{ .block-language-dataview}

>[!blank|static wfull]
# Notes

`REDACTED`

## Quotes
`REDACTED`

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
      - SESH_Name
      - Scenario
      - Scenario_Index
      - SESH_Date
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.SESH_Name: 230

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


```base
filters:
  and:
    - Changelog.join("\n").contains(this.file.name + "]]")
    - '!file.inFolder("Admin/Templates")'
formulas:
  Impact: Changelog.filter(value.toString().containsAny(this.file.name)).join("\n")
properties:
  formula.Impact:
    displayName: Change
views:
  - type: table
    name: Changelog
    order:
      - file.name
      - formula.Impact
    rowHeight: tall

```
