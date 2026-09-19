---
{"dg-publish":true,"permalink":"/database/things/brynhildr/","tags":["npc","location","ship","weird"],"noteIcon":"","updated":"2026-09-19T11:46:31.650-04:00","dg-note-properties":{"tags":["npc","location","ship","weird"],"Portrait":"Admin/Attachments/Brynhildr.webp","Faction":["[[Database/Factions/Apsis]]"],"Type":["[[Database/Glossary/Ship]]"],"Class":"[[Database/Glossary/Ship|Valkyrie-class cruiser]]","Scale":5,"Rank":null,"Strain":4,"Consequences":["Mild","Moderate","Severe"],"Concept":"Apsis pursuit cruiser","Aspects":["Scourge of the deep belt","One battle, one Brynhildr",null],"Stunts":["**STUNT** Description","**STUNT** Description","**STUNT** Description"],"skill_5":[[null],[null],[null],[null]],"approach_5":[[null]],"skill_4":[[null],[null],[null],[null]],"approach_4":[[null],[null]],"skill_3":["Skill",[null],[null],[null]],"approach_3":["Approach",[null]],"skill_2":["Skill","Skill",[null],[null]],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill",[null]],"approach_1":["Approach","Approach","Approach"]}}
---

> [!infobox|embed left wsmall]
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

> [!blank|embed] ASPECTS
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Aspects</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span>Apsis pursuit cruiser</span></td></tr><tr><td><span>Scourge of the deep belt</span></td></tr><tr><td><span>One battle, one Brynhildr</span></td></tr></tbody></table>

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

> [!blank|embed]
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span></th><th class="table-view-th"><span>Scenario</span></th><th class="table-view-th"><span>Part</span></th><th class="table-view-th"><span>Date</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div>

> [!blank|embed]
> <div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span></th><th class="table-view-th"><span>Date</span></th><th class="table-view-th"><span>Event</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Session Notes/Session 01.md" data-href="Session Notes/Session 01.md" href="Session Notes/Session 01.md" class="internal-link" target="_blank" rel="noopener nofollow">Session 01</a></span></td><td><span>0092-29-09</span></td><td><span>Original command staff and first wing of the <a data-href="Fishbone" href="Fishbone" class="internal-link" target="_blank" rel="noopener nofollow">Fishbone</a> KIA by <a data-tooltip-position="top" aria-label="Vantrin Almeyer" data-href="Vantrin Almeyer" href="Vantrin Almeyer" class="internal-link" target="_blank" rel="noopener nofollow">Vantrin</a> and the <a data-href="Brynhildr" href="Brynhildr" class="internal-link" target="_blank" rel="noopener nofollow">Brynhildr</a> team</span></td></tr></tbody></table></div>

> [!blank|embed]
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span></th><th class="table-view-th"><span>Change</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div>
