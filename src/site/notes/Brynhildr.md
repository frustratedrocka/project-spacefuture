---
{"dg-publish":true,"permalink":"/brynhildr/","tags":["npc","ship","weird"],"noteIcon":"","updated":"2026-08-12T17:12:30.219-04:00","dg-note-properties":{"tags":["npc","ship","weird"],"Portrait":"Admin/Attachments/Brynhildr.webp","Faction":"Apsis","Class":"Valkyrie-class cruiser","Scale":5,"Rank":null,"Strain":4,"Consequences":["Mild","Moderate","Severe"],"Concept":"Apsis pursuit cruiser","Aspects":["Scourge of the deep belt","One battle, one Brynhildr",null],"Stunts":["**STUNT** Description","**STUNT** Description","**STUNT** Description"],"MECH_Name":null,"MECH_Model":null,"MECH_Portrait":"Admin/Attachments/GM-II-AEUG_SQ.png","Armor":8,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Concept":"High Concept","MECH_Trouble":"Trouble","MECH_Relationship":"Relationship","MECH_Gear":[null,null],"MECH_Stunts":["**STUNT** Description","**STUNT** Description"],"skill_5":[[null],[null],[null],[null]],"approach_5":[[null]],"skill_4":[[null],[null],[null],[null]],"approach_4":[[null],[null]],"skill_3":["Skill",[null],[null],[null]],"approach_3":["Approach",[null]],"skill_2":["Skill","Skill",[null],[null]],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill",[null]],"approach_1":["Approach","Approach","Approach"]}}
---

> [!infobox|left wsmall]
> # Brynhildr
> ![Admin/Attachments/Brynhildr.webp\|Brynhildr.webp](/img/user/Admin/Attachments/Brynhildr.webp)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Apsis\|Apsis]]|
> |**CLASS**|Valkyrie-class cruiser|
> |**SCALE**|5|
> |**ARMOR**|`REDACTED`|
> 
> |HARM|BREAKDOWN|
> |----|-----|
> |2 Dent|Dented|
> |2 Dmg|Damaged|
> |4 Dsbl|Disabled|
> |6 Doom|Doomed|

| Aspects                   |
| ------------------------- |
| Apsis pursuit cruiser     |
| Scourge of the deep belt  |
| One battle, one Brynhildr |

{ .block-language-dataview}

`REDACTED`



# Notes
An [[Database/Factions/Apsis\|Apsis]] warship. Like most Valkyrie-class cruisers, it operates without escort on extended hunts through the belt, striking at [[Database/Factions/Space Pirates\|Space Pirates]] and anyone else who attempts to disrupt the proper order of things.

At this moment, that includes you. Lucky you!

```base
filters:
  and:
    - Assoc.contains("Brynhildr")
views:
  - type: cards
    name: Associated With
    order:
      - file.name
    image: note.Portrait
    imageAspectRatio: 0.65
    cardSize: 160
    indentProperties: false
    imageFit: cover

```