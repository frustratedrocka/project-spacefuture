---
{"dg-publish":true,"permalink":"/database/mobile-suits/cqc-hyper-seeker/","tags":["Mech"],"noteIcon":"","updated":"2026-09-04T10:56:52.429-04:00","dg-note-properties":{"tags":["Mech"],"MECH_Name":"Hyper Seeker","MECH_Model":["CQC Hyper Seeker"],"MECH_Portrait":"Admin/Attachments/Hyper_Seeker_CQC_SQ.png","Armor":4,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Concept":"Speedy CQC","MECH_Trouble":"Unstable Core","MECH_Gear":["Heat Sword","Grapple Shield"],"MECH_Stunts":["**HASTE SYSTEM** Once per session, +2 when you Move Quickly. You may attempt to activate this again, but must roll Move Quickly against opposition equal to the number of activations this session, counting the triggering one. On a tie, your suit takes harm equal to the opposition. On a failure, your suit suffers an automatic Breakdown at an available level equal to or greater than the opposition.","**GRAPPLE CLAW** You yank an enemy combatant close to you. +1 when you Move to create an advantage by grappling an enemy towards you."],"Known_Users":["Vergen Koni"],"Faction":["Rebels","Mindful Eyes"],"Variants":[null]}}
---


> [!infobox|left wsmall]
> # Hyper Seeker
> ![Admin/Attachments/Hyper_Seeker_CQC_SQ.png\|Hyper_Seeker_CQC_SQ.png](/img/user/Admin/Attachments/Hyper_Seeker_CQC_SQ.png)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Rebels\|Rebels]]<br>[[Database/Factions/Mindful Eyes\|Mindful Eyes]]|
> |**KNOWN PILOTS**|[[Player Characters/Vergen Koni\|Vergen Koni]]|
> |**ARMOR**|`REDACTED`|
> 
> 

| Mech Aspects  |
| ------------- |
| Speedy CQC    |
| Unstable Core |

{ .block-language-dataview}

| Known Armaments |
| --------------- |
| Heat Sword      |
| Grapple Shield  |

{ .block-language-dataview}

| Mech Stunts                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HASTE SYSTEM** Once per session, +2 when you Move Quickly. You may attempt to activate this again, but must roll Move Quickly against opposition equal to the number of activations this session, counting the triggering one. On a tie, your suit takes harm equal to the opposition. On a failure, your suit suffers an automatic Breakdown at an available level equal to or greater than the opposition. |
| **GRAPPLE CLAW** You yank an enemy combatant close to you. +1 when you Move to create an advantage by grappling an enemy towards you.                                                                                                                                                                                                                                                                          |

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
      - property: Scenario_Index
        direction: ASC

```
