---
{"dg-publish":true,"permalink":"/database/places/mars/","tags":["location"],"noteIcon":"","updated":"2026-09-19T02:30:08.451-04:00","dg-note-properties":{"tags":["location"],"Type":"[[Locations Hub|Planet]]","Faction":["[[Database/Factions/Republic Of Mars]]"],"Control":"Semi-Occupied Territory","Faction_Presence":["[[Database/Factions/Apsis]]"],"Portrait":"Admin/Attachments/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.webp","Concept":"Unofficially Lost The Ground War","Trouble":"Political Powder Keg","Aspects":["`REDACTED`"]}}
---



> [!INFOBOX|ws-med embed] Mars
> # Mars
> ![Admin/Attachments/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.webp\|Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.webp](/img/user/Admin/Attachments/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.webp)
> 
> | | |
> |--|--|
> |Body|[[Locations Hub\|Planet]]|
> |Leadership|[[Database/Factions/Republic Of Mars\|Republic Of Mars]]|
> |Status|Semi-Occupied Territory|
> |Interest|[[Database/Factions/Apsis\|Apsis]]|

The new breadbasket now that [[Database/Places/Earth\|Earth]] is gone. *Officially* [[Database/History/The Ground War\|The Ground War]] ended in a stalemate and settled truce; unofficially, the terms strongly favored Jupiter.

Mars as a political entity consists largely of farmers and farmer interests, with the [[Database/Factions/Republic Of Mars\|Republic Of Mars]] as the current form of its governing body.


| Aspects                          |
| -------------------------------- |
| Unofficially Lost The Ground War |
| Political Powder Keg             |
| `REDACTED`                       |

{ .block-language-dataview}


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

| Session | Date | Event |
| ------- | ---- | ----- |

{ .block-language-dataview}

| Session | Changelog |
| ------- | --------- |

{ .block-language-dataview}