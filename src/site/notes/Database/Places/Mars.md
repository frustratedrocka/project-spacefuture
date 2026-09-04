---
{"dg-publish":true,"permalink":"/database/places/mars/","tags":["location"],"noteIcon":"","updated":"2026-09-03T23:33:12.249-04:00","dg-note-properties":{"tags":["location"],"Type":"[[Locations Hub|Planet]]","Faction":"Republic Of Mars","Control":"Semi-Occupied Territory","Faction_Presence":["Apsis"],"Portrait":null}}
---



> [!INFOBOX] Mars
> # Mars
> `=embed(link(this.Portrait))`
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
  or:
    - Origin == "Mars"
    - Assoc.contains("Mars")
    - '!file.inFolder("Player Characters/Archive")'
views:
  - type: list
    name: Associated
    order:
      - file.name
    image: Portrait
    imageAspectRatio: 0.65
    cardSize: 160
    indentProperties: false
```
