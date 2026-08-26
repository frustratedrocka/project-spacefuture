---
{"dg-publish":true,"permalink":"/database/places/colonies/brisbane/","tags":["location"],"noteIcon":"","updated":"2026-08-26T06:03:58.469-04:00","dg-note-properties":{"tags":["location"],"Type":"[[Database/Glossary/Colony]]","Faction":"Rebels","Control":"Contested","Faction_Presence":["Jovian Consortium"],"Portrait":null}}
---


> [!INFOBOX] Brisbane
> # Brisbane
> `=embed(link(this.Portrait))`
> 
> | | |
> |--|--|
> |Body|[[Database/Glossary/Colony\|Colony]]|
> |Leadership|[[Database/Factions/Rebels\|Rebels]]|
> |Status|Contested|
> |Interest|[[Database/Factions/Jovian Consortium\|Jovian Consortium]]|

```base
filters:
  or:
    - Origin == ""
    - Assoc.contains("")
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

One of three colonies in [[Database/Places/The Belt\|The Belt]] that helped kick off [[Database/History/The Current Conflict\|The Current Conflict]] through disagreement with [[Database/Factions/Apsis\|Apsis]]. The colony didn't want to starve. Apsis disagreed.