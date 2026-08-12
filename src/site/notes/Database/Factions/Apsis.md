---
{"dg-publish":true,"permalink":"/database/factions/apsis/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-12T05:53:34.383-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Apsis","Beliefs":["We Are The Line Between The System And Starvation","Our Ends Justify Any Means"],"Paragon":"The Man Upstairs","Fealty":4,"Fellowship":2,"Force":8,"Fraternity":6,"aliases":["Faction 2","Oppressors"]}}
---


>[!INFOBOX|wm-sm]
># Apsis
>`=embed(link(this.Portrait))`
>
>
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|4|
>|**FELLOWSHIP**|2|
>|**FORCE**|8|
>|**FRATERNITY**|6|
>
>
>**BELIEFS**
><div><ul class="dataview list-view-ul"><li><span>We Are The Line Between The System And Starvation</span></li><li><span>Our Ends Justify Any Means</span></li></ul></div>
>
> **PARAGON**
>[[Database/People/The Man Upstairs\|The Man Upstairs]]

Originally a shipping company run by [[Database/People/The Man Upstairs\|The Man Upstairs]], Apsis was empowered by the Ceres Accords that ended [[Database/History/The Ground War\|The Ground War]] as an ostensibly neutral body to oversee food distribution throughout the solar system.

They have proven to be anything *but* neutral, blatantly favoring [[Database/Places/Colonies/Ceres\|Ceres]] and the [[Database/Places/Jupiter Sphere/Jupiter\|Jupiter]] sphere. The degree to which they've been centralizing more and more power around themselves is even starting to alarm some members of the [[Database/Factions/Jovian Consortium\|Jovian Consortium]]. 

Their recent actions have pushed the system past the breaking point. In response to increasingly intense protests in [[Database/Places/The Belt\|The Belt]], they cut food allotments to the colonies of [[Database/Places/Colonies/Brisbane\|Brisbane]], [[Database/Places/Colonies/Cairo\|Cairo]], and [[Database/Places/Colonies/Mumbai\|Mumbai]] below starvation levels. The intent appears to have been to make examples of the colonies. Instead, they pushed [[Database/Factions/Rebels\|their opposition]] into open, armed revolt. 
```base
filters:
  and:
    - file.hasTag("character")
    - Faction == "Apsis"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    sort:
      - property: Rank
        direction: ASC
    separator: " - "
    markers: none
    image: note.Portrait
    imageAspectRatio: 0.5
    cardSize: 160
    indentProperties: false
```
{ #FactionTable}


```base
filters:
  and:
    - file.tags.contains("location")
    - or:
        - Faction == "Apsis"
        - Faction_Presence.contains("Apsis")
properties:
  note.file.name:
    displayName: Location
  note.faction_Control:
    displayName: Leadership
  note.faction_Presence:
    displayName: Other Factions
  note.control:
    displayName: Status
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Faction
      - Control
      - Faction_Presence
    indentProperties: false
```

```base
filters:
  and:
    - Faction.contains("Apsis")
    - file.tags.contains("Mech")
    - file.folder != "Database/Mechs/Sample"
properties:
  file.name:
    displayName: Mech
views:
  - type: cards
    name: Mobile Suits
    order:
      - file.name
    indentProperties: false
    cardSize: 160
    imageAspectRatio: 0.5
    image: MECH_Portrait
    imageFit: cover
```