---
{"dg-publish":true,"permalink":"/database/places/jupiter-sphere/jupiter/","tags":["location"],"dgShowToc":true,"noteIcon":"","updated":"2026-09-04T10:41:50.601-04:00","dg-note-properties":{"tags":["location"],"type":"[[Locations Hub|Planet]]","Faction":"Jovian Consortium","Control":"Home / Headquarters","Faction_Presence":"Apsis","Portrait":"Admin/Attachments/Jupiter_OPAL_2024-1.png"}}
---


> [!INFOBOX] Jupiter
> # Jupiter
> ![Admin/Attachments/Jupiter_OPAL_2024-1.png\|Jupiter_OPAL_2024-1.png](/img/user/Admin/Attachments/Jupiter_OPAL_2024-1.png)
> 
> | | |
> |--|--|
> |Body|[[Locations Hub\|Planet]]|
> |Leadership|[[Database/Factions/Jovian Consortium\|Jovian Consortium]]|
> |Status|Home / Headquarters|
> |Interest|[[Database/Factions/Apsis\|Apsis]]|

Ruler of the heavens, now in fact and not just in name. Governed by the [[Database/Factions/Jovian Consortium\|Jovian Consortium]] Corporate Council.

The Jupiter Sphere technically includes over 100 moons, most of which are uninhabited. The main four, [[Database/Places/Jupiter Sphere/Io\|Io]], [[Europa\|Europa]], [[Callisto\|Callisto]], and [[Database/Places/Jupiter Sphere/Ganymede\|Ganymede]] are all inhabited, with resources extracted from [[Europa\|Europa]] forming the backbone of the Sphere's ability to sustain life.

Jupiter's magnetosphere, on top of its many more obvious environmental pressures, makes mining it incredibly dangerous and forces significant design compromises to be able to operate any machinery whatsoever inside it for long.


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
