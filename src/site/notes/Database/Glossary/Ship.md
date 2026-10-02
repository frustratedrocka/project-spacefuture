---
{"dg-publish":true,"permalink":"/database/glossary/ship/","tags":["lore","index"],"dgShowInlineTitle":true,"noteIcon":"","updated":"2026-09-19T12:59:53.601-04:00","dg-note-properties":{"tags":["lore","index"]}}
---

## A brief history of space battles

1. Originally, warships just blast the hell out of each other from maximum range with missiles and cannons.
2. Ship-based shell rounds are commonplace; ship-based slug rounds were banned pretty much immediately when people realized "hey this car-sized piece of metal is going to keep going until it eventually hits something and we are currently building colonies that can't stand up to those impacts. Same reason that even now the Big Gun of choice for mobile suits is the rocket launcher / bazooka instead of a railgun or gauss cannon. "Small" arms like MS machine guns and vulcans bounce off ships and colonies; equivalent to micrometeorites they're built to take.
3. Beam weapons are invented as an ammo-free, long-but-not-unlimited range, Newton-safe alternative for a ship's heaviest firepower
4. [[Database/Glossary/MV field\|MV field]] invented; long range engagements become completely obsolete as combatant ships are forced to close distance to have a chance of actually hitting each other.
5. Strike craft become more and more prominent - bombers try and take out precise weak points in enemy ship's hull, fighters defend their own bombers and take out enemy bombers. Ship main guns now mostly end a fight once the strike craft have decided it.
6. [[Database/Glossary/Mobile Suit\|Mobile Suits]] emerge, trading speed for enormous agility gains, multi-theater viability, and the ability to fulfill the roles of both fighter and bomber within the same battle by changing weaponry. And here we still are.

## Getting around
**There is no such thing as general shipboard artificial gravity.** So, even in civilian clothes, there's a few things that you just plain do not leave your quarters without, and they conveniently all live on your belt. 

Electric mag-boots are standard; you turn them on via a belt switch when you want to stand in one spot or walk and off when you need to kick off something and float free. 

[[Database/Glossary/Lift Grip\|Lift Grip]] system handles movement through most hallways. This is physically tethered to your belt and slots into the wall to pull you around the ship.

And, speaking of belt tethers, there is a reasonably high-powered emergency mag grapple, in case you find yourself floating free. Which is likeliest to happen in the hangar, but can occur just about anywhere if you get spun *just* the wrong way. 

If you're sitting, lying down, or otherwise attached to furniture, you are literally physically attached to it by magnets, clips, or straps.

>[!note] On The Other Hand...
>This is not *that* hard science fiction, and zero g *sucks*. Gundam itself is, generously, less than consistent about how it actually presents spaceship gravity, up to and including at least one instance of a character taking a bubble bath while on a ship in flight. So feel free to mostly treat this as flavor except when the problems of zero gravity are dramatically relevant.

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