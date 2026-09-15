---
{"dg-publish":true,"permalink":"/the-story-so-far/","tags":["index","tracker"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-09-15T17:38:46.194-04:00","dg-note-properties":{"tags":["index","tracker"]}}
---

# Mission 0: Pregame Setup

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/session-notes/scenarios/pregame-setup/#summary" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



## Summary
A *very* extended session zero, handling worldbuilding, character creation, and a tutorial for the game's very non-standard [[Rules/4 Challenges, Conflicts, & Contests#Simultaneous Initiative\|initiative]] rules.

### Impact
```base
filters:
  and:
    - Scenario == this.file.name
    - "!Impact.isEmpty()"
views:
  - type: list
    name: Impact
    order:
      - Impact
```


</div></div>


# Mission 1

<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



## Summary


### Impact
```base
filters:
  and:
    - Scenario == this.file.name
    - "!Impact.isEmpty()"
formulas:
  Impact: Impact.join("; ")
views:
  - type: list
    name: Impact
    order:
      - formula.Impact
    indentProperties: false
    markers: none

```


</div></div>

