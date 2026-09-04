---
{"dg-publish":true,"permalink":"/database/places/mars/","tags":["location"],"noteIcon":"","updated":"2026-09-04T09:08:58.145-04:00","dg-note-properties":{"tags":["location"],"Type":"[[Locations Hub|Planet]]","Faction":"Republic Of Mars","Control":"Semi-Occupied Territory","Faction_Presence":["Apsis"],"Portrait":null}}
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
  and:
    - or:
        - Origin == "Mars"
        - Assoc.contains("Mars")
    - file.hasTag("character")
    - '!file.inFolder("Player Characters/Archive")'
views:
  - type: table
    name: Associated Characters
    order:
      - file.name
      - Origin
      - Assoc
    sort: []
    image: note.Portrait
    imageAspectRatio: 0.65
    cardSize: 200
    indentProperties: false

```
