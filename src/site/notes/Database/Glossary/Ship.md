---
{"dg-publish":true,"permalink":"/database/glossary/ship/","tags":["lore","index"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-09-15T12:39:26.960-04:00","dg-note-properties":{"tags":["lore","index"]}}
---

A brief history of space battles:

1. Originally, warships just blast the hell out of each other from maximum range with missiles and cannons.
2. Ship-based shell rounds are commonplace; ship-based slug rounds were banned pretty much immediately when people realized "hey this car-sized piece of metal is going to keep going until it eventually hits something and we are currently building colonies that can't stand up to those impacts. Same reason that even now the Big Gun of choice for mobile suits is the rocket launcher / bazooka instead of a railgun or gauss cannon. "Small" arms like MS machine guns and vulcans bounce off ships and colonies; equivalent to micrometeorites they're built to take.
3. Beam weapons are invented as an ammo-free, long-but-not-unlimited range, Newton-safe alternative for a ship's heaviest firepower
4. [[Database/Glossary/MV field\|MV field]] invented; long range engagements become completely obsolete as combatant ships are forced to close distance to have a chance of actually hitting each other.
5. Strike craft become more and more prominent - bombers try and take out precise weak points in enemy ship's hull, fighters defend their own bombers and take out enemy bombers. Ship main guns now mostly end a fight once the strike craft have decided it.
6. [[Database/Glossary/Mobile Suit\|Mobile Suits]] emerge, trading speed for enormous agility gains, multi-theater viability, and the ability to fulfill the roles of both fighter and bomber within the same battle by changing weaponry. And here we still are.

```base
filters:
  and:
    - file.tags.contains("location")
    - or:
        - Type == link(this.file.name)
        - Type.contains(link(this.file.name))
properties:
  note.file.name:
    displayName: Location
  note.Faction:
    displayName: Faction
  note.Class:
    displayName: Class
views:
  - type: table
    name: Known Examples
    order:
      - file.name
      - Faction
      - Class
    indentProperties: false

```