---
{"dg-publish":true,"permalink":"/database/mobile-suits/elegant-sky/","tags":["Mech"],"noteIcon":"","updated":"2026-09-18T15:51:09.323-04:00","dg-note-properties":{"tags":["Mech"],"MECH_Name":"Elegant Sky","MECH_Model":"[[Database/Mobile Suits/Elegant Sky]]","Portrait":"[[Admin/Attachments/DagDoll_SQ.webp]]","Armor":4,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Concept":"Long Range Fire Support","MECH_Trouble":"Complex Systems","MECH_Gear":["Shield","Beam Rifle"],"MECH_Stunts":["**COVERT FIRE** +1 when Shooting undetected. +2 when breaking cover and entering same zone as hostile.","**ELECTRONIC WARFARE** You can Interface to attack and create advantages against other mobile suits remotely."],"Known_Users":["[[Player Characters/Lane Gable]]"],"Faction":["[[Database/Factions/Rebels]]","[[Database/Factions/Armada Ejecta]]"],"Variants":[null]}}
---


> [!infobox|embed left wsmall]
> # Elegant Sky
> ![Admin/Attachments/DagDoll_SQ.webp\|DagDoll_SQ.webp](/img/user/Admin/Attachments/DagDoll_SQ.webp)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Rebels\|Rebels]],[[Database/Factions/Armada Ejecta\|Armada Ejecta]],<br>|
> |**KNOWN PILOTS**|[[Player Characters/Lane Gable\|Lane Gable]]|
> |**ARMOR**|4|
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
| **COVERT FIRE** +1 when Shooting undetected. +2 when breaking cover and entering same zone as hostile.        |
| **ELECTRONIC WARFARE** You can Interface to attack and create advantages against other mobile suits remotely. |

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
