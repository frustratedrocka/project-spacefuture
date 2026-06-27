---
{"dg-publish":true,"permalink":"/fiction/faction-intel/","tags":["Tracker"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-06-26T19:27:34.000-04:00","dg-note-properties":{"tags":["Tracker"]}}
---

**SHAKEUP** At the end of each scenario, each faction's most insubordinate character rolls their highest approach and counts hits. 0 or less: Disciplined; forced to prove loyalty or leave the faction. 1-2 nothing happens. 3-4 influence the faction's direction or next move. 5+ oust a key member.

#### 


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** 

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Faction 1"
views:
  - type: table
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    image: note.Portrait
    imageAspectRatio: 1
    cardSize: 160

```



</div></div>


#### 

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** 

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Faction 2"
views:
  - type: table
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty

```



</div></div>


#### 


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** 

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Faction 3"
views:
  - type: table
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty

```



</div></div>


#### 


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** 

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Faction 4"
views:
  - type: table
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty

```



</div></div>


#### 


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** 

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Faction X"
views:
  - type: table
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty

```



</div></div>


#### [[Database/Factions/Independent\|Independent]]


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** 

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Independent"
views:
  - type: table
    name: Unaligned NPCs
    order:
      - file.name
      - Concept
      - Relationship
      - Agenda

```



</div></div>
