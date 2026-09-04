---
{"dg-publish":true,"permalink":"/database/places/earth/","tags":["location"],"noteIcon":"","updated":"2026-09-04T10:41:57.104-04:00","dg-note-properties":{"tags":["location"],"Type":"[[Locations Hub|Planet]]","Faction":"Apsis","Control":"No Man's Land","Faction_Presence":["Armada Ejecta","Mindful Eyes","Hive Cult","Republic Of Mars"],"Portrait":"Admin/Attachments/Earth_Post_Kaboom.jpg","aliases":["Luna"]}}
---

> [!INFOBOX] Earth
> # Earth
> ![Admin/Attachments/Earth_Post_Kaboom.jpg\|Earth_Post_Kaboom.jpg](/img/user/Admin/Attachments/Earth_Post_Kaboom.jpg)
> 
> | | |
> |--|--|
> |Body|[[Locations Hub\|Planet]]|
> |Leadership|[[Database/Factions/Apsis\|Apsis]]|
> |Status|No Man's Land|
> |Interest|[[Database/Factions/Armada Ejecta\|Armada Ejecta]],[[Database/Factions/Mindful Eyes\|Mindful Eyes]],[[Database/Factions/Hive Cult\|Hive Cult]],[[Database/Factions/Republic Of Mars\|Republic Of Mars]]|

Earth is effectively gone - was the breadbasket, now effectively a non-player in solar politics after [[Database/History/The Ground War\|The Ground War]]. 

In an effort to wipe out [[Database/History/The Hive Mind\|The Hive Mind]] (we assume), *someone* dropped Luna onto the planet. Result: stopped the spread of the hive, but nobody cared because now there's a cataclysmic solar-system-wide food shortage. 

Many of the displaced survivors who couldn't or wouldn't assimilate elsewhere took to life aboard ships, at the fringes of society, forming the [[Database/Factions/Armada Ejecta\|Armada Ejecta]].

Fortunately for everyone, Luna fragmented on the way down, and not all of it actually hit the planet. So, nuclear winter, yes. Practically uninhabitable without dedicated equipment, yes. Pieces of it still landing and keeping the dust in the atmosphere from settling, yes. Volcanic hellscape with no resources left to extract, no. 


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
      - property: Scenario_Index
        direction: ASC

```
