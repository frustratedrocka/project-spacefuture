---
{"dg-publish":true,"permalink":"/database/mobile-suits/se-832-akoni/","tags":["Mech"],"noteIcon":"","updated":"2026-09-04T10:57:18.365-04:00","dg-note-properties":{"tags":["Mech"],"MECH_Model":"SE-832 Akoni","MECH_Portrait":"Admin/Attachments/Akoni_SQ.png","Armor":4,"Breakdown":[[null],[null],[null],[null]],"MECH_Concept":"Apsis's First Line of Offense","MECH_Trouble":"Not Meant To Take Punishment","MECH_Relationship":null,"MECH_Gear":["Gatling Cannon","Akoni Bazooka","Underslung SMG","Heat Tanto"],"MECH_Stunts":["**30 SECONDS TO DISPERSE** +1 when you Lead Forcefully to intimidate a group into complying with your demands, +2 if you intend to meet noncompliance with violence against people not in mechs","**SUPPRESSION BARRAGE** +1 when you Shoot to create an advantage involving area denial"],"Known_Users":[null],"Faction":["Apsis"],"Variants":["SE-832-E Akoni Command Type"],"aliases":["Akoni"]}}
---

> [!infobox|left wsmall]
> # SE-832 Akoni
> ![Admin/Attachments/Akoni_SQ.png\|Akoni_SQ.png](/img/user/Admin/Attachments/Akoni_SQ.png)
> 
> |  |  |
> |--|--|
> |**FACTIONS**|[[Database/Factions/Apsis\|Apsis]]|
> |**KNOWN PILOTS**||
> |**VARIANTS**|[[Database/Mobile Suits/SE-832-E Akoni Command Type\|SE-832-E Akoni Command Type]]|
> ||
> 
> 

| Suit Aspects                  |
| ----------------------------- |
| Apsis's First Line of Offense |
| Not Meant To Take Punishment  |

{ .block-language-dataview}

| Known Armaments |
| --------------- |
| Gatling Cannon  |
| Akoni Bazooka   |
| Underslung SMG  |
| Heat Tanto      |

{ .block-language-dataview}

| Suit Stunts                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **30 SECONDS TO DISPERSE** +1 when you Lead Forcefully to intimidate a group into complying with your demands, +2 if you intend to meet noncompliance with violence against people not in mechs |
| **SUPPRESSION BARRAGE** +1 when you Shoot to create an advantage involving area denial                                                                                                          |

{ .block-language-dataview}

# Notes


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
      - property: file.name
        direction: ASC
      - property: Scenario_Index
        direction: ASC

```
