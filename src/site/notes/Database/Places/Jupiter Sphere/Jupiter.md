---
{"dg-publish":true,"permalink":"/database/places/jupiter-sphere/jupiter/","tags":["location"],"dgShowToc":true,"noteIcon":"","updated":"2026-08-11T00:16:36.131-04:00","dg-note-properties":{"tags":["location"],"type":"Planet","Faction":"Jovian Consortium","Control":"Wholly Controlled","Faction_Presence":null,"Portrait":"Admin/Attachments/Jupiter_OPAL_2024-1.png"}}
---


> [!INFOBOX] Jupiter
> # Jupiter
> ![Admin/Attachments/Jupiter_OPAL_2024-1.png\|Jupiter_OPAL_2024-1.png](/img/user/Admin/Attachments/Jupiter_OPAL_2024-1.png)
> 
> | | |
> |--|--|
> |Body|Planet|
> |Leadership|[[Database/Factions/Jovian Consortium\|Jovian Consortium]]|
> |Status|Wholly Controlled|
> |Interest||

Ruler of the skies, now in fact and not just in name. Governed by the [[Database/Factions/Jovian Consortium\|Jovian Consortium]] Corporate Council.

The Jupiter Sphere technically includes over 100 moons, most of which are uninhabited. The main four, [[Io\|Io]], [[Europa\|Europa]], [[Callisto\|Callisto]], and [[Ganymede\|Ganymede]] are all inhabited, with resources extracted from [[Europa\|Europa]] forming the backbone of the Sphere's ability to sustain life.

Jupiter's magnetosphere, on top of its many more obvious environmental pressures, makes mining it incredibly dangerous and forces significant design compromises to be able to operate any machinery whatsoever inside it for long.

```base
filters:
  and:
    - Origin == "Jupiter"
	- file.hasTag("npc", "PC")
views:
  - type: list
    name: Characters From Here
    order:
      - file.name
    image: note.Portrait
    imageAspectRatio: 0.65
    cardSize: 200
    indentProperties: false

```