---
{"dg-publish":true,"permalink":"/database/factions/independent/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-10T02:33:39.621-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Independent","Beliefs":[[null]],"Paragon":"","Fealty":2,"Fellowship":2,"Force":2,"Fraternity":2,"aliases":null}}
---







```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Independent"
views:
  - type: list
    name: Unaligned NPCs
    order:
      - file.name
      - Concept
      - Relationship
      - Agenda

```
{ #FactionTable}

