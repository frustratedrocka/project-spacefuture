---
{"dg-publish":true,"permalink":"/database/mobile-suits/hoplite-custom/","tags":["Mech"],"noteIcon":"","updated":"2026-09-14T05:18:49.145-04:00","dg-note-properties":{"tags":["Mech"],"MECH_Name":"Hoplite Custom","MECH_Model":["[[Database/Mobile Suits/Hoplite Custom]]"],"MECH_Portrait":"[[Admin/Attachments/HopliteCustom_SQ.png]]","Armor":4,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Concept":"High-Performance Line Mech","MECH_Trouble":"Nothing Fancy","MECH_Gear":["Machinegun","Missile Launcher"],"MECH_Stunts":["**HAMMER AND ANVIL** +1 when you Shoot a target already engaged in combat with an ally.","**DEAD MECH WALKING** When you would be taken out, you may take one final turn before the character who took you out declares what happened to you."],"Known_Users":["[[Player Characters/August Grier]]"],"Faction":["[[Database/Factions/Rebels]]"],"Variants":null,"Base":["[[Database/Mobile Suits/UT-F-08 Hoplite]]"]}}
---


> [!infobox|left wsmall]
> # Hoplite Custom
> ![Admin/Attachments/HopliteCustom_SQ.png\|HopliteCustom_SQ.png](/img/user/Admin/Attachments/HopliteCustom_SQ.png)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Rebels\|Rebels]]|
> |**KNOWN PILOTS**|[[Player Characters/August Grier\|August Grier]]|
> |**ARMOR**|`REDACTED`|
> |**BASE**|[[Database/Mobile Suits/UT-F-08 Hoplite\|UT-F-08 Hoplite]]
> 
> 

| Mech Aspects               |
| -------------------------- |
| High-Performance Line Mech |
| Nothing Fancy              |

{ .block-language-dataview}

| Known Armaments  |
| ---------------- |
| Machinegun       |
| Missile Launcher |

{ .block-language-dataview}

| Mech Stunts                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HAMMER AND ANVIL** +1 when you Shoot a target already engaged in combat with an ally.                                                             |
| **DEAD MECH WALKING** When you would be taken out, you may take one final turn before the character who took you out declares what happened to you. |

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
      - property: Scenario_Index
        direction: ASC

```
