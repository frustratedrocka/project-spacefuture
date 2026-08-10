---
{"dg-publish":true,"permalink":"/database/places/colonies/ceres/","tags":["location"],"noteIcon":"","updated":"2026-08-10T16:22:53.647-04:00","dg-note-properties":{"tags":["location"],"type":"Dwarf Planet","faction_Control":"Apsis","control":"Headquarters","faction_Presence":[[null]],"Portrait":"Admin/Attachments/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg"}}
---


> [!INFOBOX] Ceres
> # Ceres
> ![Admin/Attachments/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg\|Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg](/img/user/Admin/Attachments/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg)
> 
> | | |
> |--|--|
> |Body|Dwarf Planet|
> |Leadership|[[Database/Factions/Apsis\|Apsis]]|
> |Status|Headquarters|
> |Interest||

Humanity's oldest colony in [[Database/Places/The Belt\|The Belt]]. The decade following [[Database/History/The Ground War\|The Ground War]] has seen it largely taken over by [[Database/Factions/Apsis\|Apsis]]. What was once the farthest into the frontier humanity had ever reached is now the core logistical and manufacturing hub that keeps the solar system fed. 

```base
filters:
  and:
    - Origin == ""
	- file.hasTag("npc", "PC")
views:
  - type: list
    name: 
    order:
      - file.name
    image: note.Portrait
    imageAspectRatio: 0.65
    cardSize: 200
    indentProperties: false

```