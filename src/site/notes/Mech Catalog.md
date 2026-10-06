---
{"dg-publish":true,"permalink":"/mech-catalog/","tags":["Tracker","index"],"noteIcon":"","updated":"2026-10-05T20:11:25.153-04:00","dg-note-properties":{"tags":["Tracker","index"]}}
---

> [!cards|dataview 5 notion]
>  | "**"+link(file.link, MECH_Name)+"**"                                      | embed(Portrait)                                                           | "Pilots:<br>"+Known_Users                                                | "Factions:<br>"+Faction                                                                                                                                                                                                                        |
> | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | **[[Admin/Templates/Mech\|Mech]]**                                     | ![Admin/Attachments/GM-II-AEUG_SQ.webp\|GM-II-AEUG_SQ.webp](/img/user/Admin/Attachments/GM-II-AEUG_SQ.webp)             | Pilots:<br>\-                                                            | Factions:<br>\-                                                                                                                                                                                                                                |
> | **[[Database/Mobile Suits/SE-832 Akoni\|Akoni]]**                      | ![Admin/Attachments/Akoni_SQ.webp\|Akoni_SQ.webp](/img/user/Admin/Attachments/Akoni_SQ.webp)                       | Pilots:<br>\-                                                            | Factions:<br>[[Database/Factions/Apsis\|Apsis]]                                                                                                                                                                                             |
> | **[[Database/Mobile Suits/SE-832-E Akoni Command Type\|Akoni-E]]**     | ![Admin/Attachments/Akoni-E_SQ.webp\|Akoni-E_SQ.webp](/img/user/Admin/Attachments/Akoni-E_SQ.webp)                   | Pilots:<br>[[Database/People/Vantrin Almeyer\|Vantrin Almeyer]]       | Factions:<br>[[Database/Factions/Apsis\|Apsis]]                                                                                                                                                                                             |
> | **[[Database/Mobile Suits/TF-8C Hoplite Custom\|Cossack]]**            | ![Admin/Attachments/HopliteCustom_SQ.webp\|HopliteCustom_SQ.webp](/img/user/Admin/Attachments/HopliteCustom_SQ.webp)       | Pilots:<br>[[Player Characters/August Grier\|August Grier]]           | Factions:<br>[[Database/Factions/Rebels\|Rebels]]                                                                                                                                                                                           |
> | **[[Database/Mobile Suits/ES-01 Elegant Sky\|Elegant Sky]]**           | ![Admin/Attachments/DagDoll_SQ.webp\|DagDoll_SQ.webp](/img/user/Admin/Attachments/DagDoll_SQ.webp)                   | Pilots:<br>[[Player Characters/Lane Gable\|Lane Gable]]               | Factions:<br>[[Database/Factions/Rebels\|Rebels]], [[Database/Factions/Armada Ejecta\|Armada Ejecta]]                                                                                                                                    |
> | **[[Database/Mobile Suits/HT-06 Gundam Jiaguwen\|Gundam Jiaguwen]]**   | ![Admin/Attachments/GM-II-AEUG_SQ.webp\|GM-II-AEUG_SQ.webp](/img/user/Admin/Attachments/GM-II-AEUG_SQ.webp)             | Pilots:<br>\-                                                            | Factions:<br>\-                                                                                                                                                                                                                                |
> | **[[Database/Mobile Suits/EW-14 Gundam Makhairos\|Gundam Makhairos]]** | ![Admin/Attachments/GB4_Makhairos.webp\|GB4_Makhairos.webp](/img/user/Admin/Attachments/GB4_Makhairos.webp)             | Pilots:<br>[[Database/People/Anatol Garza\|Anatol Garza]]             | Factions:<br>[[Database/Factions/Rebels\|Rebels]]                                                                                                                                                                                           |
> | **[[Database/Mobile Suits/TF-8S Hoplite Striker\|Hoplite Striker]]**   | ![Admin/Attachments/Hoplite_Striker_SQ.webp\|Hoplite_Striker_SQ.webp](/img/user/Admin/Attachments/Hoplite_Striker_SQ.webp)   | Pilots:<br>\-                                                            | Factions:<br>[[United Terran Sphere Navy\|United Terran Sphere Navy]], [[Database/Factions/Armada Ejecta\|Armada Ejecta]], [[Database/Factions/Jovian Consortium\|Jovian Consortium]]                                                    |
> | **[[Database/Mobile Suits/Hyper Seeker CQC\|Hyper Seeker]]**           | ![Admin/Attachments/Hyper_Seeker_CQC_SQ.webp\|Hyper_Seeker_CQC_SQ.webp](/img/user/Admin/Attachments/Hyper_Seeker_CQC_SQ.webp) | Pilots:<br>[[Player Characters/Vergen Koni\|Vergen Koni]]             | Factions:<br>[[Database/Factions/Rebels\|Rebels]], [[Database/Factions/Mindful Eyes\|Mindful Eyes]]                                                                                                                                      |
> | **[[Database/Mobile Suits/Kerbstomp\|Kerbstomp]]**                     | ![Admin/Attachments/Theseus_SQ.webp\|Theseus_SQ.webp](/img/user/Admin/Attachments/Theseus_SQ.webp)                   | Pilots:<br>[[Player Characters/Menodora Thaliana\|Menodora Thaliana]] | Factions:<br>[[Database/Factions/Rebels\|Rebels]]                                                                                                                                                                                           |
> | **[[Database/Mobile Suits/TF-8 Hoplite\|UT-F-08 Hoplite]]**            | ![Admin/Attachments/Hoplite_SQ.webp\|Hoplite_SQ.webp](/img/user/Admin/Attachments/Hoplite_SQ.webp)                   | Pilots:<br>\-                                                            | Factions:<br>[[United Terran Sphere Navy\|United Terran Sphere Navy]], [[Database/Factions/Jovian Consortium\|Jovian Consortium]], [[Database/Factions/Armada Ejecta\|Armada Ejecta]], [[Database/Factions/Independent\|Independent]] |
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