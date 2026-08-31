---
{"dg-publish":true,"permalink":"/database/things/fishbone/","tags":["npc","ship","character","weird"],"noteIcon":"","updated":"2026-08-31T15:09:14.329-04:00","dg-note-properties":{"tags":["npc","ship","character","weird"],"Portrait":"Admin/Attachments/PCShip.webp","Faction":"Rebels","Rank":null,"Strain":8,"Consequences":["","","",""],"Concept":"High Concept","Relationship":"Relationship","Aspects":["Improved Diffusion Shielding","Point Defenses",null],"Stunts":["**STUNT** Description","**STUNT** Description","**STUNT** Description"],"skill_5":[[null]],"approach_5":[[null]],"skill_4":[[null]],"approach_4":[[null]],"skill_3":["Skill"],"approach_3":["Approach"],"skill_2":["Skill","Skill"],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill"],"approach_1":["Approach","Approach","Approach"]}}
---

> [!infobox|left wsmall]
> # Fishbone
> ![Admin/Attachments/PCShip.webp\|PCShip.webp](/img/user/Admin/Attachments/PCShip.webp)
> >[!caption]
> >Guernica-Class Destroyer
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Rebels\|Rebels]]|
> | **ARMOR**| `REDACTED` |
> 
>  
> |HARM|BREAKDOWN|
> |----|-----|
> |2 Dnt|`=this.Consequences[0]`|
> |2 Dmg|`=this.Consequences[1]`|
> |4 Dsbl|`=this.Consequences[2]`|
> |6 Dst|`=this.Consequences[3]`|

| Aspects                      |
| ---------------------------- |
| High Concept                 |
| Relationship                 |
| Improved Diffusion Shielding |
| Point Defenses               |

{ .block-language-dataview}

`REDACTED`

>[!blank|static wfull]

# Notes

```base
filters:
  and:
    - Assoc.contains("Fishbone")
    - file.hasTag("npc")
views:
  - type: list
    name: Assoc. NPCs
    order:
      - file.name
    image: Portrait
    imageAspectRatio: 0.65
    cardSize: 160
    indentProperties: false
    imageFit: cover

```
