---
{"dg-publish":true,"permalink":"/faction-hub/","tags":["Tracker"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-08-04T21:37:08.986-04:00","dg-note-properties":{"tags":["Tracker"]}}
---



#### [[Database/Factions/Rebels\|Rebels]]


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/rebels/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 2 | 2 | 2 |

**BELIEFS** 
**PARAGON** `=this.Paragon`

Formed as a direct response to [[Database/Factions/Apsis\|Apsis]] attempting to make an example of multiple dissenting colonies - [[New Cairo\|New Cairo]], [[New Brisbane\|New Brisbane]], [[New Mumbai\|New Mumbai]] - by cutting their food allotments below starvation levels. 

```base
filters:
  and:
    - Faction == "Rebels"
    - file.hasTag("npc", "PC")
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
    markers: none

```



</div></div>


#### [[Database/Factions/Apsis\|Apsis]]


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/apsis/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 4 | 2 | 8 | 6 |

**BELIEFS** We Are The Line Between The System And Starvation,Our Ends Justify Any Means
**PARAGON** [[Database/People/The Man Upstairs\|The Man Upstairs]]

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Apsis"
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


#### [[Database/Factions/Jovians\|Jovians]]


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/jovians/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 4 | 2 | 6 | 8 |

**BELIEFS** Obedience Through Power,Trust The (Long) Process
**PARAGON** [[Database/People/The CEO\|The CEO]]

The corporate council that forms the effective governing body of the [[Database/Places/Jupiter\|Jupiter]] sphere. Whether they hold the leash of [[Database/Factions/Apsis\|Apsis]] or the other way around is becoming a murkier question every day.

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Jovians"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    markers: none
    indentProperties: false
    separator: " - "

```



</div></div>


#### [[Database/Factions/Space Pirates\|Space Pirates]]


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/space-pirates/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 2 | 8 | 6 | 4 |

**BELIEFS** Take Back What's Ours,Loyalty Among Thieves
**PARAGON** [[Database/People/The Pirate King\|The Pirate King]]
```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Space Pirates"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    separator: " - "

```


Refugees, displaced people, exiles with chips on their shoulder

</div></div>


#### [[Database/Factions/Mindful Eyes\|Mindful Eyes]]


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/mindful-eyes/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 6 | 8 | 2 | 4 |

**BELIEFS** Don't Let Your Gift Be Abused
**PARAGON** [[Database/People/The Mother And The Father\|The Mother And The Father]]

The semi-organized portion of what's left of [[Game Creation/The Hive Mind\|The Hive Mind]]. Not all survivors are aligned with the faction, but all are aware of it.

```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Mindful Eyes"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    separator: " - "
    markers: none

```




</div></div>


#### [[Database/Factions/Hive Cult\|Hive Cult]]


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/hive-cult/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





|     Fealty     |     Fellowship     |     Force     |     Fraternity     |
| :------------: | :----------------: | :-----------: | :----------------: |
| 8 | 6 | 4 | 2 |

**BELIEFS** The Queen's Word Is Law,Their Gift Is Our Destiny,Never Turn A Blind Eye
**PARAGON** [[Database/People/The Queen\|The Queen]]
```base
filters:
  and:
    - file.hasTag("npc")
    - Faction == "Hive Cult"
views:
  - type: list
    name: Known Members
    order:
      - file.name
      - Concept
      - Relationship
      - Loyalty
    separator: " - "
    markers: none

```


Hive Cultists

They decide they want in on [[Game Creation/The Hive Mind\|The Hive Mind]] even though it has been cut off, which leads down a path of kidnapping, experimentation, and cannibalism. This leads to something like a mixture of the hivemind and Superkuru coming into being; it's all the worst aspects of the concept of a Hivemind the OG avoided. 

Don't like [[Database/Factions/Mindful Eyes\|Mindful Eyes]] - think they could do better if only they were given a chance. If they find a member, *take them*. "Never Turn A Blind Eye" includes being ever-vigilant and never missing an opportunity.

</div></div>


#### [[Database/Factions/Independent\|Independent]]


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/database/factions/independent/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">










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
