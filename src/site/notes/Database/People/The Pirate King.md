---
{"dg-publish":true,"permalink":"/database/people/the-pirate-king/","tags":["npc","character"],"noteIcon":"","updated":"2026-09-13T03:58:32.866-04:00","dg-note-properties":{"tags":["npc","character"],"NPC_Name":"The Pirate King","Portrait":"Admin/Attachments/Harlock.jpg","Faction":"Armada Ejecta","Origin":"Earth","Rank":0,"Strain":5,"Consequences":["Mild","Moderate","Severe"],"Concept":"Flamboyant Living Symbol","Relationship":"Relationship","Loyalty":"Exemplary Captain First, King Distant Second","Aspects":["%% %%","Far Better To Live And Die Under The Brave Black Flag","`REDACTED`","`REDACTED`"],"Stunts":["`REDACTED`","`REDACTED`","`REDACTED`"],"MECH_Name":"Gundam Descolada","MECH_Model":"GS-79 Gundam Descolada","MECH_Portrait":"Admin/Attachments/Descolada_SQ.webp","Armor":6,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Concept":"Swashbuckling Space Duelist","MECH_Trouble":"`REDACTED`","MECH_Relationship":"`REDACTED`","MECH_Gear":["Composite Gunlance","Hooked Duelling Cape","`REDACTED`","Backup Pistols"],"MECH_Stunts":["**BOOST CHARGE** You love a big entrance. +1 when you Fight Boldly to charge an enemy in another zone, +2 if you're flying headlong into oncoming fire.","**YOU LEAVE WHEN I LET YOU** Once per scene, you may Fight Quickly as a reaction to hook launch your hook onto an enemy and prevent their escape from your melee range. The enemy may defend against this. If you succeed, the enemy's intended action is lost.","`REDACTED`"],"skill_5":["Lead"],"approach_5":[[null]],"skill_4":["Fight","Notice"],"approach_4":["Cleverly"],"skill_3":["Move","Know"],"approach_3":["Boldly","Quickly"],"skill_2":["Acquire","Shoot","Network","Understand"],"approach_2":["Forcefully","Carefully"],"skill_1":["Persevere","Tend","Tinker","Sway"],"approach_1":["Subtly"]}}
---

> [!infobox|left wsmall]
> # The Pirate King
> ![Admin/Attachments/Harlock.jpg\|Harlock.jpg](/img/user/Admin/Attachments/Harlock.jpg)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Armada Ejecta\|Armada Ejecta]]|
> |**ORIGIN**|[[Database/Places/Earth\|Earth]]|
> | **STRAIN**| `REDACTED` |
>  
> |HARM|CONSEQUENCE|
> |----|-----|
> |2 Mild|Mild|
> |4 Mod|Moderate|
> |6 Svr|Severe|

> [!infobox|right wsmall]
> # Gundam Descolada
> ![Admin/Attachments/Descolada_SQ.webp\|Descolada_SQ.webp](/img/user/Admin/Attachments/Descolada_SQ.webp)
> 
> |  |  |
> |--|--|
> |**MODEL**|[[Database/Mobile Suits/GS-79 Gundam Descolada\|GS-79 Gundam Descolada]]|
> | **ARMOR**|`REDACTED`|
> 
> |HARM|BREAKDOWN|
> |----|-----|
> |2 Dent|Dented|
> |2 Dmg|Damaged|
> |4 Dsbl|Disabled|
> |6 Doom|Doomed|

| Aspects                                               |
| ----------------------------------------------------- |
| Flamboyant Living Symbol                              |
| Relationship                                          |
| Exemplary Captain First, King Distant Second          |
| Far Better To Live And Die Under The Brave Black Flag |
| `REDACTED`                                            |
| `REDACTED`                                            |

{ .block-language-dataview}

| Mech Aspects                |
| --------------------------- |
| Swashbuckling Space Duelist |
| `REDACTED`                  |
| `REDACTED`                  |

{ .block-language-dataview}

| Gear Aspects         |
| -------------------- |
| Composite Gunlance   |
| Hooked Duelling Cape |
| `REDACTED`           |
| Backup Pistols       |

{ .block-language-dataview}

>[!blank|static wfull]
>
`REDACTED` 

| Stunts     |
| ---------- |
| `REDACTED` |
| `REDACTED` |
| `REDACTED` |

{ .block-language-dataview}

| Mech Stunts                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **BOOST CHARGE** You love a big entrance. +1 when you Fight Boldly to charge an enemy in another zone, +2 if you're flying headlong into oncoming fire.                                                                                                         |
| **YOU LEAVE WHEN I LET YOU** Once per scene, you may Fight Quickly as a reaction to hook launch your hook onto an enemy and prevent their escape from your melee range. The enemy may defend against this. If you succeed, the enemy's intended action is lost. |
| `REDACTED`                                                                                                                                                                                                                                                      |

{ .block-language-dataview}


>[!blank|static wfull]
# Notes

`REDACTED` before being drafted into the [[United Terran Sphere Navy\|United Terran Sphere Navy]] in the early days of [[Database/History/The Ground War\|The Ground War]].  One of the most polarizing figures in the entire solar system. 

## Public Knowledge
- He's *incredibly* larger-than-life, and by all accounts he _really is_ just like that when he gets going on something
- You've probably seen clips of the [[Database/Mobile Suits/GS-79 Gundam Descolada\|Descolada]] fighting - it's a duelist / swashbuckler that wants to get in close with a ridiculous boost charge, run you through with that absurd gunlance, and then if you make it through that the lance is also bladed and functions as the world's longest heat saber
- He's pretty directly responsible for setting the "we're pirates now" blueprint that several million Earth refugees have gotten on board with over the last decade

He is looked up to as a role model, icon of what the armada means to people and its purpose, and basically the piratiest space pirate to ever space pirate. He would also probably be airlocked if he ever tried to actually force a captain not under his direct command to do something they really didn't want to. `REDACTED`



`REDACTED`

# Appearances

```base
filters:
  and:
    - file.hasTag("session")
    - '!file.inFolder("Admin/Templates")'
    - or:
        - Attending.contains(this.file.name)
        - NPCs.contains(this.file.name)
        - Location.contains(this.file.name)
        - Mechs.containsAny(this.file.name, this.aliases)
properties:
  file.name:
    displayName: Session
  note.SESH_Name:
    displayName: Name
  note.SESH_Date:
    displayName: Date
  note.Scenario_Index:
    displayName: Part
views:
  - type: table
    name: Appearances
    order:
      - file.name
      - Scenario
      - Scenario_Index
      - SESH_Name
      - SESH_Date
    sort:
      - property: file.name
        direction: ASC
      - property: Scenario_Index
        direction: ASC

```
