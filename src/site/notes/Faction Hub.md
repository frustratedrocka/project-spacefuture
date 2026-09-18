---
{"dg-publish":true,"permalink":"/faction-hub/","tags":["Tracker","index"],"dgShowToc":true,"noteIcon":"","updated":"2026-09-04T19:44:23.274-04:00","dg-note-properties":{"tags":["Tracker","index"]}}
---


# Factions

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/rebels/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




>[!infobox|embed ws-med]
># Rebels
>![Admin/Attachments/RebelInsignia.webp\|RebelInsignia.webp](/img/user/Admin/Attachments/RebelInsignia.webp)
>
>|||
>|--|--|
>|**PARAGON**||
>|**BELIEFS**|"This Cannot Continue"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|6|
>|**FELLOWSHIP**|8|
>|**FORCE**|4|
>|**FRATERNITY**|2|

The [[Database/Factions/Rebels\|Rebels]] are a motley assortment of defectors, pirates, deniable government support, ideologues, and anyone else willing and able to take drastic measures to correct Apsis's lethal overreach. They officially formed as a direct response to [[Database/Factions/Apsis\|Apsis]] attempting to make an example of multiple dissenting colonies - [[Database/Places/Colonies/Kelly\|Kelly]], [[Database/Places/Colonies/Geb\|Geb]], [[Database/Places/Colonies/Arjuna\|Arjuna]] - by cutting their food allotments below starvation levels. 

The current mission is simple: Intercept excess food shipments and redirect them from the Jupiter sphere towards the places where they're most needed. That said, the questions of who gets to define "excess" and what counts as "most needed" are matters of significant internal debate.

>[!blank|wfull]



>[!cards|dataview 4 collapse img-tiny txt-c]
>  | Portrait                                                                | Player Character                                                  |
> | ----------------------------------------------------------------------- | ----------------------------------------------------------------- |
> | ![Admin/Attachments/Auggie_SQ.png\|Auggie_SQ.png](/img/user/Admin/Attachments/Auggie_SQ.png)                     | **[[Player Characters/August Grier\|August Grier]]**           |
> | ![Admin/Attachments/Lane_Sq.webp\|Lane_Sq.webp](/img/user/Admin/Attachments/Lane_Sq.webp)                       | **[[Player Characters/Lane Gable\|Lane Gable]]**               |
> | ![Admin/Attachments/Menodora_SQ.png\|Menodora_SQ.png](/img/user/Admin/Attachments/Menodora_SQ.png)                 | **[[Player Characters/Menodora Thaliana\|Menodora Thaliana]]** |
> | ![Admin/Attachments/Verg_Profile_pic_SQ.png\|Verg_Profile_pic_SQ.png](/img/user/Admin/Attachments/Verg_Profile_pic_SQ.png) | **[[Player Characters/Vergen Koni\|Vergen Koni]]**             |
> 
{ .block-language-dataview}

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction.containsAny(link(this.file.name))
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


```base
filters:
  and:
    - file.hasTag("location")
    - or:
        - Faction.contains(link(this.file.name))
        - Faction_Presence.contains(link(this.file.name))
    - '!file.inFolder("Admin/Templates")'
properties:
  note.Faction_Presence:
    displayName: Other Presence
  file.name:
    displayName: Name
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Concept
      - Faction
      - Control
      - Faction_Presence
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.Concept: 218
      note.Faction: 133
      note.Control: 136
      note.Faction_Presence: 251
    rowHeight: medium

```


>[!cards|dataview 4 collapse img-tiny]
>  | Mobile Suits                                                            | Name                                                                |
> | ----------------------------------------------------------------------- | ------------------------------------------------------------------- |
> | ![Admin/Attachments/DagDoll_SQ.webp\|DagDoll_SQ.webp](/img/user/Admin/Attachments/DagDoll_SQ.webp)                 | **[[Database/Mobile Suits/Elegant Sky\|Elegant Sky]]**           |
> | ![Admin/Attachments/HopliteCustom_SQ.png\|HopliteCustom_SQ.png](/img/user/Admin/Attachments/HopliteCustom_SQ.png)       | **[[Database/Mobile Suits/Hoplite Custom\|Hoplite Custom]]**     |
> | ![Admin/Attachments/Hyper_Seeker_CQC_SQ.png\|Hyper_Seeker_CQC_SQ.png](/img/user/Admin/Attachments/Hyper_Seeker_CQC_SQ.png) | **[[Database/Mobile Suits/Hyper Seeker CQC\|Hyper Seeker CQC]]** |
> | ![Admin/Attachments/Theseus_SQ.webp\|Theseus_SQ.webp](/img/user/Admin/Attachments/Theseus_SQ.webp)                 | **[[Database/Mobile Suits/Kerbstomp\|Kerbstomp]]**               |
> 
{ .block-language-dataview}

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/apsis/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





>[!infobox|embed ws-med]
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

Their recent actions have pushed the system past the breaking point. In response to increasingly intense protests in [[Database/Glossary/The Belt\|The Belt]], they cut food allotments to the colonies of [[Database/Places/Colonies/Geb\|Geb]], [[Database/Places/Colonies/Kelly\|Kelly]], and [[Database/Places/Colonies/Arjuna\|Arjuna]] below starvation levels. The intent appears to have been to make examples of the colonies. Instead, they pushed [[Database/Factions/Rebels\|their opposition]] into open, armed revolt. 

A major wrinkle in any attempt to permanently deal with Apsis is that they are, currently, indispensable. In no small part because they've gone very far out of their way to ensure they *remain* indispensable.

`REDACTED`


```base
filters:
  and:
    - file.hasTag("character")
    - Faction.contains(link(this.file.name))
    - '!file.folder.contains("Player Characters/Archive")'
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
        - Faction.contains(link(this.file.name))
        - Faction_Presence.contains(link(this.file.name))
    - '!file.inFolder("Admin/Templates")'
properties:
  note.Faction_Presence:
    displayName: Other Presence
  file.name:
    displayName: Name
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Concept
      - Faction
      - Control
      - Faction_Presence
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.Concept: 218
      note.Faction: 133
      note.Control: 136
      note.Faction_Presence: 251
    rowHeight: medium

```


>[!cards|dataview 4 collapse img-tiny]
>  | Mobile Suits                                          | Name                                                                                      |
> | ----------------------------------------------------- | ----------------------------------------------------------------------------------------- |
> | ![Admin/Attachments/Akoni_SQ.png\|Akoni_SQ.png](/img/user/Admin/Attachments/Akoni_SQ.png)     | **[[Database/Mobile Suits/SE-832 Akoni\|SE-832 Akoni]]**                               |
> | ![Admin/Attachments/Akoni-E_SQ.png\|Akoni-E_SQ.png](/img/user/Admin/Attachments/Akoni-E_SQ.png) | **[[Database/Mobile Suits/SE-832-E Akoni Command Type\|SE-832-E Akoni Command Type]]** |
> 
{ .block-language-dataview}

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/jovian-consortium/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





>[!infobox|embed ws-med]
># Jovian Consortium
>`=embed(link(this.Portrait))`
>
>|||
>|--|--|
>|**PARAGON**|[[Database/People/The CEO\|The CEO]]|
>|**BELIEFS**|"Obedience Through Power"<br>"Trust The (Long) Process"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|4|
>|**FELLOWSHIP**|2|
>|**FORCE**|6|
>|**FRATERNITY**|8|

The corporate council that forms the effective governing body of the [[Database/Places/Jupiter Sphere/Jupiter\|Jupiter]] sphere. Whether they hold the leash of [[Database/Factions/Apsis\|Apsis]] or the other way around is becoming a murkier question every day. The Consortium believes that since it produces the [[Helium-3\|Helium-3]] that the rest of the solar system runs on, it's somewhat entitled to throw its weight around. This is largely what led to the unstable stalemate that ended the Ground War: Jupiter needs food (which currently only the [[Database/Factions/Republic Of Mars\|Republic Of Mars]] and a few dedicated colonies in [[Database/Glossary/The Belt\|The Belt]] can grow enough of to export) and soil (which also needs Mars and/or the Belt as staging areas for extraction), but eventually enough of the latter will allow them self-sufficiency for the former. Mars and the Belt, on the other hand, will never stop needing Jovian fuel. 

`REDACTED`

With that attitude as a baseline, it came as something of a shock to outside observers - and even many within the Consortium - that Apsis's increasingly blatant attempts to keep Mars dependent on it and their recent escalation in the belt caused a number of Jovian military personnel to defect outright and take their materiel with them. Those defectors formed roughly half the initial backbone of the nascent [[Database/Factions/Rebels\|Rebels]]. 

`REDACTED`

Jovian culture firmly believes that nothing worth doing happens quickly. Which, considering that it takes each [[Database/Things/Charun\|Charun]] ferry a month and change to travel from [[Database/Glossary/The Belt\|The Belt]] to [[Database/Places/Jupiter Sphere/Jupiter\|Jupiter]] and another month for it to get back, and 43 minutes for a message sent at the speed of light to travel the distance to Sol and another 43 minutes for the response to come in, is understandable. `REDACTED`


```base
filters:
  and:
    - file.hasTag("character")
    - Faction.contains(link(this.file.name))
    - '!file.folder.contains("Player Characters/Archive")'
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
        - Faction.contains(link(this.file.name))
        - Faction_Presence.contains(link(this.file.name))
    - '!file.inFolder("Admin/Templates")'
properties:
  note.Faction_Presence:
    displayName: Other Presence
  file.name:
    displayName: Name
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Concept
      - Faction
      - Control
      - Faction_Presence
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.Concept: 218
      note.Faction: 133
      note.Control: 136
      note.Faction_Presence: 251
    rowHeight: medium

```


>[!cards|dataview 4 collapse img-tiny]
>  | Mobile Suits                                                            | Name                                                                                |
> | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
> | ![Admin/Attachments/Hoplite_SQ.png\|Hoplite_SQ.png](/img/user/Admin/Attachments/Hoplite_SQ.png)                   | **[[Database/Mobile Suits/UT-F-08 Hoplite\|UT-F-08 Hoplite]]**                   |
> | ![Admin/Attachments/Hoplite_Striker_SQ.webp\|Hoplite_Striker_SQ.webp](/img/user/Admin/Attachments/Hoplite_Striker_SQ.webp) | **[[Database/Mobile Suits/UT-F-08S Hoplite Striker\|UT-F-08S Hoplite Striker]]** |
> 
{ .block-language-dataview}

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/republic-of-mars/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





>[!infobox|embed ws-med]
># Republic Of Mars
>![Admin/Attachments/RFGuerillaPropPoster1.jpg\|RFGuerillaPropPoster1.jpg](/img/user/Admin/Attachments/RFGuerillaPropPoster1.jpg)
>
>|||
>|--|--|
>|**PARAGON**|`=link(this.Paragon)`|
>|**BELIEFS**|"We Deserve Self-Determination,"<br>"Delay Is Complicity"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|4|
>|**FELLOWSHIP**|8|
>|**FORCE**|6|
>|**FRATERNITY**|2|

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
    - Faction.contains(link(this.file.name))
    - '!file.folder.contains("Player Characters/Archive")'
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
        - Faction.contains(link(this.file.name))
        - Faction_Presence.contains(link(this.file.name))
    - '!file.inFolder("Admin/Templates")'
properties:
  note.Faction_Presence:
    displayName: Other Presence
  file.name:
    displayName: Name
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Concept
      - Faction
      - Control
      - Faction_Presence
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.Concept: 218
      note.Faction: 133
      note.Control: 136
      note.Faction_Presence: 251
    rowHeight: medium

```


>[!cards|dataview 4 collapse img-tiny]
>  | Mobile Suits | Name |
> | ------------ | ---- |
> 
{ .block-language-dataview}

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/armada-ejecta/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





>[!infobox|embed ws-med]
># Armada Ejecta
>![Admin/Attachments/CV_Recolor.webp\|CV_Recolor.webp](/img/user/Admin/Attachments/CV_Recolor.webp)
>
>|||
>|--|--|
>|**PARAGON**|[[Database/People/The Pirate King\|The Pirate King]]|
>|**BELIEFS**|"Take Back What's Ours"<br>"Loyalty Among Thieves"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|2|
>|**FELLOWSHIP**|8|
>|**FORCE**|6|
>|**FRATERNITY**|4|

Space pirates. Also refugees, displaced survivors of [[Database/Places/Earth\|Earth]] and Luna, exiles with chips on their shoulder. Formed into a loose collective `REDACTED`, largely on [[Database/People/The Pirate King\|The Pirate King]]'s initiative.

The Armada is defined by shared identity and broadly accepted practices, rather than ideology. Ships and flotillas are independent entities bound together by voluntary articles and personal loyalty, inspired by the formal pirate codes of old Earth. The King is looked up to as an exemplar of what it means to be a pirate and why being one matters; he's also very aware he would be airlocked immediately if he ever tried to leverage that give a ship not under his command an order they were strongly against.


```base
filters:
  and:
    - file.hasTag("character")
    - Faction.contains(link(this.file.name))
    - '!file.folder.contains("Player Characters/Archive")'
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
        - Faction.contains(link(this.file.name))
        - Faction_Presence.contains(link(this.file.name))
    - '!file.inFolder("Admin/Templates")'
properties:
  note.Faction_Presence:
    displayName: Other Presence
  file.name:
    displayName: Name
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Concept
      - Faction
      - Control
      - Faction_Presence
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.Concept: 218
      note.Faction: 133
      note.Control: 136
      note.Faction_Presence: 251
    rowHeight: medium

```


>[!cards|dataview 4 collapse img-tiny]
>  | Mobile Suits                                                            | Name                                                                                |
> | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
> | ![Admin/Attachments/DagDoll_SQ.webp\|DagDoll_SQ.webp](/img/user/Admin/Attachments/DagDoll_SQ.webp)                 | **[[Database/Mobile Suits/Elegant Sky\|Elegant Sky]]**                           |
> | ![Admin/Attachments/Descolada_SQ.webp\|Descolada_SQ.webp](/img/user/Admin/Attachments/Descolada_SQ.webp)             | **[[Database/Mobile Suits/GS-79 Gundam Descolada\|GS-79 Gundam Descolada]]**     |
> | ![Admin/Attachments/Hoplite_SQ.png\|Hoplite_SQ.png](/img/user/Admin/Attachments/Hoplite_SQ.png)                   | **[[Database/Mobile Suits/UT-F-08 Hoplite\|UT-F-08 Hoplite]]**                   |
> | ![Admin/Attachments/Hoplite_Striker_SQ.webp\|Hoplite_Striker_SQ.webp](/img/user/Admin/Attachments/Hoplite_Striker_SQ.webp) | **[[Database/Mobile Suits/UT-F-08S Hoplite Striker\|UT-F-08S Hoplite Striker]]** |
> 
{ .block-language-dataview}

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/mindful-eyes/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





>[!infobox|embed ws-med]
># Mindful Eyes
>`=embed(link(this.Portrait))`
>
>|||
>|--|--|
>|**PARAGON**|[[Database/People/The Mother And The Father\|The Mother And The Father]]|
>|**BELIEFS**|"Don't Let Your Gift Be Abused"<br>"Survival Through Secrecy"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|6|
>|**FELLOWSHIP**|8|
>|**FORCE**|2|
>|**FRATERNITY**|4|

[[Database/History/The Hive Mind\|Hive mind]] refugees that came together due to war, betrayal, and abuse of their gift. They find comfort and community between themselves with two defacto leaders that are more symbolic than literal. 

Paragons: Mother and Father. Nature and nurture with structure and care.

Fellowship: Care for your fellow Eye. Make sure we stay together through tough times. 

Fealty: Above all else, never let your power be abused. We've been used once before... but not again. 

Fraternity: With wars and conflicts, some still have connections with some of their allies. 

Force: Not the forefront, but not slacked. If ever needed, they rely on small, elite strike teams. Unfortunately, their low numbers mean they need to be very deliberate about when and where to deploy, and they can't answer every threat without giving ground elsewhere.

The Eyes are still processing the idea that the Moondrop and the Ground War all stemmed from an attempt to wipe _them, specifically_, off the face of the solar system; it's one of the biggest things they collectively don't know how to feel about. Being part of the Hive Mind does not mean you don't get to have your own emotions and point of view on things, just that you also have access to everyone else's. This comes mostly in the form of vague emotional connotations and flashes, especially since there's far fewer of them now than there were at the peak of the fungal spread and the connection has weakened proportionately to their numbers.


```base
filters:
  and:
    - file.hasTag("character")
    - Faction.contains(link(this.file.name))
    - '!file.folder.contains("Player Characters/Archive")'
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
        - Faction.contains(link(this.file.name))
        - Faction_Presence.contains(link(this.file.name))
    - '!file.inFolder("Admin/Templates")'
properties:
  note.Faction_Presence:
    displayName: Other Presence
  file.name:
    displayName: Name
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Concept
      - Faction
      - Control
      - Faction_Presence
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.Concept: 218
      note.Faction: 133
      note.Control: 136
      note.Faction_Presence: 251
    rowHeight: medium

```


>[!cards|dataview 4 collapse img-tiny]
>  | Mobile Suits                                                            | Name                                                                |
> | ----------------------------------------------------------------------- | ------------------------------------------------------------------- |
> | ![Admin/Attachments/Hyper_Seeker_CQC_SQ.png\|Hyper_Seeker_CQC_SQ.png](/img/user/Admin/Attachments/Hyper_Seeker_CQC_SQ.png) | **[[Database/Mobile Suits/Hyper Seeker CQC\|Hyper Seeker CQC]]** |
> | ![Admin/Attachments/Theseus_SQ.webp\|Theseus_SQ.webp](/img/user/Admin/Attachments/Theseus_SQ.webp)                 | **[[Database/Mobile Suits/Kerbstomp\|Kerbstomp]]**               |
> 
{ .block-language-dataview}

</div></div>



<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/hive-cult/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





>[!infobox|embed ws-med]
># Hive Cult
>`=embed(link(this.Portrait))`
>
>|||
>|--|--|
>|**PARAGON**|[[Database/People/The Queen\|The Queen]]|
>|**BELIEFS**|"The Queen's Word Is Law"<br>"Their Gift Is Our Destiny"<br>"Never Turn A Blind Eye"|
>
>|SKILL|RANK|
>|--|:--:|
>|**FEALTY**|8|
>|**FELLOWSHIP**|6|
>|**FORCE**|4|
>|**FRATERNITY**|2|


Hive Cultists

They decide they want in on [[Database/History/The Hive Mind\|The Hive Mind]] even though it has been cut off, which leads down a path of kidnapping, experimentation, and cannibalism. This leads to something like a mixture of the hivemind and Superkuru coming into being; it's all the worst aspects of the concept of a Hivemind the OG avoided. 

Don't like [[Database/Factions/Mindful Eyes\|Mindful Eyes]] - think they could do better if only they were given a chance. If they find a member, *take them*. "Never Turn A Blind Eye" includes being ever-vigilant and never missing an opportunity.




```base
filters:
  and:
    - file.hasTag("character")
    - Faction.contains(link(this.file.name))
    - '!file.folder.contains("Player Characters/Archive")'
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
        - Faction.contains(link(this.file.name))
        - Faction_Presence.contains(link(this.file.name))
    - '!file.inFolder("Admin/Templates")'
properties:
  note.Faction_Presence:
    displayName: Other Presence
  file.name:
    displayName: Name
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Concept
      - Faction
      - Control
      - Faction_Presence
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.Concept: 218
      note.Faction: 133
      note.Control: 136
      note.Faction_Presence: 251
    rowHeight: medium

```


>[!cards|dataview 4 collapse img-tiny]
>  | Mobile Suits | Name |
> | ------------ | ---- |
> 
{ .block-language-dataview}

</div></div>


# Independent

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/independent/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">










```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Independent"
    - or:
        - Faction == link("Independent")
        - Faction.isEmpty()
views:
  - type: list
    name: Unaligned NPCs
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    columnSize:
      note.Concept: 212
    separator: " - "
    markers: none
    image: note.Portrait
    imageAspectRatio: 0.7
    cardSize: 240
    indentProperties: false

```


```base
filters:
  and:
    - file.hasTag("location")
    - or:
        - Faction.contains(link(this.file.name))
        - Faction_Presence.contains(link(this.file.name))
    - '!file.inFolder("Admin/Templates")'
properties:
  note.Faction_Presence:
    displayName: Other Presence
  file.name:
    displayName: Name
views:
  - type: table
    name: Associated Locations
    order:
      - file.name
      - Concept
      - Faction
      - Control
      - Faction_Presence
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.Concept: 218
      note.Faction: 133
      note.Control: 136
      note.Faction_Presence: 251
    rowHeight: medium

```


>[!cards|dataview 4 collapse img-tiny]
>  | Mobile Suits                                          | Name                                                              |
> | ----------------------------------------------------- | ----------------------------------------------------------------- |
> | ![Admin/Attachments/Hoplite_SQ.png\|Hoplite_SQ.png](/img/user/Admin/Attachments/Hoplite_SQ.png) | **[[Database/Mobile Suits/UT-F-08 Hoplite\|UT-F-08 Hoplite]]** |
> 
{ .block-language-dataview}

</div></div>
