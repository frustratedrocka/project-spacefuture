---
{"dg-publish":true,"permalink":"/database/people/anatol-garza/","tags":["npc","pilot"],"noteIcon":"","updated":"2026-09-29T21:18:23.976-04:00","dg-note-properties":{"tags":["npc","pilot"],"Portrait":"[[Admin/Attachments/GenericFeddie_SQ.webp]]","Faction":null,"Rank":null,"Assoc":null,"Strain":4,"Consequences":["Mild","Moderate","Severe"],"Concept":"High Concept","Relationship":"Relationship","Loyalty":"Loyalty","Aspects":[null,null,null],"Stunts":["**STUNT** Description","**STUNT** Description","**STUNT** Description"],"MECH_Model":"[[Database/Mobile Suits/HM14 Gundam]]","Armor":4,"Breakdown":[[null],[null],[null],[null]],"MECH_Relationship":null,"MECH_Gear":null,"skill_5":[[null]],"approach_5":[[null]],"skill_4":[[null]],"approach_4":[[null]],"skill_3":["Skill"],"approach_3":["Approach"],"skill_2":["Skill","Skill"],"approach_2":["Approach","Approach"],"skill_1":["Skill","Skill","Skill"],"approach_1":["Approach","Approach","Approach"]}}
---

> [!infobox|embed left wsmall]
> # Anatol Garza
> ![Admin/Attachments/GenericFeddie_SQ.webp\|GenericFeddie_SQ.webp](/img/user/Admin/Attachments/GenericFeddie_SQ.webp)
> 
> |  |  |
> |--|--|
> |**FACTION**|<span data-tag-name="dg-ready" aria-hidden="true" style="display: none;"></span>|
> | **STRAIN**| `REDACTED` |
>  
> |HARM|CONSEQUENCE|
> |----|-----|
> |2 Mild|Mild|
> |4 Mod|Moderate|
> |6 Svr|Severe|

> [!infobox|embed right wsmall]
> # `=this.MECH_Model.MECH_Name`
> ![Admin/Attachments/GM-II-AEUG_SQ.webp\|GM-II-AEUG_SQ.webp](/img/user/Admin/Attachments/GM-II-AEUG_SQ.webp)
> 
> |  |  |
> |--|--|
> |**MODEL**|[[Database/Mobile Suits/HM14 Gundam\|HM14 Gundam]]|
> | **ARMOR**|`REDACTED`|
> 
> |HARM|BREAKDOWN|
> |----|-----|
> |2 Dent||
> |2 Dmg||
> |4 Dsbl||
> |6 Doom||

> [!blank|embed] ASPECTS
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Aspects</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span>High Concept</span></td></tr><tr><td><span>Relationship</span></td></tr><tr><td><span>Loyalty</span></td></tr></tbody></table><span data-tag-name="dg-ready" aria-hidden="true" style="display: none;"></span>

> [!blank|embed] MECH ASPECTS
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Mech Aspects</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div><span data-tag-name="dg-ready" aria-hidden="true" style="display: none;"></span>

> [!blank|embed] GEAR ASPECTS
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Gear Aspects</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div><span data-tag-name="dg-ready" aria-hidden="true" style="display: none;"></span>

>[!blank|static wfull]
>
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
    - Changelog.join("\n").contains(this.file.name)
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

## Data

> [!blank|embed]
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span></th><th class="table-view-th"><span>Scenario</span></th><th class="table-view-th"><span>Part</span></th><th class="table-view-th"><span>Date</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Session Notes/Session 01.md" data-href="Session Notes/Session 01.md" href="Session Notes/Session 01.md" class="internal-link" target="_blank" rel="noopener nofollow">Session 01</a> - And So It Begins</span></td><td><span><a data-tooltip-position="top" aria-label="Session Notes/Scenarios/Rats In The Cellar.md" data-href="Session Notes/Scenarios/Rats In The Cellar.md" href="Session Notes/Scenarios/Rats In The Cellar.md" class="internal-link" target="_blank" rel="noopener nofollow">Rats In The Cellar</a></span></td><td>1</td><td>September 29, 2026</td></tr></tbody></table><span data-tag-name="dg-ready" aria-hidden="true" style="display: none;"></span>

> [!blank|embed]
> <div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span></th><th class="table-view-th"><span>Date</span></th><th class="table-view-th"><span>Event</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Session Notes/Session 01.md" data-href="Session Notes/Session 01.md" href="Session Notes/Session 01.md" class="internal-link" target="_blank" rel="noopener nofollow">Session 01</a></span></td><td><span>0092-09-29</span></td><td><span><span><span><a data-tooltip-position="top" aria-label="Database/People/Anatol Garza.md" data-href="Database/People/Anatol Garza.md" href="Database/People/Anatol Garza.md" class="internal-link" target="_blank" rel="noopener nofollow">Anatol Garza</a></span> in critical condition</span></span></td></tr></tbody></table></div><span data-tag-name="dg-ready" aria-hidden="true" style="display: none;"></span>

> [!blank|embed]
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span></th><th class="table-view-th"><span>Change</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div><span data-tag-name="dg-ready" aria-hidden="true" style="display: none;"></span>
