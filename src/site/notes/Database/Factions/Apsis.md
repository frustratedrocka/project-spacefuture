---
{"dg-publish":true,"permalink":"/database/factions/apsis/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-09-04T10:00:26.638-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Apsis","Beliefs":["We Are The Line Between The System And Starvation","Our Ends Justify Any Means"],"Paragon":"The Man Upstairs","Fealty":4,"Fellowship":2,"Force":8,"Fraternity":6,"aliases":["Faction 2","Oppressors"]}}
---


>[!INFOBOX|ws-med]
># Apsis
>`=embed(link(this.Portrait))`
>
>|||
>|--|--|
>|**PARAGON**|[[Database/People/The Man Upstairs\|The Man Upstairs]]|
>|**BELIEFS**|"We Are The Line Between The System And Starvation"<br>"Our Ends Justify Any Means"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|4|
>|**FELLOWSHIP**|2|
>|**FORCE**|8|
>|**FRATERNITY**|6|

Originally a shipping company run by [[Database/People/The Man Upstairs\|The Man Upstairs]], Apsis was empowered by the Ceres Accords that ended [[Database/History/The Ground War\|The Ground War]] as an ostensibly neutral body to oversee food distribution throughout the solar system.

They have proven to be anything *but* neutral, blatantly favoring [[Database/Places/Colonies/Ceres\|Ceres]] and the [[Database/Places/Jupiter Sphere/Jupiter\|Jupiter]] sphere and strangling [[Database/Factions/Republic Of Mars\|Martian]] attempts at self-sufficiency in the cradle. The degree to which they've been centralizing more and more power around themselves is even starting to alarm some members of the [[Database/Factions/Jovian Consortium\|Jovian Consortium]]. 

Their recent actions have pushed the system past the breaking point. In response to increasingly intense protests in [[Database/Places/The Belt\|The Belt]], they cut food allotments to the colonies of [[Database/Places/Colonies/Brisbane\|Brisbane]], [[Database/Places/Colonies/Cairo\|Cairo]], and [[Database/Places/Colonies/Mumbai\|Mumbai]] below starvation levels. The intent appears to have been to make examples of the colonies. Instead, they pushed [[Database/Factions/Rebels\|their opposition]] into open, armed revolt. 

A major wrinkle in any attempt to permanently deal with Apsis is that they are, currently, indispensable. In no small part because they've gone very far out of their way to ensure they *remain* indispensable.

`REDACTED`


```base
filters:
  and:
    - file.hasTag("character")
    - Faction.contains(this.file.name)
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
    markers: none
    separator: " - "

```



```base
filters:
  and:
    - file.hasTag("location")
    - or:
        - Faction.contains(this.file.name)
        - Faction_Presence.contains(this.file.name)
    - '!file.inFolder("Admin/Templates")'
properties:
  note.Faction_Presence:
    displayName: Other Presence
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Type
      - Faction
      - Control
      - Faction_Presence

```



```base
filters:
  and:
    - file.hasTag("Mech")
    - '!file.inFolder("Admin/Templates")'
    - '!file.inFolder("Database/Mechs/Sample")'
    - Faction.contains(this.file.name)
views:
  - type: cards
    name: Mobile Suits
    order:
      - file.name
    cardSize: 160
    image: note.MECH_Portrait
    imageAspectRatio: 0.5

```


