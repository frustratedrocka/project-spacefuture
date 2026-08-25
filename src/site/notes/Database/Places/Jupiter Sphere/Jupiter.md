---
{"dg-publish":true,"permalink":"/database/places/jupiter-sphere/jupiter/","tags":["location"],"dgShowToc":true,"noteIcon":"","updated":"2026-08-24T05:40:10.000-04:00","dg-note-properties":{"tags":["location"],"type":"Planet","Faction":"Jovian Consortium","Control":"Home / Headquarters","Faction_Presence":"Apsis","Portrait":"Admin/Attachments/Jupiter_OPAL_2024-1.png"}}
---


> [!INFOBOX] Jupiter
> # Jupiter
> ![Admin/Attachments/Jupiter_OPAL_2024-1.png\|Jupiter_OPAL_2024-1.png](/img/user/Admin/Attachments/Jupiter_OPAL_2024-1.png)
> 
> | | |
> |--|--|
> |Body|[[Database/Glossary/Planet\|Planet]]|
> |Leadership|[[Database/Factions/Jovian Consortium\|Jovian Consortium]]|
> |Status|Home / Headquarters|
> |Interest|[[Database/Factions/Apsis\|Apsis]]|

Ruler of the heavens, now in fact and not just in name. Governed by the [[Database/Factions/Jovian Consortium\|Jovian Consortium]] Corporate Council.

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

```base
filters:
  and:
    - Origin == "this.File.name"
	- file.hasTag("character")
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