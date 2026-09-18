---
{"dg-publish":true,"permalink":"/database/people/the-queen/","tags":["npc","character","pilot"],"noteIcon":"","updated":"2026-09-18T19:12:03.522-04:00","dg-note-properties":{"tags":["npc","character","pilot"],"Portrait":"[[Admin/Attachments/GenericFeddie_SQ.webp]]","portrait_Link":"![[Admin/Attachments/GenericFeddie_SQ.webp]]","Faction":["[[Database/Factions/Hive Cult]]"],"Assoc":null,"Origin":null,"Rank":0,"Strain":4,"Consequences":["Mild","Moderate","Severe"],"Concept":"High Concept","Relationship":"Relationship","Loyalty":"Loyalty","Aspects":[null],"Stunts":[null],"MECH_Name":"Eubiont","MECH_Model":"[[Database/Mobile Suits/Eubiont]]","Armor":4,"Breakdown":[[null],[null],[null],[null]],"MECH_Concept":"Nucleus of the Cult","MECH_Trouble":"Ponderous","MECH_Relationship":null,"MECH_Gear":["Judicium Beam Rifle","Bastard Sword"],"MECH_Stunts":["**FUNNEL CAGE** When you Operate Forcefully to create an advantage by using your funnels to limit your opponent's mobility, gain an additional free invoke if you succeed, or turn a tie into a full success.","**PINNED BUTTERFLY** +1 when you Shoot to try and finish off a target that your funnels and/or cultists have pinned down, +2 if you might hit a cultist in the shot's path."],"skill_5":[[null],[null],[null],[null]],"approach_5":[[null]],"skill_4":[[null],[null],[null],[null]],"approach_4":[[null],[null]],"skill_3":["Skill",[null],[null],[null]],"approach_3":["Approach",[null]],"skill_2":["Skill","Skill",[null],[null]],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill",[null]],"approach_1":["Approach","Approach","Approach"]}}
---

> [!infobox|left wsmall]
> # The Queen
> ![Admin/Attachments/GenericFeddie_SQ.webp\|GenericFeddie_SQ.webp](/img/user/Admin/Attachments/GenericFeddie_SQ.webp)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Hive Cult\|Hive Cult]]|
> | **STRAIN**| `REDACTED` |
>  
> |HARM|CONSEQUENCE|
> |----|-----|
> |2 Mild|Mild|
> |4 Mod|Moderate|
> |6 Svr|Severe|




| Aspects      |
| ------------ |
| High Concept |
| Relationship |
| Loyalty      |

{ .block-language-dataview}



`REDACTED`

>[!blank|static wfull]

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

## Quotes