---
{"dg-publish":true,"permalink":"/database/places/jupiter-sphere/jupiter/","tags":["location"],"dgShowToc":true,"noteIcon":"","updated":"2026-09-18T15:46:39.282-04:00","dg-note-properties":{"tags":["location"],"Type":"[[Locations Hub|Planet]]","Faction":["[[Database/Factions/Jovian Consortium]]"],"Control":"Home / Headquarters","Faction_Presence":["[[Database/Factions/Apsis]]"],"Portrait":"Admin/Attachments/Jupiter_OPAL_2024-1.png","Concept":"Industrial Center Of Sol","Trouble":"Distance Necessitates Deliberation","Aspects":["Ruler Of The Heavens, In Fact And In Name","Wholly Owned & Incorporated"]}}
---


> [!INFOBOX|ws-med embed] Jupiter
> # Jupiter
> ![Admin/Attachments/Jupiter_OPAL_2024-1.png\|Jupiter_OPAL_2024-1.png](/img/user/Admin/Attachments/Jupiter_OPAL_2024-1.png)
> 
> | | |
> |--|--|
> |Body|[[Locations Hub\|Planet]]|
> |Leadership|[[Database/Factions/Jovian Consortium\|Jovian Consortium]]|
> |Status|Home / Headquarters|
> |Interest|[[Database/Factions/Apsis\|Apsis]]|

| Aspects                                   |
| ----------------------------------------- |
| Industrial Center Of Sol                  |
| Distance Necessitates Deliberation        |
| Ruler Of The Heavens, In Fact And In Name |
| Wholly Owned & Incorporated               |

{ .block-language-dataview}



Ruler of the heavens, now in fact and not just in name. Governed by the [[Database/Factions/Jovian Consortium\|Jovian Consortium]] Corporate Council.

The Jupiter Sphere technically includes over 100 moons, most of which are uninhabited. The main four, [[Database/Places/Jupiter Sphere/Io\|Io]], [[Europa\|Europa]], [[Callisto\|Callisto]], and [[Database/Places/Jupiter Sphere/Ganymede\|Ganymede]] are all inhabited, with resources extracted from [[Europa\|Europa]] forming the backbone of the Sphere's ability to sustain life.

Jupiter's magnetosphere, on top of its many more obvious environmental pressures, makes mining it incredibly dangerous and forces significant design compromises to be able to operate any machinery whatsoever inside it for long.

Most people who have business here, or who ever need to leave, rely on the regular [[Database/Things/Charun\|Charun]] ferries, but a sufficiently powerful and well-supplied ship can make the crossing on its own.


```base
filters:
  and:
    - file.hasTag("character")
    - or:
        - Origin==link(this.file.name)
        - Assoc.contains(link(this.file.name))
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
    - Impact.join("\n").contains(this.file.name + "]]")
    - '!file.inFolder("Admin/Templates")'
formulas:
  Impact: Impact.filter(value.toString().contains(this.file.name)).join("<br>")
views:
  - type: table
    name: Events
    order:
      - file.name
      - formula.Impact
    sort:
      - property: formula.Impact
        direction: ASC
    rowHeight: medium

```
