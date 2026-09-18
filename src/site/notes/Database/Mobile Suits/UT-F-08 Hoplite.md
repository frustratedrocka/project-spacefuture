---
{"dg-publish":true,"permalink":"/database/mobile-suits/ut-f-08-hoplite/","tags":["Mech"],"noteIcon":"","updated":"2026-09-18T19:12:09.482-04:00","dg-note-properties":{"tags":["Mech"],"MECH_Name":"UT-F-08 Hoplite","MECH_Model":"[[Database/Mobile Suits/UT-F-08 Hoplite]]","Portrait":"[[Admin/Attachments/Hoplite_SQ.webp]]","Armor":4,"Breakdown":[null,null,null,null],"MECH_Concept":"Iconic Line Mech","MECH_Trouble":"Yesterday's News","MECH_Relationship":null,"MECH_Gear":["Machine Gun","Missile Launcher","Heat Hawk"],"MECH_Stunts":["**DUCT TAPE AND PRAYERS** You may Tinker to treat and rename a Hoplite's Breakdown using the normal rules for clearing consequences.","**HAMMER AND ANVIL** +1 when you Shoot Carefully to attack a target already engaged in combat with an ally."],"Known_Users":[null],"Faction":["[[United Terran Sphere Navy]]","[[Database/Factions/Jovian Consortium]]","[[Database/Factions/Armada Ejecta]]","[[Database/Factions/Independent]]"],"Variants":["[[Database/Mobile Suits/Hoplite Custom]]","[[Database/Mobile Suits/UT-F-08S Hoplite Striker]]"]}}
---


> [!infobox|embed left wsmall]
> # UT-F-08 Hoplite
> ![Admin/Attachments/Hoplite_SQ.webp\|Hoplite_SQ.webp](/img/user/Admin/Attachments/Hoplite_SQ.webp)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[United Terran Sphere Navy\|United Terran Sphere Navy]]<br>[[Database/Factions/Jovian Consortium\|Jovian Consortium]]<br>[[Database/Factions/Armada Ejecta\|Armada Ejecta]]<br>[[Database/Factions/Independent\|Independent]]|
> |**KNOWN PILOTS**|\-|
> |**VARIANTS**|[[Database/Mobile Suits/Hoplite Custom\|Hoplite Custom]]<br>[[Database/Mobile Suits/UT-F-08S Hoplite Striker\|UT-F-08S Hoplite Striker]]|
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
