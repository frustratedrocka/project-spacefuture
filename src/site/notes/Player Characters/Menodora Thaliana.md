---
{"dg-publish":true,"permalink":"/player-characters/menodora-thaliana/","tags":["PC","character","pilot"],"noteIcon":"","updated":"2026-09-16T20:39:21.886-04:00","dg-note-properties":{"tags":["PC","character","pilot"],"Player":"[[Admin/Player/Cynthia]]","SESH_Start":"[[Session Notes/Session 01]]","SESH_End":"N/A","SESH_Active":true,"Changelog":["N/A"],"Portrait":"[[Admin/Attachments/Menodora_SQ.png]]","Faction":["[[Database/Factions/Rebels]]","[[Database/Factions/Mindful Eyes]]"],"Origin":"[[Database/Places/Earth|Luna]]","Assoc":["[[Database/Glossary/The Belt]]","[[Database/Things/Charun]]"],"Strain":7,"Consequences":["Mild","Locked - Persevere 5","Moderate","Severe"],"Concept":"Hive-Linked Lunarian Refugee","Trouble":"Never Put Down Roots","Aspects":["It's Good To Be Underestimated","Allies In Strange Places","\"No Such Thing As A Hard 'No'\"","Free Aspect"],"Stunts":["**IF YOU CAN BUILD IT, I CAN BREAK IT** Not the most elegant of solutions, but engineering is not just a skill for putting things together. +1 when you Tinker to dismantle a machine.","**WHEN ALL YOU HAVE IS A POTATO PEELER** +1 when you Fight with something that *should not count* as a weapon. +2 if the \"weapon\" is actively harming you.","**HIGH SCHOOL NEVER ENDS** +1 when you Understand to figure out who is actually in charge in a room."],"MECH_Model":"[[Database/Mobile Suits/Kerbstomp]]","Armor":4,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Relationship":"My Ticket Out","MECH_Gear":["Mining Drill","Club"],"skill_5":[[null],[null],[null],[null]],"approach_5":[[null]],"skill_4":[[null],[null],[null],[null]],"approach_4":[[null],[null]],"skill_3":["Persevere",[null],[null],[null]],"approach_3":["Forcefully",[null]],"skill_2":["Fight","Network",[null],[null]],"approach_2":["Boldly","Cleverly"],"skill_1":["Tinker","Understand","Acquire",[null]],"approach_1":["Carefully","Quickly","Subtly"],"aliases":["Mena"]}}
---

> [!infobox|left wsmall]
> # Menodora Thaliana
> ![Admin/Attachments/Menodora_SQ.png\|Menodora_SQ.png](/img/user/Admin/Attachments/Menodora_SQ.png)
> > [!caption] 
> > 
> 
> |  |  |
> |--|--|
> |**ORIGIN**|[[Database/Places/Earth\|Luna]]|
> |**ASSOC.**|[[Database/Glossary/The Belt\|The Belt]]<br>[[Database/Things/Charun\|Charun]]|
> |**FACTIONS**| [[Database/Factions/Rebels\|Rebels]],<br>[[Database/Factions/Mindful Eyes\|Mindful Eyes]]|
> | **STRAIN**| 7 |
>  
> |HARM|CONSEQUENCE|
> |----|-----|
> |2 Mild|Mild|
> |4 Mod|Moderate|
> |6 Svr|Severe|

> [!infobox|right wsmall]
> # Kerbstomp
> ![Admin/Attachments/Theseus_SQ.webp\|Theseus_SQ.webp](/img/user/Admin/Attachments/Theseus_SQ.webp)
> 
> |  |  |
> |--|--|
> |**MODEL**|[[Database/Mobile Suits/Kerbstomp\|Kerbstomp]]|
> | **ARMOR**| `counter 0`  **/**  4|
> 
> |HARM|BREAKDOWN|
> |----|-----|
> |2 Dent|Dented|
> |2 Dmg|Damaged|
> |4 Dsbl|Disabled|
> |6 Doom|Doomed|


| Aspects                        |
| ------------------------------ |
| Hive-Linked Lunarian Refugee   |
| Never Put Down Roots           |
| It's Good To Be Underestimated |
| Allies In Strange Places       |
| "No Such Thing As A Hard 'No'" |
| Free Aspect                    |

{ .block-language-dataview}


| Mech Aspects         |
| -------------------- |
| Street-Trash Brawler |
| Franken-Software     |
| My Ticket Out        |

{ .block-language-dataview}


| Gear Aspects |
| ------------ |
| Mining Drill |
| Club         |

{ .block-language-dataview}

>[!blank|static wfull]

### SKILLS & APPROACHES
|                    |                    |                    |                    |       |                |                       |                        |                       |
| :----------------: | :----------------: | :----------------: | :----------------: | ----: | :------------- | :-------------------: | :--------------------: | --------------------- |
|  |  |  |  | **5** | **Superhuman** |  |                        |                       |
|  |  |  |  | **4** | **Masterful**  |  |   |                       |
|  |  |  | Persevere | **3** | **Great**      | Forcefully |   |                       |
|  |  | Network | Fight | **2** | **Good**       | Boldly | Cleverly  |                       |
|  | Acquire | Understand | Tinker | **1** | **Adequate**   | Carefully | Quickly  | Subtly |


| Stunts                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **IF YOU CAN BUILD IT, I CAN BREAK IT** Not the most elegant of solutions, but engineering is not just a skill for putting things together. +1 when you Tinker to dismantle a machine. |
| **WHEN ALL YOU HAVE IS A POTATO PEELER** +1 when you Fight with something that *should not count* as a weapon. +2 if the "weapon" is actively harming you.                             |
| **HIGH SCHOOL NEVER ENDS** +1 when you Understand to figure out who is actually in charge in a room.                                                                                   |

{ .block-language-dataview}


| Mech Stunts                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **SMOKESCREEN** Once per combat, the mech can launch chaff to create a debris field for a one time defense boost. +1 to defend against ranged attacks once per session unless circumstances prevent refilling chaff launchers. |
| **FOX IN A TRAP** Once per combat, the mech can sever a limb without suffering a breakdown to create an advantage.                                                                                                             |

{ .block-language-dataview}


```base
filters:
  and:
    - file.hasTag("session")
    - '!file.inFolder("Admin/Templates")'
    - or:
        - Attending.containsAny(link(this.file.name))
        - NPCs.containsAny(link(this.file.name))
        - Locations.contains(link(this.file.name))
        - Mechs.containsAny(link(this.file.name), this.aliases)
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
      - SESH_Name
      - Scenario
      - Scenario_Index
      - SESH_Date
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.SESH_Name: 230

```


```base
filters:
  and:
    - Impact.join("\n").contains(this.file.name + "]]")
    - '!file.inFolder("Admin/Templates")'
formulas:
  Impact: Impact.filter(value.toString().contains(this.file.name)).join("<br>")
views:
  - type: table
    name: Events
    order:
      - file.name
      - formula.Impact
    sort:
      - property: formula.Impact
        direction: ASC
    rowHeight: medium

```


```base
filters:
  and:
    - Changelog.join("\n").contains(this.file.name + "]]")
    - '!file.inFolder("Admin/Templates")'
formulas:
  Impact: Changelog.filter(value.toString().containsAny(this.file.name)).join("\n")
properties:
  formula.Impact:
    displayName: Change
views:
  - type: table
    name: Changelog
    order:
      - file.name
      - formula.Impact
    rowHeight: tall

```


# Notes

## Phase Trio

### Phase One: Inciting Incident
Got involved in mobile suit gladiator fighting with [[Database/Mobile Suits/Kerbstomp\|Kerbstomp]]. With word of the rebellion, decided to join up because maybe it would help her find out who was responsible for the Moondrop.

### Phase Two: Crossing Paths

[[Player Characters/Vergen Koni\|Vergen Koni]] had pinged a connection with [[Database/History/The Hive Mind\|The Hive Mind]] from Menodora. Finding another Hive-Linked individual, He and her seem to be Kindred spirits. 

### Phase Three: Crossing Paths

[[Player Characters/August Grier\|August Grier]] found his way to the fighting pits, not to fight, but to steal parts and pilots. He, perhaps unfortunately, found both.  