---
{"dg-publish":true,"permalink":"/database/mobile-suits/ut-f-08-s-hoplite-striker/","tags":["Mech"],"noteIcon":"","updated":"2026-09-16T21:48:13.321-04:00","dg-note-properties":{"tags":["Mech"],"MECH_Name":"Hoplite Striker","MECH_Model":"[[Database/Mobile Suits/UT-F-08S Hoplite Striker]]","Portrait":"[[Admin/Attachments/GM-II-AEUG_SQ.png]]","Armor":4,"Breakdown":[null,null,null,null],"MECH_Concept":"Heavy Assault Line Mech","MECH_Trouble":"Lacks Fine Control","MECH_Gear":["Shoulder Missle Rack","Shotgun"],"MECH_Stunts":["**STUNT** Description","**STUNT** Description"],"Known_Users":[null],"Faction":["[[United Terran Sphere Navy]]","[[Database/Factions/Armada Ejecta]]"],"Variants":[null],"Base":["[[Database/Mobile Suits/UT-F-08 Hoplite]]"]}}
---


> [!infobox|left wsmall]
> # Hoplite Striker
> ![Admin/Attachments/GM-II-AEUG_SQ.png\|GM-II-AEUG_SQ.png](/img/user/Admin/Attachments/GM-II-AEUG_SQ.png)
> 
> |  |  |
> |--|--|
> |**FACTIONS**|[[United Terran Sphere Navy\|United Terran Sphere Navy]],[[Database/Factions/Armada Ejecta\|Armada Ejecta]]|
> |**KNOWN PILOTS**||
> |**BASE MODEL**|[[Database/Mobile Suits/UT-F-08 Hoplite\|UT-F-08 Hoplite]]|

| Mech Aspects            |
| ----------------------- |
| Heavy Assault Line Mech |
| Lacks Fine Control      |

{ .block-language-dataview}

| Known Armaments      |
| -------------------- |
| Shoulder Missle Rack |
| Shotgun              |

{ .block-language-dataview}

| Mech Stunts           |
| --------------------- |
| **STUNT** Description |
| **STUNT** Description |

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


