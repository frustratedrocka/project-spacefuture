---
{"dg-publish":true,"permalink":"/database/mobile-suits/kerbstomp/","tags":["Mech"],"noteIcon":"","updated":"2026-09-04T10:57:12.527-04:00","dg-note-properties":{"tags":["Mech"],"MECH_Name":"Kerbstomp","MECH_Model":"BSB-001 Kerbstomp","MECH_Portrait":"Admin/Attachments/Theseus_SQ.webp","Armor":4,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Concept":"Street-Trash Brawler","MECH_Trouble":"Franken-Software","MECH_Gear":["Mining Drill","Club"],"MECH_Stunts":["**SMOKESCREEN** Once per combat, the mech can launch chaff to create a debris field for a one time defense boost. +2 to defend against ranged attacks once per session unless circumstances prevent refilling chaff launchers.","**FOX IN A TRAP** Once per combat, the mech can sever a limb without suffering a breakdown to create an advantage."],"Known_Users":["Menodora Thaliana"],"Faction":["Rebels","Mindful Eyes"],"Variants":null}}
---


> [!infobox|left wsmall]
> # Kerbstomp
> ![Admin/Attachments/Theseus_SQ.webp\|Theseus_SQ.webp](/img/user/Admin/Attachments/Theseus_SQ.webp)
> 
> |  |  |
> |--|--|
> |**FACTIONS**|[[Database/Factions/Rebels\|Rebels]],[[Database/Factions/Mindful Eyes\|Mindful Eyes]]|
> |**KNOWN PILOTS**|[[Player Characters/Menodora Thaliana\|Menodora Thaliana]]|
> |**ARMOR**| 4 |
> 
> 
> 

| Mech Aspects         |
| -------------------- |
| Street-Trash Brawler |
| Franken-Software     |

{ .block-language-dataview}

| Known Armaments |
| --------------- |
| Mining Drill    |
| Club            |

{ .block-language-dataview}

| Mech Stunts                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **SMOKESCREEN** Once per combat, the mech can launch chaff to create a debris field for a one time defense boost. +2 to defend against ranged attacks once per session unless circumstances prevent refilling chaff launchers. |
| **FOX IN A TRAP** Once per combat, the mech can sever a limb without suffering a breakdown to create an advantage.                                                                                                             |

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
