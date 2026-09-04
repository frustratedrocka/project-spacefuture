---
{"dg-publish":true,"permalink":"/database/places/colonies/ceres/","tags":["location"],"noteIcon":"","updated":"2026-09-04T08:14:38.749-04:00","dg-note-properties":{"tags":["location"],"Type":"[[Locations Hub|Dwarf Planet]]","Faction":"Apsis","Control":"Home / Headquarters","faction_Presence":[[null]],"Portrait":"Admin/Attachments/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg"}}
---


> [!INFOBOX] Ceres
> # Ceres
> ![Admin/Attachments/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg\|Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg](/img/user/Admin/Attachments/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg)
> 
> | | |
> |--|--|
> |Body|[[Locations Hub\|Dwarf Planet]]|
> |Leadership|[[Database/Factions/Apsis\|Apsis]]|
> |Status|Home / Headquarters|
> |Interest||

Humanity's oldest colony in [[Database/Places/The Belt\|The Belt]]. The decade following [[Database/History/The Ground War\|The Ground War]] has seen it largely taken over by [[Database/Factions/Apsis\|Apsis]]. What was once the farthest into the frontier humanity had ever reached is now the core logistical and manufacturing hub that keeps the calories flowing and the solar system fed. 

A direct assault on Ceres is not in the [[Database/Factions/Rebels\|Rebels]] playbook at this time. Ceres is both:

1. The most densely defended body in the solar system
2. The central nervous system for the entire system's resource distribution network.

Unless and until there is a plan to account for any root-level interruption of the latter that justifies the all-but-guaranteed horrendous losses that stem from the former, command has deemed a strike at Ceres absolutely not worth it.

```base
filters:
  and:
    - or:
        - Origin == "Ceres"
        - Assoc.contains("Ceres")
    - file.hasTag("npc", "PC")
views:
  - type: table
    name: Associated Characters
    order:
      - file.name
      - Origin
      - Assoc
    sort: []
    image: note.Portrait
    imageAspectRatio: 0.65
    cardSize: 200
    indentProperties: false

```