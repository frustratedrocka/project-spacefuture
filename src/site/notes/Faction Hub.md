---
{"dg-publish":true,"permalink":"/faction-hub/","tags":["Tracker"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-07-23T23:35:28.920-04:00","dg-note-properties":{"tags":["Tracker"]}}
---



#### `REDACTED`


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** `=this.Paragon`

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Faction 1"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    image: note.Portrait
    imageAspectRatio: 0.65
    cardSize: 200
    indentProperties: false

```



</div></div>


#### `REDACTED`


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** `REDACTED`

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Faction 2"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    columnSize:
      note.Concept: 212
    separator: " - "
    markers: none
    image: note.Portrait
    imageAspectRatio: 0.7
    cardSize: 240
    indentProperties: false

```



</div></div>


#### `REDACTED`


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** `=this.Paragon`

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Faction 3"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty

```



</div></div>


#### `REDACTED`


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** `=this.Paragon`

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Faction 4"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty

```



</div></div>


#### `REDACTED`


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** `=this.Paragon`

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Faction X"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    indentProperties: true

```



</div></div>


#### [[Database/Factions/Independent\|Independent]]


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |




```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Independent"
views:
  - type: list
    name: Unaligned NPCs
    order:
      - file.name
      - Concept
      - Relationship
      - Agenda

```



</div></div>
