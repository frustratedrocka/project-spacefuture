---
{"dg-publish":true,"permalink":"/database/things/charun/","tags":["location","lore"],"noteIcon":"","updated":"2026-09-19T03:09:43.240-04:00","dg-note-properties":{"tags":["location","lore"],"Type":"[[Locations Hub|Ferry]]","Faction":["[[Database/Factions/Independent]]"],"Control":"Semi-Extraterritorial","Faction_Presence":["[[Database/Factions/Jovian Consortium]]"],"Portrait":[["Admin/Attachments/560px-JumpShip_(Hyperspace_Jump_-_Cartoon)-1991675039.gif"]]}}
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

There are five of them, all on staggered schedules. A charun arrives at Jupiter or somewhere in the Belt *roughly* every two weeks.




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


## Data

| Session                                       | Name    | Scenario                                                    | Part | Date               |
| --------------------------------------------- | ------- | ----------------------------------------------------------- | ---- | ------------------ |
| [[Session Notes/Session 00A\|Session 00A]] | Origins | [[Session Notes/Scenarios/Pregame Setup\|Pregame Setup]] | 1    | September 01, 2026 |

{ .block-language-dataview}

<div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span></th><th class="table-view-th"><span>Date</span></th><th class="table-view-th"><span>Event</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div></div>

| Session | Changelog |
| ------- | --------- |

{ .block-language-dataview}