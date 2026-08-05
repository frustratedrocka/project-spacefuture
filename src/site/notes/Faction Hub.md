---
{"dg-publish":true,"permalink":"/faction-hub/","tags":["Tracker"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-08-04T20:29:16.962-04:00","dg-note-properties":{"tags":["Tracker"]}}
---



#### [[Database/Factions/Rebels\|Rebels]]


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


#### [[Database/Factions/Apsis\|Apsis]]


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/apsis/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** The Object of Power Is Power,We Are The Line Between The System And Starvation
**PARAGON** [[Database/NPCs/The Man Upstairs\|The Man Upstairs]]

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
