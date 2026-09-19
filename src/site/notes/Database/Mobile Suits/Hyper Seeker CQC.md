---
{"dg-publish":true,"permalink":"/database/mobile-suits/hyper-seeker-cqc/","tags":["Mech"],"noteIcon":"","updated":"2026-09-19T04:38:46.399-04:00","dg-note-properties":{"tags":["Mech"],"MECH_Name":"Hyper Seeker","MECH_Model":["[[Database/Mobile Suits/Hyper Seeker CQC]]"],"Portrait":"[[Admin/Attachments/Hyper_Seeker_CQC_SQ.webp]]","Armor":4,"Breakdown":["Dented","Damaged","Disabled","Doomed"],"MECH_Concept":"Speedy CQC","MECH_Trouble":"Unstable Core","MECH_Gear":["Heat Sword","Grapple Shield"],"MECH_Stunts":["**HASTE SYSTEM** Once per session, +2 when you Move Quickly. You may attempt to activate this again, but must roll Move Quickly against opposition equal to the number of activations this session, counting the triggering one. On a tie, your suit takes harm equal to the opposition. On a failure, your suit suffers an automatic Breakdown at an available level equal to or greater than the opposition.","**GRAPPLE CLAW** You yank an enemy combatant close to you. +1 when you Move to create an advantage by grappling an enemy towards you."],"Known_Users":["[[Player Characters/Vergen Koni]]"],"Faction":["[[Database/Factions/Rebels]]","[[Database/Factions/Mindful Eyes]]"],"Variants":[null]}}
---


> [!infobox|embed left wsmall]
> # Hyper Seeker
> ![Admin/Attachments/Hyper_Seeker_CQC_SQ.webp\|Hyper_Seeker_CQC_SQ.webp](/img/user/Admin/Attachments/Hyper_Seeker_CQC_SQ.webp)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Rebels\|Rebels]]<br>[[Database/Factions/Mindful Eyes\|Mindful Eyes]]|
> |**KNOWN PILOTS**|[[Player Characters/Vergen Koni\|Vergen Koni]]|
> |**ARMOR**|4|
> 
> 

| Mech Aspects  |
| ------------- |
| Speedy CQC    |
| Unstable Core |

{ .block-language-dataview}

| Known Armaments |
| --------------- |
| Heat Sword      |
| Grapple Shield  |

{ .block-language-dataview}

| Mech Stunts                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HASTE SYSTEM** Once per session, +2 when you Move Quickly. You may attempt to activate this again, but must roll Move Quickly against opposition equal to the number of activations this session, counting the triggering one. On a tie, your suit takes harm equal to the opposition. On a failure, your suit suffers an automatic Breakdown at an available level equal to or greater than the opposition. |
| **GRAPPLE CLAW** You yank an enemy combatant close to you. +1 when you Move to create an advantage by grappling an enemy towards you.                                                                                                                                                                                                                                                                          |

{ .block-language-dataview}

>[!blank|wfull]
# Notes

## Data

| Session                                       | Name         | Scenario                                                    | Part | Date               |
| --------------------------------------------- | ------------ | ----------------------------------------------------------- | ---- | ------------------ |
| [[Session Notes/Session 00A\|Session 00A]] | Origins      | [[Session Notes/Scenarios/Pregame Setup\|Pregame Setup]] | 1    | September 01, 2026 |
| [[Session Notes/Session 00B\|Session 00B]] | Training Sim | [[Session Notes/Scenarios/Pregame Setup\|Pregame Setup]] | 2    | September 15, 2026 |

{ .block-language-dataview}

<div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Session</span></th><th class="table-view-th"><span>Date</span></th><th class="table-view-th"><span>Event</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div></div>

```

```dataview
TABLE WITHOUT ID
    file.link AS "Session",
    "**OLD:** " + parts[1]
    + "<br>**NEW:** " + parts[2]
    AS "Changelog"

FROM #session
WHERE Changelog[0]

FLATTEN filter(
    map(Changelog, (entry) => split(entry, " ::: ")),
    (parts) => regexreplace(parts[0], "\\[\\[|\\]\\]", "") = this.file.name
) AS parts

WHERE (
    (SESH_Done = true AND !(contains(entry, "!h"+"!") AND contains(entry, "!/h"+"!")))
    OR "__DG_PUBLISH__" != "__DG_PUBLISH__"
)
```