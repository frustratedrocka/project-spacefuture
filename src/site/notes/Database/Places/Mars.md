---
{"dg-publish":true,"permalink":"/database/places/mars/","tags":["location"],"noteIcon":"","updated":"2026-09-14T07:30:05.535-04:00","dg-note-properties":{"tags":["location"],"Type":"[[Locations Hub|Planet]]","Faction":["[[Database/Factions/Republic Of Mars]]"],"Control":"Semi-Occupied Territory","Faction_Presence":["[[Database/Factions/Apsis]]"],"Portrait":"Admin/Attachments/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png"}}
---



> [!INFOBOX] Mars
> # Mars
> ![Admin/Attachments/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png\|Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png](/img/user/Admin/Attachments/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png)
> 
> | | |
> |--|--|
> |Body|[[Locations Hub\|Planet]]|
> |Leadership|[[Database/Factions/Republic Of Mars\|Republic Of Mars]]|
> |Status|Semi-Occupied Territory|
> |Interest|[[Database/Factions/Apsis\|Apsis]]|

The new breadbasket now that [[Database/Places/Earth\|Earth]] is gone. *Officially* [[Database/History/The Ground War\|The Ground War]] ended in a stalemate and settled truce; unofficially, the terms strongly favored Jupiter.

Mars as a political entity consists largely of farmers and farmer interests.


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
        - Location.containsAny(link(this.file.name))
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

