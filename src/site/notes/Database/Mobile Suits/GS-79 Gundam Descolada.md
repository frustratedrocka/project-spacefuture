---
{"dg-publish":true,"permalink":"/database/mobile-suits/gs-79-gundam-descolada/","tags":["Mech"],"noteIcon":"","updated":"2026-09-04T11:51:10.781-04:00","dg-note-properties":{"tags":["Mech"],"MECH_Name":"Gundam Descolada","MECH_Model":"GS-79 Gundam Descolada","MECH_Portrait":"Admin/Attachments/Descolada_SQ.webp","Armor":6,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Concept":"Swashbuckling Space Duellist","MECH_Trouble":"`REDACTED`","MECH_Relationship":"`REDACTED`","MECH_Gear":["Composite Gunlance","Hooked Duelling Cape","`REDACTED`","Backup Pistols"],"MECH_Stunts":["**BOOST CHARGE** You love a big entrance. +1 when you Fight Boldly to charge an enemy in another zone, +2 if you're flying headlong into oncoming fire.","**YOU LEAVE WHEN I LET YOU** Once per scene, you may Fight Quickly as a reaction to launch your hook onto an enemy and prevent their escape from your melee range. The enemy may defend against this. If you succeed, the enemy's intended action is lost.","`REDACTED`"],"Known_Users":"The Pirate King","Faction":"Armada Ejecta","Variants":null}}
---


> [!infobox|left wsmall]
> # GS-79 Gundam Descolada
> ![Admin/Attachments/Descolada_SQ.webp\|Descolada_SQ.webp](/img/user/Admin/Attachments/Descolada_SQ.webp)
> 
> |  |  |
> |--|--|
> |**FACTIONS**|[[Database/Factions/Armada Ejecta\|Armada Ejecta]]|
> |**KNOWN PILOTS**|[[Database/People/The Pirate King\|The Pirate King]]|
> 
> 
> 


| Mech Aspects                 |
| ---------------------------- |
| Swashbuckling Space Duellist |
| `REDACTED`                   |
| `REDACTED`                   |

{ .block-language-dataview}

| Known Armaments      |
| -------------------- |
| Composite Gunlance   |
| Hooked Duelling Cape |
| `REDACTED`           |
| Backup Pistols       |

{ .block-language-dataview}

| Mech Stunts                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **BOOST CHARGE** You love a big entrance. +1 when you Fight Boldly to charge an enemy in another zone, +2 if you're flying headlong into oncoming fire.                                                                                                    |
| **YOU LEAVE WHEN I LET YOU** Once per scene, you may Fight Quickly as a reaction to launch your hook onto an enemy and prevent their escape from your melee range. The enemy may defend against this. If you succeed, the enemy's intended action is lost. |
| `REDACTED`                                                                                                                                                                                                                                                 |

{ .block-language-dataview}


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
