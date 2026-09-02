---
{"dg-publish":true,"permalink":"/database/places/theseus/","tags":["location"],"noteIcon":"","updated":"2026-09-02T04:42:35.831-04:00","dg-note-properties":{"tags":["location"],"Type":"Colony","Faction":"Independent","Control":"???","Faction_Presence":[null],"Portrait":null}}
---


> [!INFOBOX] Theseus
> # Theseus
> `=embed(link(this.Portrait))`
> 
> | | |
> |--|--|
> |Body|[[Database/Glossary/Colony\|Colony]]|
> |Leadership|[[Database/Factions/Independent\|Independent]]|
> |Status|???|
> |Interest||

```base
filters:
  or:
    - Origin == "Theseus"
    - Assoc.contains("Theseus")
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