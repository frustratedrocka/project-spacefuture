---
{"dg-publish":true,"permalink":"/rules-hub/","tags":[null],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-06-27T10:45:08.975-04:00","dg-note-properties":{"tags":[null]}}
---

# Rules By Chapter
```base
filter:
  - file.has
filters:
  and:
    - file.hasTag("chapter")
views:
  - type: list
    name: Rules ToC
    order:
      - file.name

```
# Rules By Category
```base
filters:
  and:
    - file.hasTag("rules")
    - and:
        - '!file.hasTag("chapter", "SRD")'
views:
  - type: list
    name: Categories
    order:
      - file.name
    sort:
      - property: file.tags
        direction: ASC

```
# Fate SRD
```base
filters:
  and:
    - file.hasTag("SRD")
views:
  - type: list
    name: SRD
    order:
      - file.name
    sort:
      - property: file.tags
        direction: ASC

```
