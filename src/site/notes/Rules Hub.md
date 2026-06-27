---
{"dg-publish":true,"permalink":"/rules-hub/","tags":[null],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-06-27T10:47:08.487-04:00","dg-note-properties":{"tags":[null]}}
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
    - file.tags.contains("rules")
    - '!file.tags.containsAny("chapter", "srd")'
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
