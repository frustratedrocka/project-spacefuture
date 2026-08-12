---
{"dg-publish":true,"permalink":"/database/places/earth/","tags":["location"],"noteIcon":"","updated":"2026-08-12T17:20:26.210-04:00","dg-note-properties":{"tags":["location"],"type":"Planet","Faction":"Apsis","Control":"No Man's Land","Faction_Presence":["Space Pirates","Mindful Eyes","Hive Cult"],"Portrait":"Admin/Attachments/Earth_Post_Kaboom.jpg"}}
---

> [!INFOBOX] Earth
> # Earth
> ![Admin/Attachments/Earth_Post_Kaboom.jpg\|Earth_Post_Kaboom.jpg](/img/user/Admin/Attachments/Earth_Post_Kaboom.jpg)
> 
> | | |
> |--|--|
> |Body|Planet|
> |Leadership|[[Database/Factions/Apsis\|Apsis]]|
> |Status|No Man's Land|
> |Interest|[[Database/Factions/Space Pirates\|Space Pirates]],[[Database/Factions/Mindful Eyes\|Mindful Eyes]],[[Database/Factions/Hive Cult\|Hive Cult]]|

Earth is effectively gone - was the breadbasket, now effectively a non-player in solar politics after [[Database/History/The Ground War\|The Ground War]]. 

In an effort to wipe out [[Database/History/The Hive Mind\|The Hive Mind]], *someone* dropped [[Database/Places/Luna\|Luna]] onto the planet. Result: stopped the spread of the hive, but nobody cared because now there's a cataclysmic solar-system-wide food shortage. 

Many of the displaced survivors who couldn't or wouldn't assimilate elsewhere took to life aboard ships, at the fringes of society, forming the [[Database/Factions/Space Pirates\|Space Pirates]]

```base
filters:
  or:
    - Origin == "Earth"
	- Assoc.contains("Earth")
views:
  - type: list
    name: Associated
    order:
      - file.name
    image: note.Portrait
    imageAspectRatio: 0.65
    cardSize: 160
    indentProperties: false
```