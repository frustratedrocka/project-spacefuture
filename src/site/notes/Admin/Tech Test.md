---
{"dg-publish":true,"permalink":"/admin/tech-test/","tags":[null],"noteIcon":"","updated":"2026-08-12T01:02:41.113-04:00","dg-note-properties":{"tags":[null]}}
---


# TEST BASE HARDCODE
```base
filters:
  and:
    - MECH_Model == this.file.name
    - file.hasTag("character")
views:
  - type: list
    name: Known Pilots
    order:
      - file.name
    image: note.Portrait
    imageAspectRatio: 0.65
    cardSize: 200
    indentProperties: false
```

# Test Embed In Blockquote

> Blockquote Line 1
> ![KamillePortrait.png](/img/user/Admin/Attachments/KamillePortrait.png)
> 
<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



One of three colonies in [[Database/Places/The Belt\|The Belt]] that helped kick off [[Database/History/The Current Conflict\|The Current Conflict]] through disagreement with [[Database/Factions/Apsis\|Apsis]]. The colony didn't want to starve. Apsis disagreed.

</div></div>

> 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/people/the-pirate-king/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




> [!infobox|left wsmall]
> # The Pirate King
> ![Admin/Attachments/Harlock.jpg\|Harlock.jpg](/img/user/Admin/Attachments/Harlock.jpg)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Space Pirates\|Space Pirates]]|
> | **STRAIN**| `REDACTED` |
>  
> |HARM|CONSEQUENCE|
> |----|-----|
> |2 Mild|Mild|
> |4 Mod|Moderate|
> |6 Svr|Severe|

> [!infobox|right wsmall]
> # Gundam Descolada
> ![Admin/Attachments/Descolada_SQ.png\|Descolada_SQ.png](/img/user/Admin/Attachments/Descolada_SQ.png)
> 
> |  |  |
> |--|--|
> | **ARMOR**|`REDACTED`|
> 
> |HARM|BREAKDOWN|
> |----|-----|
> |2 Dent|Dented|
> |2 Dmg|Damaged|
> |4 Dsbl|Disabled|
> |6 Doom|Doomed|

|ASPECTS|
|--------------- | 
|Far Better To Live And Die Under The Brave Black Flag|
|Relationship|
|Exemplary Captain First, King Distant Second|
|`REDACTED`|
|`REDACTED`|
|`REDACTED`|

|MECH ASPECTS|
|---------|
|High Concept|
|Trouble|
|Relationship|

|GEAR ASPECTS|
|--------|
|Primary Equipment|
|Secondary Equipment|

>[!blank|static wfull]


`REDACTED`

>[!blank|static wfull]
# Notes

</div></div>

> 
```base
filters:
  and:
    - file.hasTag("character")
    - MECH_Model == this.file.name
views:
  - type: list
    name: Known Pilots

```

> Blockquote Line 4