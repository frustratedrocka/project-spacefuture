---
{"dg-publish":true,"permalink":"/database/things/brynhildr/","tags":["npc","location","ship","weird"],"noteIcon":"","updated":"2026-09-19T02:29:59.635-04:00","dg-note-properties":{"tags":["npc","location","ship","weird"],"Portrait":"Admin/Attachments/Brynhildr.webp","Faction":["[[Database/Factions/Apsis]]"],"Type":["[[Database/Glossary/Ship]]"],"Class":"[[Database/Glossary/Ship|Valkyrie-class cruiser]]","Scale":5,"Rank":null,"Strain":4,"Consequences":["Mild","Moderate","Severe"],"Concept":"Apsis pursuit cruiser","Aspects":["Scourge of the deep belt","One battle, one Brynhildr",null],"Stunts":["**STUNT** Description","**STUNT** Description","**STUNT** Description"],"skill_5":[[null],[null],[null],[null]],"approach_5":[[null]],"skill_4":[[null],[null],[null],[null]],"approach_4":[[null],[null]],"skill_3":["Skill",[null],[null],[null]],"approach_3":["Approach",[null]],"skill_2":["Skill","Skill",[null],[null]],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill",[null]],"approach_1":["Approach","Approach","Approach"]}}
---

> [!infobox|left wsmall]
> # Brynhildr
> ![Admin/Attachments/Brynhildr.webp\|Brynhildr.webp](/img/user/Admin/Attachments/Brynhildr.webp)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Apsis\|Apsis]]|
> |**CLASS**|[[Database/Glossary/Ship\|Valkyrie-class cruiser]]|
> |**ARMOR**|`REDACTED`|
> 
> |HARM|BREAKDOWN|
> |----|-----|
> |2 Dent|`=this.Breakdown[0]`|
> |2 Dmg|`=this.Breakdown[1]`|
> |4 Dsbl|`=this.Breakdown[2]`|
> |6 Doom|`=this.Breakdown[3]`|

| Aspects                   |
| ------------------------- |
| Apsis pursuit cruiser     |
| Scourge of the deep belt  |
| One battle, one Brynhildr |

{ .block-language-dataview}

`REDACTED`



# Notes
An [[Database/Factions/Apsis\|Apsis]] warship. Like most Valkyrie-class cruisers, it operates without escort on extended hunts through the belt, striking at [[Database/Factions/Armada Ejecta\|Armada Ejecta]] and anyone else who attempts to disrupt the proper order of things.

At this moment, that includes you. Lucky you!


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