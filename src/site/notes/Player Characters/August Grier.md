---
{"dg-publish":true,"permalink":"/player-characters/august-grier/","tags":["PC","character","pilot"],"noteIcon":"","updated":"2026-09-16T19:22:00.619-04:00","dg-note-properties":{"tags":["PC","character","pilot"],"Player":"[[Admin/Player/Mike]]","SESH_Start":"[[Session Notes/Session 01]]","SESH_End":"N/A","SESH_Active":true,"Changelog":["N/A"],"Portrait":"[[Admin/Attachments/Auggie_SQ.png]]","Portrait_hmicro":"[[Auggie_HMicro.png]]","Faction":["[[Database/Factions/Rebels]]"],"Origin":"[[Database/Places/Mars]]","Assoc":["[[Database/Places/Colonies/Theseus]]"],"Strain":7,"Consequences":["Mild","Locked - Persevere 5","Moderate","Severe"],"Concept":"No-Longer-A-Child Soldier","Trouble":"\"My Life Is Expendable\"","Aspects":["Downed But Not Out","Front Towards Enemy","Stubbornness Is A Virtue","Free Aspect"],"Stunts":["**SUPPRESSIVE FIRE** Any time you're using a fully automatic weapon and you successfully Shoot to attack, you automatically create Adequate (1) opposition against movement in the target's zone until the end of your next turn as the hail of bullets pins down everyone in the area.","**A MOBILE SUIT IS A MELEE WEAPON** When engaging in melee combat and using your mobile suit's body weight to attack, you may Persevere instead of Fighting.","**ADVANCING UNDER FIRE** +1 when you move to advance under enemy fire, +2 when doing so without protection or armor. "],"MECH_Model":"[[Database/Mobile Suits/Hoplite Custom]]","Armor":4,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Relationship":"My Coffin","MECH_Gear":["Machinegun","Missile Launcher"],"skill_5":[[null],[null],[null],[null]],"approach_5":[[null]],"skill_4":[[null],[null],[null],[null]],"approach_4":[[null],[null]],"skill_3":["Persevere",[null],[null],[null]],"approach_3":["Boldly",[null]],"skill_2":["Shoot","Move",[null],[null]],"approach_2":["Carefully","Quickly"],"skill_1":["Fight","Operate","Tend",[null]],"approach_1":["Cleverly","Forcefully","Subtly"],"aliases":["Auggie"]}}
---

> [!infobox|left wsmall]
> # August Grier
> ![Admin/Attachments/Auggie_SQ.png\|Auggie_SQ.png](/img/user/Admin/Attachments/Auggie_SQ.png)
> > [!caption] 
> > 
> 
> |  |  |
> |--|--|
> |**ORIGIN**|[[Database/Places/Mars\|Mars]]|
> |**ASSOC.**|[[Database/Places/Colonies/Theseus\|Theseus]]|
> |**FACTIONS**| [[Database/Factions/Rebels\|Rebels]]|
> | **STRAIN**| 7 |
>  
> |HARM|CONSEQUENCE|
> |----|-----|
> |2 Mild|Mild|
> |4 Mod|Moderate|
> |6 Svr|Severe|

> [!infobox|right wsmall]
> # Hoplite Custom
> ![Admin/Attachments/HopliteCustom_SQ.png\|HopliteCustom_SQ.png](/img/user/Admin/Attachments/HopliteCustom_SQ.png)
> 
> |  |  |
> |--|--|
> |**MODEL**|[[Database/Mobile Suits/Hoplite Custom\|Hoplite Custom]]|
> | **ARMOR**| `counter 0`  **/**  4|
> 
> |HARM|BREAKDOWN|
> |----|-----|
> |2 Dent|Dented|
> |2 Dmg|Damaged|
> |4 Dsbl|Disabled|
> |6 Doom|Doomed|


| Aspects                   |
| ------------------------- |
| No-Longer-A-Child Soldier |
| "My Life Is Expendable"   |
| Downed But Not Out        |
| Front Towards Enemy       |
| Stubbornness Is A Virtue  |
| Free Aspect               |

{ .block-language-dataview}


| Mech Aspects               |
| -------------------------- |
| High-Performance Line Mech |
| Nothing Fancy              |
| My Coffin                  |

{ .block-language-dataview}


| Gear Aspects     |
| ---------------- |
| Machinegun       |
| Missile Launcher |

{ .block-language-dataview}

>[!blank|static wfull]

### SKILLS & APPROACHES
|                    |                    |                    |                    |       |                |                       |                        |                       |
| :----------------: | :----------------: | :----------------: | :----------------: | ----: | :------------- | :-------------------: | :--------------------: | --------------------- |
|  |  |  |  | **5** | **Superhuman** |  |                        |                       |
|  |  |  |  | **4** | **Masterful**  |  |   |                       |
|  |  |  | Persevere | **3** | **Great**      | Boldly |   |                       |
|  |  | Move | Shoot | **2** | **Good**       | Carefully | Quickly  |                       |
|  | Tend | Operate | Fight | **1** | **Adequate**   | Cleverly | Forcefully  | Subtly |


| Stunts                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **SUPPRESSIVE FIRE** Any time you're using a fully automatic weapon and you successfully Shoot to attack, you automatically create Adequate (1) opposition against movement in the target's zone until the end of your next turn as the hail of bullets pins down everyone in the area. |
| **A MOBILE SUIT IS A MELEE WEAPON** When engaging in melee combat and using your mobile suit's body weight to attack, you may Persevere instead of Fighting.                                                                                                                            |
| **ADVANCING UNDER FIRE** +1 when you move to advance under enemy fire, +2 when doing so without protection or armor.                                                                                                                                                                    |

{ .block-language-dataview}


| Mech Stunts                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HAMMER AND ANVIL** +1 when you Shoot a target already engaged in combat with an ally.                                                             |
| **DEAD MECH WALKING** When you would be taken out, you may take one final turn before the character who took you out declares what happened to you. |

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
      - Scenario
      - Scenario_Index
      - SESH_Name
      - SESH_Date
    sort:
      - property: file.name
        direction: ASC

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
Shot down during combat against Rebel forces. Captured, then turned to the resistance- at first forcefully, then willingly. 

### Phase Two: Crossing Paths
[[Player Characters/Lane Gable\|Lane Gable]] encountered August during combat. Lane was the resistance member that shot down August and decided to take him into the rebellion.

### Phase Three: Crossing Paths
[[Player Characters/Menodora Thaliana\|Menodora Thaliana]] was interested in joining the rebellion, and heard August was someone who may have an in. She cannot take no for an answer.