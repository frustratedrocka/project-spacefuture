---
{"dg-publish":true,"permalink":"/database/things/fishbone/","tags":["ship","character","weird","location"],"noteIcon":"","updated":"2026-09-19T11:46:30.952-04:00","dg-note-properties":{"tags":["ship","character","weird","location"],"Portrait":"[[Admin/Attachments/PCShip.webp]]","Type":"[[Database/Glossary/Ship]]","Class":"[[Database/Glossary/Ship|Guernica-Class Destroyer]]","Faction":["[[Database/Factions/Rebels]]"],"Control":"Courtesy Of the Consortium","Faction_Presence":["[[Database/Factions/Jovian Consortium]]"],"Rank":5,"Strain":8,"Consequences":["","","",""],"Concept":"Rebel Destroyer, Closest Thing To Home","Relationship":"Relationship","Aspects":["Courtesy Of [[Jovian Consortium|the Consortium]]",null,null],"Stunts":["**STUNT** Description","**STUNT** Description","**STUNT** Description"],"skill_5":[[null]],"approach_5":[[null]],"skill_4":[[null]],"approach_4":[[null]],"skill_3":["Skill"],"approach_3":["Approach"],"skill_2":["Skill","Skill"],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill"],"approach_1":["Approach","Approach","Approach"]}}
---

> [!infobox|embed left wsmall]
> # Fishbone
> ![Admin/Attachments/PCShip.webp\|PCShip.webp](/img/user/Admin/Attachments/PCShip.webp)
> >[!caption]
> >[[Database/Glossary/Ship\|Guernica-Class Destroyer]]
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

> [!blank|embed] ASPECTS
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Aspects</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span>Rebel Destroyer, Closest Thing To Home</span></td></tr><tr><td><span>Relationship</span></td></tr><tr><td><span>Courtesy Of <a data-tooltip-position="top" aria-label="Jovian Consortium" data-href="Jovian Consortium" href="Jovian Consortium" class="internal-link" target="_blank" rel="noopener nofollow">the Consortium</a></span></td></tr></tbody></table>

`REDACTED`

>[!blank|static wfull]

# Notes


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
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span></th><th class="table-view-th"><span>Scenario</span></th><th class="table-view-th"><span>Part</span></th><th class="table-view-th"><span>Date</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Session Notes/Session 00B.md" data-href="Session Notes/Session 00B.md" href="Session Notes/Session 00B.md" class="internal-link" target="_blank" rel="noopener nofollow">Session 00B</a> - Training Sim</span></td><td><span><a data-tooltip-position="top" aria-label="Session Notes/Scenarios/Pregame Setup.md" data-href="Session Notes/Scenarios/Pregame Setup.md" href="Session Notes/Scenarios/Pregame Setup.md" class="internal-link" target="_blank" rel="noopener nofollow">Pregame Setup</a></span></td><td>2</td><td>September 15, 2026</td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Session Notes/Session 01.md" data-href="Session Notes/Session 01.md" href="Session Notes/Session 01.md" class="internal-link" target="_blank" rel="noopener nofollow">Session 01</a> - And So It Begins</span></td><td><span><a data-tooltip-position="top" aria-label="Session Notes/Scenarios/Mission 01.md" data-href="Session Notes/Scenarios/Mission 01.md" href="Session Notes/Scenarios/Mission 01.md" class="internal-link" target="_blank" rel="noopener nofollow">Mission 01</a></span></td><td>1</td><td>September 29, 2026</td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Session Notes/Session 02.md" data-href="Session Notes/Session 02.md" href="Session Notes/Session 02.md" class="internal-link" target="_blank" rel="noopener nofollow">Session 02</a> - Operation Bilge Rat</span></td><td><span><a data-tooltip-position="top" aria-label="Session Notes/Scenarios/Mission 01.md" data-href="Session Notes/Scenarios/Mission 01.md" href="Session Notes/Scenarios/Mission 01.md" class="internal-link" target="_blank" rel="noopener nofollow">Mission 01</a></span></td><td>2</td><td>October 13, 2026</td></tr></tbody></table>

> [!blank|embed]
> <div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span></th><th class="table-view-th"><span>Date</span></th><th class="table-view-th"><span>Event</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Session Notes/Session 01.md" data-href="Session Notes/Session 01.md" href="Session Notes/Session 01.md" class="internal-link" target="_blank" rel="noopener nofollow">Session 01</a></span></td><td><span>0092-29-09</span></td><td><span>Original command staff and first wing of the <a data-href="Fishbone" href="Fishbone" class="internal-link" target="_blank" rel="noopener nofollow">Fishbone</a> KIA by <a data-tooltip-position="top" aria-label="Vantrin Almeyer" data-href="Vantrin Almeyer" href="Vantrin Almeyer" class="internal-link" target="_blank" rel="noopener nofollow">Vantrin</a> and the <a data-href="Brynhildr" href="Brynhildr" class="internal-link" target="_blank" rel="noopener nofollow">Brynhildr</a> team</span></td></tr></tbody></table></div>

> [!blank|embed]
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span></th><th class="table-view-th"><span>Change</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div>
