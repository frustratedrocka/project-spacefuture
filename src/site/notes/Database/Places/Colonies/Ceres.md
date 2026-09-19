---
{"dg-publish":true,"permalink":"/database/places/colonies/ceres/","tags":["location"],"noteIcon":"","updated":"2026-09-19T03:46:09.383-04:00","dg-note-properties":{"tags":["location"],"Type":"[[Locations Hub|Dwarf Planet]]","Faction":["[[Database/Factions/Apsis]]"],"Faction_Presence":null,"Control":"Home / Headquarters","Portrait":"Admin/Attachments/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).webp","Concept":"Nerve Center of the Sol System","Trouble":"As Awful As It Is Indispensable","Aspects":[null]}}
---


> [!INFOBOX|ws-med embed] Ceres
> # Ceres
> ![Admin/Attachments/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).webp\|Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).webp](/img/user/Admin/Attachments/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).webp)
> 
> | | |
> |--|--|
> |Body|[[Locations Hub\|Dwarf Planet]]|
> |Leadership|[[Database/Factions/Apsis\|Apsis]]|
> |Status|Home / Headquarters|
> |Interest||

| Aspects                         |
| ------------------------------- |
| Nerve Center of the Sol System  |
| As Awful As It Is Indispensable |

{ .block-language-dataview}


Humanity's oldest colony in [[Database/Glossary/The Belt\|The Belt]]. The decade following [[Database/History/The Ground War\|The Ground War]] has seen it largely taken over by [[Database/Factions/Apsis\|Apsis]]. What was once the farthest into the frontier humanity had ever reached is now the core logistical and manufacturing hub that keeps the calories flowing and the solar system fed. 

A direct assault on Ceres is not in the [[Database/Factions/Rebels\|Rebels]] playbook at this time. Ceres is both:

1. The most densely defended body in the solar system
2. The central nervous system for the entire system's resource distribution network.

Unless and until there is a plan to account for any root-level interruption of the latter that justifies the all-but-guaranteed horrendous losses that stem from the former, command has deemed a strike at Ceres absolutely not worth it.


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

| Session | Name | Scenario | Part | Date |
| ------- | ---- | -------- | ---- | ---- |

{ .block-language-dataview}

<div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span><span class="dataview small-text">0</span></th><th class="table-view-th"><span>Date</span></th><th class="table-view-th"><span>Event</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div></div>

| Session | Changelog |
| ------- | --------- |

{ .block-language-dataview}