---
{"dg-publish":true,"permalink":"/database/places/theseus/","tags":["location"],"noteIcon":"","updated":"2026-09-03T23:30:03.771-04:00","dg-note-properties":{"tags":["location"],"Type":"Colony","Faction":"Independent","Control":"Under The Radar","Faction_Presence":["Republic Of Mars"],"Portrait":"Admin/Attachments/Stanford.jpg"}}
---

> [!INFOBOX|ws-med] Theseus
> # Theseus
> ![Admin/Attachments/Stanford.jpg\|Stanford.jpg](/img/user/Admin/Attachments/Stanford.jpg)
> 
> | | |
> |--|--|
> |Body|[[Database/Glossary/Colony\|Colony]]|
> |Leadership|[[Database/Factions/Independent\|Independent]]|
> |Status|Under The Radar|
> |Interest|[[Database/Factions/Republic Of Mars\|Republic Of Mars]]|

>[!cite|bg-c-red]  [[Player Characters/Vergen Koni\|Vergen Koni]]
> I think Theseus is under the radar when it comes to [[Database/Factions/Apsis\|Apsis]] selective food deliveries, meaning they haven't got cut yet. 
> 
> Home to more cautious and calm minded folks, but underneath it All hides a strong relationship with [[Database/Factions/Republic Of Mars\|ROM]] knowing how screwed both sides are getting. 
> 
> I think that Theseus Defense Forces were made alongside the rebellion but both worked towards the common goal. 
> 
> The reason why they haven't been picked out is because they're cautious and calm minded. With that being said, it's a breeding ground of paranoia and subtle selfishness, because news of colonies getting cut off has people thinking they might be the next everyday.

> [!cite|bg-c-blue] [[Admin/Player/Mike\|Mike]]
> I think Theseus plays nice in attempt to appease Apsis to keep the food flowing, and its probably a bit too small for Apsis to worry about them enough to keep a close eye on them. I think they play nice enough to not piss off Apsis, and provide just enough value in trade- material mining- that cutting them off has, at least, thus far been deemed 'too much paperwork for now, deal with them later'

```base
filters:
  or:
    - and:
        - '!file.inFolder("Player Characters/Archive")'
        - or:
            - Origin == "Theseus"
            - Assoc.contains("Theseus")
views:
  - type: list
    name: Associated
    order:
      - file.name
    image: Portrait
    imageAspectRatio: 0.65
    cardSize: 160
    indentProperties: false

```