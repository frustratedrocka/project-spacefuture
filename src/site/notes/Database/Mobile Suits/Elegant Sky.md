---
{"dg-publish":true,"permalink":"/database/mobile-suits/elegant-sky/","tags":["Mech"],"noteIcon":"","updated":"2026-09-04T10:56:58.613-04:00","dg-note-properties":{"tags":["Mech"],"MECH_Name":"Elegant Sky","MECH_Model":"Elegant Sky","MECH_Portrait":"Admin/Attachments/DagDoll_SQ.webp","Armor":4,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Concept":"Long Range Fire Support","MECH_Trouble":"Complex Systems","MECH_Gear":["Shield","Beam Rifle"],"MECH_Stunts":["**FIRE UNDETECTED** +1 when you Shoot at suits that are not aware of you.","**ELECTRONIC WARFARE** You can Interface to attack and create advantages against other mobile suits remotely."],"Known_Users":["Lane Gable"],"Faction":["Rebels","Armada Ejecta"],"Variants":[null]}}
---


> [!infobox|left wsmall]
> # Elegant Sky
> ![Admin/Attachments/DagDoll_SQ.webp\|DagDoll_SQ.webp](/img/user/Admin/Attachments/DagDoll_SQ.webp)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Rebels\|Rebels]]<br>[[Database/Factions/Armada Ejecta\|Armada Ejecta]]|
> |**KNOWN PILOTS**|[[Player Characters/Lane Gable\|Lane Gable]]|
> |**VARIANTS**||
> |**ARMOR**|`REDACTED`|
> 
> 

| Mech Aspects            |
| ----------------------- |
| Long Range Fire Support |
| Complex Systems         |

{ .block-language-dataview}

| Known Armaments |
| --------------- |
| Shield          |
| Beam Rifle      |

{ .block-language-dataview}

| Mech Stunts                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- |
| **FIRE UNDETECTED** +1 when you Shoot at suits that are not aware of you.                                     |
| **ELECTRONIC WARFARE** You can Interface to attack and create advantages against other mobile suits remotely. |

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
