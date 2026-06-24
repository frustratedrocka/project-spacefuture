---
{"dg-publish":true,"permalink":"/home-page/","tags":["gardenEntry"],"updated":"2026-06-23T22:31:02.833-04:00","dg-note-properties":{}}
---

# PROJECT S.P.A.C.E.F.U.T.U.R.E
Welcome to the Project.

```base
properties:
  file.basename:
    displayName: THE RULES
views:
  - type: table
    name: Table
  - type: cards
    name: Rules Links
    filters:
      and:
        - file.inFolder("Rules")
        - file.hasTag("rules")
    groupBy:
      property: file.folder
      direction: ASC
    order:
      - file.basename
    sort: []
    cardSize: 230
    imageFit: contain
    imageAspectRatio: 1
  - type: table
    name: Under Construction
    filters:
      and:
        - file.hasTag("TODO")
    sort:
      - property: file.name
        direction: ASC

```



```base
properties:
  file.basename:
    displayName: THE RULES
views:
  - type: table
    name: Table
  - type: cards
    name: Rules Links
    filters:
      and:
        - file.inFolder("Rules")
        - file.hasTag("rules")
    groupBy:
      property: file.folder
      direction: ASC
    order:
      - file.basename
    sort: []
    cardSize: 230
    imageFit: contain
    imageAspectRatio: 1
  - type: table
    name: Under Construction
    filters:
      and:
        - file.hasTag("TODO")
    sort:
      - property: file.name
        direction: ASC

```

