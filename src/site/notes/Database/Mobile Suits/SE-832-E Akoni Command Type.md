---
{"dg-publish":true,"permalink":"/database/mobile-suits/se-832-e-akoni-command-type/","tags":["Mech"],"noteIcon":"","updated":"2026-09-16T14:19:06.100-04:00","dg-note-properties":{"tags":["Mech"],"MECH_Name":"Akoni-E","MECH_Model":"[[SE-832-E Akoni]]","Portrait":"[[Admin/Attachments/Akoni-E_SQ.png]]","Armor":4,"Breakdown":[[null],[null],[null],[null]],"MECH_Concept":"Apsis's First Line Of Offense, Enhanced","MECH_Trouble":"Designed To Punch Down","MECH_Relationship":null,"MECH_Gear":["Gatling Cannon","Akoni Bazooka","Underslung SMG","Heat Tanto"],"MECH_Stunts":["**30 SECONDS TO DISPERSE** +1 when you Lead Forcefully to intimidate a group into complying with your demands, +2 if you intend to meet noncompliance with violence against people not in mobile suits.","`REDACTED`"],"Faction":["[[Database/Factions/Apsis]]"],"Assoc":["[[Database/Things/Brynhildr]]"],"Variants":null,"Base":["[[Database/Mobile Suits/SE-832 Akoni]]"],"Known_Users":["[[Database/People/Vantrin Almeyer]]"],"aliases":["Akoni-E"]}}
---


> [!infobox|left wsmall]
> # SE-832-E Akoni Command Type
> ![Admin/Attachments/Akoni-E_SQ.png\|Akoni-E_SQ.png](/img/user/Admin/Attachments/Akoni-E_SQ.png)
> 
> |  |  |
> |--|--|
> |**FACTIONS**|[[Database/Factions/Apsis\|Apsis]]|
> |**KNOWN PILOTS**|[[Database/People/Vantrin Almeyer\|Vantrin Almeyer]]|
> |**VARIANTS**||
> |**BASE MODEL**|[[Database/Mobile Suits/SE-832 Akoni\|SE-832 Akoni]]|

| Suit Aspects                            |
| --------------------------------------- |
| Apsis's First Line Of Offense, Enhanced |
| Designed To Punch Down                  |

{ .block-language-dataview}

| Known Armaments |
| --------------- |
| Gatling Cannon  |
| Akoni Bazooka   |
| Underslung SMG  |
| Heat Tanto      |

{ .block-language-dataview}

| Suit Stunts                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **30 SECONDS TO DISPERSE** +1 when you Lead Forcefully to intimidate a group into complying with your demands, +2 if you intend to meet noncompliance with violence against people not in mobile suits. |
| `REDACTED`                                                                                                                                                                                              |

{ .block-language-dataview}

# Notes


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
