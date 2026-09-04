---
{"dg-publish":true,"permalink":"/database/people/vantrin-almeyer/","tags":["npc","character"],"noteIcon":"","updated":"2026-09-04T10:23:29.417-04:00","dg-note-properties":{"tags":["npc","character"],"Portrait":"Admin/Attachments/Vantrin.png","Faction":"Apsis","Rank":4,"Assoc":["Brynhildr"],"Strain":5,"Consequences":[null,null,null],"Concept":"Strategic & Skilled Field Commander","Relationship":null,"Loyalty":"`REDACTED`","Aspects":["Ice In His Veins","`REDACTED`"],"Stunts":["`REDACTED`","`REDACTED`"],"MECH_Name":"Akoni-E","MECH_Model":"SE-832-E Akoni Command Type","MECH_Portrait":"Admin/Attachments/Akoni-E_SQ.png","Armor":4,"Breakdown":[[null],[null],[null],[null]],"MECH_Concept":"Apsis's First Line Of Offense, Enhanced","MECH_Trouble":"Designed To Punch Down","MECH_Relationship":"`REDACTED`","MECH_Gear":["Akoni Bazooka","Heat Tanto"],"MECH_Stunts":["**30 SECONDS TO DISPERSE** +1 when you Lead Forcefully to intimidate a group into complying with your demands, +2 if you intend to meet noncompliance with violence against people not in mechs","`REDACTED`"],"skill_5":[null],"approach_5":[null],"skill_4":[null],"approach_4":[null],"skill_3":["Fight"],"approach_3":["Quickly"],"skill_2":["Move","Understand","Shoot"],"approach_2":["Subtly","Cleverly"],"skill_1":["Know","Persevere","Lead","Sway"],"approach_1":["Carefully","Boldly","Forcefully"]}}
---

> [!infobox|left wsmall]
> # Vantrin Almeyer
> ![Admin/Attachments/Vantrin.png\|Vantrin.png](/img/user/Admin/Attachments/Vantrin.png)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Apsis\|Apsis]]|
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

| Mech Stunts                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **30 SECONDS TO DISPERSE** +1 when you Lead Forcefully to intimidate a group into complying with your demands, +2 if you intend to meet noncompliance with violence against people not in mechs |
| `REDACTED`                                                                                                                                                                                      |

{ .block-language-dataview}

>[!blank|static wfull]
# Notes

`REDACTED`

# Quotes
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
