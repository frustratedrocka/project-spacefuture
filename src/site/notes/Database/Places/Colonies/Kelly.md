---
{"dg-publish":true,"permalink":"/database/places/colonies/kelly/","tags":["location"],"noteIcon":"","updated":"2026-09-19T02:33:51.360-04:00","dg-note-properties":{"tags":["location"],"Type":"[[Database/Glossary/Colony]]","Faction":["[[Database/Factions/Rebels]]"],"Control":"Contested","Faction_Presence":["[[Database/Factions/Armada Ejecta]]"],"Portrait":null,"Concept":null,"Trouble":null,"Aspects":[null]}}
---


> [!INFOBOX|ws-med embed] Kelly
> # Kelly
> `=embed(link(this.Portrait))`
> 
> | | |
> |--|--|
> |Body|[[Database/Glossary/Colony\|Colony]]|
> |Leadership|[[Database/Factions/Rebels\|Rebels]]|
> |Status|Contested|
> |Interest|[[Database/Factions/Armada Ejecta\|Armada Ejecta]]|

| Aspects |
| ------- |

{ .block-language-dataview}



One of three colonies in [[Database/Glossary/The Belt\|The Belt]] that helped kick off [[Database/History/The Current Conflict\|The Current Conflict]] through disagreement with [[Database/Factions/Apsis\|Apsis]]. The colony didn't want to starve. Apsis disagreed.


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

| Session | Name | Scenario | Part | Date |
| ------- | ---- | -------- | ---- | ---- |

{ .block-language-dataview}

| Session | Date | Event |
| ------- | ---- | ----- |

{ .block-language-dataview}

| Session | Changelog |
| ------- | --------- |

{ .block-language-dataview}