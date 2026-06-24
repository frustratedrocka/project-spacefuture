---
{"dg-publish":true,"permalink":"/home-page/","tags":["gardenEntry"],"updated":"2026-06-23T23:30:27.294-04:00","dg-note-properties":{}}
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
    filters:
      and:
        - file.path.contains("characters")
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
        - file.tags.containsAny("TODO")
    sort:
      - property: file.name
        direction: ASC
  - type: cards
    name: Sample Characters
    filters:
      and:
        - file.path.contains("characters")

```


```base
properties:
  file.basename:
    displayName: THE RULES
views:
  - type: table
    name: Table
    filters:
      and:
        - file.path.contains("characters")
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
        - file.tags.containsAny("TODO")
    sort:
      - property: file.name
        direction: ASC
  - type: cards
    name: Sample Characters
    filters:
      and:
        - file.path.contains("characters")

```



```base
properties:
  file.basename:
    displayName: THE RULES
views:
  - type: table
    name: Table
    filters:
      and:
        - file.path.contains("characters")
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
        - file.tags.containsAny("TODO")
    sort:
      - property: file.name
        direction: ASC
  - type: cards
    name: Sample Characters
    filters:
      and:
        - file.path.contains("characters")

```

