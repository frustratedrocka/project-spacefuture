---
{"dg-publish":true,"permalink":"/database/people/test/test-secret-pilot/","tags":["npc"],"noteIcon":"","updated":"2026-08-12T05:08:46.762-04:00","dg-note-properties":{"tags":["npc"],"Portrait":"Admin/Attachments/GenericFeddie_SQ.png","Faction":null,"Strain":4,"Consequences":["Mild","Moderate","Severe"],"Concept":"High Concept","Relationship":"Relationship","Loyalty":"Loyalty","Aspects":[null],"Stunts":["**STUNT** Stunt Description","**STUNT** Stunt Description","**STUNT** Stunt Description"],"MECH_Name":"John Cena","MECH_Model":"UNO-CM3","MECH_Portrait":"Admin/Attachments/GM-II-AEUG_SQ.png","Armor":4,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Concept":"High Concept","MECH_Trouble":"Trouble","MECH_Relationship":"Relationship","MECH_Gear":["Primary Equipment","Secondary Equipment"],"MECH_Stunts":["**STUNT** Stunt Description","**STUNT** Stunt Description"],"skill_5":[[null],[null],[null],[null]],"approach_5":[[null]],"skill_4":[[null],[null],[null],[null]],"approach_4":[[null],[null]],"skill_3":["Skill",[null],[null],[null]],"approach_3":["Approach",[null]],"skill_2":["Skill","Skill",[null],[null]],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill",[null]],"approach_1":["Approach","Approach","Approach"]}}
---


> [!infobox|left wsmall]
> # Test Secret Pilot
> ![Admin/Attachments/GenericFeddie_SQ.png\|GenericFeddie_SQ.png](/img/user/Admin/Attachments/GenericFeddie_SQ.png)
> 
> |  |  |
> |--|--|
> |**FACTION**| `=link(this.Faction)`|
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




`REDACTED`"), 
 "`REDACTED`",
 row 
)
AS "Mech Stunts"
FROM ""
WHERE file.name = this.file.name
FLATTEN MECH_Stunts as row
WHERE row != null
WHERE !(
 contains(string(row), "")
)
```

!/r!

>[!blank|static wfull]
# Notes