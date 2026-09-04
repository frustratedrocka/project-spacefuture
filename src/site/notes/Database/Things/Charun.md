---
{"dg-publish":true,"permalink":"/database/things/charun/","tags":["location","lore"],"noteIcon":"","updated":"2026-09-04T10:55:09.144-04:00","dg-note-properties":{"tags":["location","lore"],"Type":"[[Locations Hub|Ferry]]","Faction":["Independent"],"Control":"Semi-Extraterritorial","Faction_Presence":["Jovian Consortium"],"Portrait":[["Admin/Attachments/560px-JumpShip_(Hyperspace_Jump_-_Cartoon)-1991675039.gif"]]}}
---


> [!INFOBOX] 
> # Charun
> ![Admin/Attachments/560px-JumpShip_(Hyperspace_Jump_-_Cartoon)-1991675039.gif\|560px-JumpShip_(Hyperspace_Jump_-_Cartoon)-1991675039.gif](/img/user/Admin/Attachments/560px-JumpShip_(Hyperspace_Jump_-_Cartoon)-1991675039.gif)
> 
> | | |
> |--|--|
> |Body|[[Locations Hub\|Ferry]]|
> |Leadership|[[Database/Factions/Independent\|Independent]]|
> |Status|Semi-Extraterritorial|
> |Interest|[[Database/Factions/Jovian Consortium\|Jovian Consortium]]|

> [!cite] From Whence The Concept
>> Not to be the fucker who is going to piss everyone off, but is there any "accounting for the sheer travel physics of space" tech in this universe?  
>> radio waves travel at lightspeed there's a 43-minute one way delay between say Earth and Jupiter communications
>
>
>Physics is a perfectly coherent set of suggestions.  
>I do want to lean into space being extremely harsh; I'm less interested in maintaining strictly realistic travel times for the sake of strict realism. It's dramatically interesting if physically going to or from Jupiter is a commitment to be in transit for a while in either direction; it's less interesting if "a while" is longer than, say, a month each way?  
>Though the question does give me an idea about how that trip might work...


Getting to and from the [[Database/Places/Jupiter Sphere/Jupiter\|Jupiter]] sphere is not a fast process. It's hardly impossible, but it's a commitment, especially depending on where you happen to be relative to its 12-year solar orbit. 

A sufficiently powerful ship can make the trip on its own; many do. For everyone else, there's the Charun-class ferries. These gargantuan transports never actually stop, they just slow down to turn around and let smaller ships dock and undock in / near [[Database/Glossary/The Belt\|The Belt]], then redirect their momentum back out towards Jupiter. Jovebound ships undock close enough to maneuver and slow down on their own, beltbound ships dock on the second half of the approach, then the ferry swings around the night side of the gas giant, is refuelled in motion by a dedicated platform, and slingshots back towards the sun. 




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
