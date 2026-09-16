---
{"dg-publish":true,"permalink":"/admin/scratchpads/tech-test/","tags":[null],"noteIcon":"","updated":"2026-09-16T17:47:25.851-04:00","dg-note-properties":{"tags":[null]}}
---


# Test Embed In Blockquote

> Blockquote Line 1
> ![KamillePortrait.png](/img/user/Admin/Attachments/KamillePortrait.png)
> 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/places/colonies/geb/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





> [!INFOBOX] Geb
> # Geb
> `=embed(link(this.Portrait))`
> 
> | | |
> |--|--|
> |Body|[[Database/Glossary/Colony\|Colony]]|
> |Leadership|[[Database/Factions/Rebels\|Rebels]]|
> |Status|Contested|
> |Interest|[[Database/Factions/Jovian Consortium\|Jovian Consortium]]|

One of three colonies in [[Database/Glossary/The Belt\|The Belt]] that helped kick off [[Database/History/The Current Conflict\|The Current Conflict]] through disagreement with [[Database/Factions/Apsis\|Apsis]]. The colony didn't want to starve. Apsis disagreed.


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
    rowHeight: medium

```


</div></div>

> 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/people/the-pirate-king/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




> [!infobox|left wsmall]
> # The Pirate King
> ![Admin/Attachments/Harlock.jpg\|Harlock.jpg](/img/user/Admin/Attachments/Harlock.jpg)
> 
> |  |  |
> |--|--|
> |**FACTION**| [[Database/Factions/Armada Ejecta\|Armada Ejecta]]|
> | **STRAIN**| `REDACTED` |
>  
> |HARM|CONSEQUENCE|
> |----|-----|
> |2 Mild|Mild|
> |4 Mod|Moderate|
> |6 Svr|Severe|

> [!infobox|right wsmall]
> # Gundam Descolada
> ![Admin/Attachments/Descolada_SQ.webp\|Descolada_SQ.webp](/img/user/Admin/Attachments/Descolada_SQ.webp)
> 
> |  |  |
> |--|--|
> |**MODEL**|[[Database/Mobile Suits/GS-79 Gundam Descolada\|GS-79 Gundam Descolada]]|
> | **ARMOR**|`REDACTED`|
> 
> |HARM|BREAKDOWN|
> |----|-----|
> |2 Dent|Dented|
> |2 Dmg|Damaged|
> |4 Dsbl|Disabled|
> |6 Doom|Doomed|


| Aspects                                               |
| ----------------------------------------------------- |
| Flamboyant Living Symbol                              |
| Relationship                                          |
| Exemplary Captain First, King Distant Second          |
| Far Better To Live And Die Under The Brave Black Flag |
| `REDACTED`                                            |
| `REDACTED`                                            |

{ .block-language-dataview}


| Mech Aspects                 |
| ---------------------------- |
| Swashbuckling Space Duellist |
| `REDACTED`                   |
| `REDACTED`                   |

{ .block-language-dataview}


| Gear Aspects         |
| -------------------- |
| Composite Gunlance   |
| Hooked Duelling Cape |
| `REDACTED`           |
| `REDACTED`           |

{ .block-language-dataview}

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

`REDACTED` before being drafted into the [[United Terran Sphere Navy\|United Terran Sphere Navy]] in the early days of [[Database/History/The Ground War\|The Ground War]]. `REDACTED` One of the most polarizing figures in the entire solar system. 

## Public Knowledge
- He's *incredibly* larger-than-life, and by all accounts he _really is_ just like that when he gets going on something
- You've probably seen clips of the [[Database/Mobile Suits/GS-79 Gundam Descolada\|Descolada]] fighting - it's a duelist / swashbuckler that wants to get in close with a ridiculous boost charge, run you through with that absurd gunlance, and then if you make it through that the lance is also bladed and functions as the world's longest heat saber
- He's pretty directly responsible for setting the "we're pirates now" blueprint that several million Earth refugees have gotten on board with over the last decade
- He is looked up to as a role model, icon of what the armada means to people and its purpose, and basically the piratiest space pirate to ever space pirate. 
- He would also probably be airlocked if he ever tried to actually force a captain not under his direct command to do something they really didn't want to. `REDACTED`

## Quotes
- `REDACTED`

`REDACTED`

</div></div>

> 
```base
filters:
  and:
    - file.hasTag("character")
    - MECH_Model == link(this.file.name)
views:
  - type: list
    name: Known Pilots

```

> Blockquote Line 4

Individual
> 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/places/colonies/geb/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





> [!INFOBOX] Geb
> # Geb
> `=embed(link(this.Portrait))`
> 
> | | |
> |--|--|
> |Body|[[Database/Glossary/Colony\|Colony]]|
> |Leadership|[[Database/Factions/Rebels\|Rebels]]|
> |Status|Contested|
> |Interest|[[Database/Factions/Jovian Consortium\|Jovian Consortium]]|

One of three colonies in [[Database/Glossary/The Belt\|The Belt]] that helped kick off [[Database/History/The Current Conflict\|The Current Conflict]] through disagreement with [[Database/Factions/Apsis\|Apsis]]. The colony didn't want to starve. Apsis disagreed.


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
    rowHeight: medium

```


</div></div>
