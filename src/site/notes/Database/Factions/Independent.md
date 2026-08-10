---
{"dg-publish":true,"permalink":"/database/factions/independent/","tags":["faction"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-08-10T00:08:29.823-04:00","dg-note-properties":{"tags":["faction"],"Faction":"Independent","Beliefs":[[null]],"Paragon":"","Fealty":2,"Fellowship":2,"Force":2,"Fraternity":2,"aliases":null}}
---


|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |




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

