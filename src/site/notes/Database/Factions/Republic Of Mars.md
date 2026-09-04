---
{"dg-publish":true,"permalink":"/database/factions/republic-of-mars/","tags":["faction"],"noteIcon":"","updated":"2026-09-04T09:57:53.156-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Republic Of Mars","Portrait":"Admin/Attachments/RFGuerillaPropPoster1.jpg","Beliefs":["We Deserve Self-Determination","Delay Is Complicity"],"Paragon":null,"Fealty":4,"Fellowship":8,"Force":6,"Fraternity":2,"aliases":["ROM","Martian"]}}
---


>[!INFOBOX|ws-med]
># Republic Of Mars
>![Admin/Attachments/RFGuerillaPropPoster1.jpg\|RFGuerillaPropPoster1.jpg](/img/user/Admin/Attachments/RFGuerillaPropPoster1.jpg)
>
> 
>
>|SKILL|RANK|
>|--|:--:|
>|Fealty|4|
>|Fellowship|8|
>|Force|6|
>|Fraternity|2|
>
>
>**BELIEFS**
><div><ul class="dataview list-view-ul"><li><span>We Deserve Self-Determination</span></li><li><span>Delay Is Complicity</span></li></ul></div>
>
> **PARAGON**
>`=link(this.Paragon)`

*Officially*, [[Database/History/The Ground War\|The Ground War]] ended with no winner, and the [[Database/Places/Colonies/Ceres\|Ceres]] accords established [[Database/Factions/Apsis\|Apsis]] as an unaligned, neutral administration.

In reality, [[Database/Places/Mars\|Mars]] is getting screwed and everyone knows it. 

Martian crews extract soil from the corpse of Earth, and Apsis sends it on to Jupiter and the Belt. Martian workers successfully terraform a region, and Apsis seizes it to distribute its output through the rest of the solar system. Martian workers threaten a general strike, and suddenly there's armed [[Database/Mobile Suits/SE-832 Akoni\|Akoni]] detachments landing at [[Olympus\|Olympus]], [[Cydonia\|Cydonia]], and other major cities in "scheduled training exercises to acclimate pilots to the requirements of urban movement." 

While ROM has taken no public position, most Martians believe Apsis is intentionally keeping them from ever achieving self-sufficiency.  If their heavy-handed tactics were really about keeping the rest of the system fed at Mars's expense, then that would be just another of the countless hard resource decisions made during and after the Ground War that everyone's learned are necessary. The problem is selective enforcement. Apsis has been fairly blatant about favoring the [[Database/Factions/Jovian Consortium\|Jovian Consortium]] since its founding, with the justification that Jupiter's extreme distance and reliance on the [[Database/Things/Charun\|Charun]] ferries and other slow infrastructure mean it needs more reserves built up than are reasonable for anyone else. But when rumors reach the [[Inner Rings\|Inner Rings]] of another successful Jovian hydroponic initiative, Apsis is "looking into the matter" or "hasn't yet received those reports." When Mars gets something up and running, Apsis has paperwork drawn up within days. 

`REDACTED`

And then there's the refugee problem. Mars was the first stop for most of those who fled Luna and [[Database/Places/Earth\|Earth]] during and after [[Database/History/The Ground War\|The Ground War]]. The explosion in population, combined with the near-total cessation of food imports from Earth that Mars was already reliant on, turned the Red Planet into ground zero for the Malthusian collapse that would quickly spread through the entire solar system. This has understandably led to some extremely contentious and fractured politics, which show no signs of cooling down any time soon even as the "temporary" arrangements start to solidify into permanent infrastructure.

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
