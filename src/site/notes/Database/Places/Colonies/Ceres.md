---
{"dg-publish":true,"permalink":"/database/places/colonies/ceres/","tags":["location"],"noteIcon":"","updated":"2026-09-04T10:55:11.555-04:00","dg-note-properties":{"tags":["location"],"Type":"[[Locations Hub|Dwarf Planet]]","Faction":"Apsis","Control":"Home / Headquarters","faction_Presence":[[null]],"Portrait":"Admin/Attachments/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg"}}
---


> [!INFOBOX] Ceres
> # Ceres
> ![Admin/Attachments/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg\|Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg](/img/user/Admin/Attachments/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg)
> 
> | | |
> |--|--|
> |Body|[[Locations Hub\|Dwarf Planet]]|
> |Leadership|[[Database/Factions/Apsis\|Apsis]]|
> |Status|Home / Headquarters|
> |Interest||

Humanity's oldest colony in [[Database/Glossary/The Belt\|The Belt]]. The decade following [[Database/History/The Ground War\|The Ground War]] has seen it largely taken over by [[Database/Factions/Apsis\|Apsis]]. What was once the farthest into the frontier humanity had ever reached is now the core logistical and manufacturing hub that keeps the calories flowing and the solar system fed. 

A direct assault on Ceres is not in the [[Database/Factions/Rebels\|Rebels]] playbook at this time. Ceres is both:

1. The most densely defended body in the solar system
2. The central nervous system for the entire system's resource distribution network.

Unless and until there is a plan to account for any root-level interruption of the latter that justifies the all-but-guaranteed horrendous losses that stem from the former, command has deemed a strike at Ceres absolutely not worth it.


```base
filters:
  and:
    - file.hasTag("character")
    - or:
        - Origin==this.file.name
        - Assoc.contains(this.file.name)
    - '!file.inFolder("Player Characters/Archive")'
views:
  - type: table
    name: Associated Characters
    order:
      - file.name
      - Origin
      - Assoc
    columnSize:
      file.name: 245
      note.Origin: 108

```



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
