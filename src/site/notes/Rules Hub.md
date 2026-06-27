---
{"dg-publish":true,"permalink":"/rules-hub/","tags":[null],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-06-27T10:39:34.249-04:00","dg-note-properties":{"tags":[null]}}
---

# Rules By Chapter
```base
filter:
  - file.has
filters:
  and:
    - file.hasTag("chapter")
views:
  - type: table
    name: All Rules Pages
    order:
      - file.name
      - file.tags

```

# Rules By Category
```base
filters:
  and:
    - file.hasTag("rules")
    - and:
        - '!file.hasTag("chapter", "SRD")'
views:
  - type: table
    name: Table

```

# Fate SRD
```base
filters:
  and:
    - file.hasTag("SRD")
views:
  - type: table
    name: Table

```
