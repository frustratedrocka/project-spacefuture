---
{"dg-publish":true,"permalink":"/mech-catalog/","tags":["Tracker","index"],"noteIcon":"","updated":"2026-10-05T23:40:50.651-04:00","dg-note-properties":{"tags":["Tracker","index"]}}
---

> [!cards|dataview notion 5 img-small] FACTION MECHS
>  | Mobile Suits                                                              | Name                                                                      | "Pilots:<br>" + Known_Users                                              |
> | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
> | ![Admin/Attachments/Akoni_SQ.webp\|Akoni_SQ.webp](/img/user/Admin/Attachments/Akoni_SQ.webp)                       | **[[Database/Mobile Suits/SE-832 Akoni\|Akoni]]**                      | Pilots:<br>\-                                                            |
> | ![Admin/Attachments/Akoni-E_SQ.webp\|Akoni-E_SQ.webp](/img/user/Admin/Attachments/Akoni-E_SQ.webp)                   | **[[Database/Mobile Suits/SE-832-E Akoni Command Type\|Akoni-E]]**     | Pilots:<br>[[Database/People/Vantrin Almeyer\|Vantrin Almeyer]]       |
> | ![Admin/Attachments/HopliteCustom_SQ.webp\|HopliteCustom_SQ.webp](/img/user/Admin/Attachments/HopliteCustom_SQ.webp)       | **[[Database/Mobile Suits/TF-8C Hoplite Custom\|Cossack]]**            | Pilots:<br>[[Player Characters/August Grier\|August Grier]]           |
> | ![Admin/Attachments/DagDoll_SQ.webp\|DagDoll_SQ.webp](/img/user/Admin/Attachments/DagDoll_SQ.webp)                   | **[[Database/Mobile Suits/ES-01 Elegant Sky\|Elegant Sky]]**           | Pilots:<br>[[Player Characters/Lane Gable\|Lane Gable]]               |
> | ![Admin/Attachments/Descolada_SQ.webp\|Descolada_SQ.webp](/img/user/Admin/Attachments/Descolada_SQ.webp)               | **[[Database/Mobile Suits/GS-79 Gundam Descolada\|Gundam Descolada]]** | Pilots:<br>[[Database/People/The Pirate King\|The Pirate King]]       |
> | ![Admin/Attachments/GB4_Makhairos.webp\|GB4_Makhairos.webp](/img/user/Admin/Attachments/GB4_Makhairos.webp)             | **[[Database/Mobile Suits/EW-14 Gundam Makhairos\|Gundam Makhairos]]** | Pilots:<br>[[Database/People/Anatol Garza\|Anatol Garza]]             |
> | ![Admin/Attachments/Hoplite_SQ.webp\|Hoplite_SQ.webp](/img/user/Admin/Attachments/Hoplite_SQ.webp)                   | **[[Database/Mobile Suits/TF-8 Hoplite\|Hoplite]]**                    | Pilots:<br>\-                                                            |
> | ![Admin/Attachments/Hoplite_Striker_SQ.webp\|Hoplite_Striker_SQ.webp](/img/user/Admin/Attachments/Hoplite_Striker_SQ.webp)   | **[[Database/Mobile Suits/TF-8S Hoplite Striker\|Hoplite Striker]]**   | Pilots:<br>\-                                                            |
> | ![Admin/Attachments/Hyper_Seeker_CQC_SQ.webp\|Hyper_Seeker_CQC_SQ.webp](/img/user/Admin/Attachments/Hyper_Seeker_CQC_SQ.webp) | **[[Database/Mobile Suits/Hyper Seeker CQC\|Hyper Seeker]]**           | Pilots:<br>[[Player Characters/Vergen Koni\|Vergen Koni]]             |
> | ![Admin/Attachments/Theseus_SQ.webp\|Theseus_SQ.webp](/img/user/Admin/Attachments/Theseus_SQ.webp)                   | **[[Database/Mobile Suits/Kerbstomp\|Kerbstomp]]**                     | Pilots:<br>[[Player Characters/Menodora Thaliana\|Menodora Thaliana]] |
> | ![Admin/Attachments/RebelGruntSuit_SQ.webp\|RebelGruntSuit_SQ.webp](/img/user/Admin/Attachments/RebelGruntSuit_SQ.webp)     | **[[Database/Mobile Suits/AP-92 Rejunot\|Rejunot]]**                   | Pilots:<br>\-                                                            |
> 
{ .block-language-dataview}

```base
filters:
  and:
    - file.hasTag("Mech")
    - file.folder != "Admin/Templates"
    - file.folder != "Database/Mobile Suits/Sample"
properties:
  note.MECH_Concept:
    displayName: Concept
  note.MECH_Trouble:
    displayName: Trouble
  note.MECH_Stunts:
    displayName: Stunts
  note.Known_Users:
    displayName: Known Pilots
  note.Faction:
    displayName: Associated Factions
views:
  - type: cards
    name: Mech Catalog
    order:
      - file.name
      - Known_Users
      - Faction
    image: Portrait
    imageFit: cover
    cardSize: 160
    imageAspectRatio: 0.65

```