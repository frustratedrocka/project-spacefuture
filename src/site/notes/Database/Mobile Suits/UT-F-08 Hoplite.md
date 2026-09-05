---
{"dg-publish":true,"permalink":"/database/mobile-suits/ut-f-08-hoplite/","tags":["Mech"],"noteIcon":"","updated":"2026-09-04T11:36:36.725-04:00","dg-note-properties":{"tags":["Mech"],"MECH_Name":"UT-F-08 Hoplite","MECH_Model":"UT-F-08 Hoplite","MECH_Portrait":"Admin/Attachments/Hoplite_SQ.png","Armor":4,"Breakdown":[null,null,null,null],"MECH_Concept":"Iconic Line Mech","MECH_Trouble":"Yesterday's News","MECH_Relationship":null,"MECH_Gear":["Machine Gun","Missile Launcher","Heat Hawk"],"MECH_Stunts":["**DUCT TAPE AND PRAYERS** You may Tinker to treat and rename a Hoplite's Breakdown using the normal rules for clearing consequences.","**HAMMER AND ANVIL** +1 when you Shoot Carefully to attack a target already engaged in combat with an ally."],"Known_Users":[null],"Faction":["United Terran Sphere Navy","Jovian Consortium","Armada Ejecta","Independent",null],"Variants":["Hoplite Custom"]}}
---


> [!infobox|left wsmall]
> # UT-F-08 Hoplite
> ![Admin/Attachments/Hoplite_SQ.png\|Hoplite_SQ.png](/img/user/Admin/Attachments/Hoplite_SQ.png)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[United Terran Sphere Navy\|United Terran Sphere Navy]]<br>[[Database/Factions/Jovian Consortium\|Jovian Consortium]]<br>[[Database/Factions/Armada Ejecta\|Armada Ejecta]]<br>[[Database/Factions/Independent\|Independent]]<br>\-|
> |**KNOWN PILOTS**||
> |**VARIANTS**|[[Database/Mobile Suits/Hoplite Custom\|Hoplite Custom]]|
> |**ARMOR**|`REDACTED`|
> 
> 

| Mech Aspects     |
| ---------------- |
| Iconic Line Mech |
| Yesterday's News |

{ .block-language-dataview}

| Known Armaments  |
| ---------------- |
| Machine Gun      |
| Missile Launcher |
| Heat Hawk        |

{ .block-language-dataview}

| Mech Stunts                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| **DUCT TAPE AND PRAYERS** You may Tinker to treat and rename a Hoplite's Breakdown using the normal rules for clearing consequences. |
| **HAMMER AND ANVIL** +1 when you Shoot Carefully to attack a target already engaged in combat with an ally.                          |

{ .block-language-dataview}

# Notes
*The* iconic [[Database/History/The Ground War\|Ground War]] era grunt suit. Originally manufactured for the [[United Terran Sphere Navy\|United Terran Sphere Navy]]; after the Moondrop and the splintering of the UTSN, surplus and salvaged units could be found on all sides of any given battlefield. 

Remains frequently used by colonial militias, paramilitary groups, pirates, and other small or poorly-funded organizations. The base frame is easy to repair and customize for the needs of each theater and pilot. 


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
