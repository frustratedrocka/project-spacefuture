---
{"dg-publish":true,"permalink":"/admin/site-tech/","tags":[null],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-10-26T11:30:06.079-04:00","dg-note-properties":{"tags":[null]}}
---

I've been using Obsidian as the primary note-taking hub for every campaign I've run since I discovered it existed, and have gone through a few different templates and workflows. For this campaign, I wanted to actually commit to something I've wanted for a while but was never able to figure out: publishing a curated player-facing view of the vault to serve as a world database and quick reference for "Who was this guy? What happened last time we saw them? How'd we end up banned from Argo, again?"

This has been a lot of setup to make a system that works with my own brain, with significant inspiration drawn from other people's vaults - most notably [this one](https://www.reddit.com/r/ObsidianMD/comments/1pgxr56/my\_campaigns\_obsidian/#lightbox) for the session template, and [this one](https://icewind.quest/) plus Nicole Van Der Hoeven's Open Loops setup for handling of event tagging, I got this flow working.
  
# Architecture

**Sessions** are the sole source for history. This includes onscreen events, discovered intelligence, rumors, onscreen appearances, etc. Queries referencing session properties check the SESH_Done property. If the query is executing on the published site and SESH_Done = true, the session's properties are allowed to be read by other queries; otherwise, they're ignored. Meanwhile, the private vault ignores the SESH_Done flag entirely and always renders everything. 

**Entities** are the sole source for current information about characters, locations, significant objects, mobile suits, and anything else that should be considered a Discrete Thing.

**Aggregators** pull information from sessions, entities, or both as needed to build whatever information view I need. For example, each Faction page has a table that takes every NPC whose faction list contains a link to that page, then displays their High Concept, Relationship (to the PCs), and Loyalty (to their faction). It then does something similar for locations - High Concept, controlling faction, a brief description of the status of that control, and the list of other factions with meaningful presence or influence. Meanwhile, Scenario pages pull the Impact property from all sessions that link to that scenario in the appropriate property, filter out certain tags that are irrelevant to the recap, then list every entity named in the remaining events in separate tables or card displays. 

## How It Works
The home page is the main dashboard. 

Every Entity page has a Data section containing, at minimum, Appearances (sessions where the entity is listed in NPCs, Mechs, or Locations properties), Events (Session Impact property bullets containing a link to the entity page), and Changelog (Session Changelog property bullets containing a link to the entity page). Other aggregator pages, in turn, query the Entity properties.

Meanwhile, Scenario pages work how I've described above. Thread pages are a little more complicated and instead make use of tags placed inside the Impact bullets, e.g. #RAT_HUNT. The front page's Story So Far normally displays all Impact bullets for the current scenario, minus #DECLARED and #HISTORY tagged events. However, if we're at the start of a new scenario, it instead displays the Impact bullets for the previous scenario. In both cases, I can also manually specify tags to include that would normally fall outside the scenario gates, so if my players know they're following up on a long-running thread, they have that thread's full history front and center on the landing page.

So, an event on Session 02 that goes "[[Player Characters/Vergen Koni\|Verg]] and [[Player Characters/Menodora Thaliana\|Mena]] get in a screaming match over what to do about [[Database/People/Delbrau Enger\|Delbrau Enger]] #RAT_HUNT" gets listed on Verg's, Mena's, and Delbrau's pages, as well as in the scenario recap, story so far, and #RAT_HUNT thread pages. Meanwhile " #DECLARED [[Database/Things/Fishbone\|Fishbone]] has a clean room near the hangar for work on delicate components" appears on the Fishbone's page without cluttering up the recaps. 

## Workflow / how it comes together:

1. Do my prep in session notes. Free markdown using my adaptation of the Lazy GM checklist. Entities that I'm very confident will show up get listed in the session's properties; otherwise, they remain as normal outlinks.
2. If an entity needs to exist as more than a name and doesn't already, create entities from session note outlinks as needed, apply the appropriate templates (easy - Insert Template -> NPC), and stat them out in as much or as little detail as is required. 
3. Run the session
4. Post-session record keeping: 
    1. Record impact bullets in session properties, including hidden ones that the players don't know about or don't yet know the significance of. This is an easy syntax: "Public text ::: private text ::: in-universe date." It's flexible enough that I can omit private text and it'll recognize field 2 as a date, omit the date and have public and private text only, omit both, or wrap the whole thing in  or `REDACTED` tags as needed. I'm intentionally very selective about what actually gets listed here - the goal is maximum signal to noise ratio.
    2. Update NPC, Location, and Mobile Suit appearance list in the session properties
    3. Record mechanical changes in session properties
    4. Where there were mechanical changes, update the appropriate entity sheet with the change so it remains current. This is also easy: "[[Entity\|Entity]] ::: Old Stat ::: New Stat". This is admittedly a bit of a nuisance, and currentlythe closest thing to breaking my no mirroring ever rule. I'm open to any suggestions you all have to streamline this that don't require a full rebuild of the data architecture.
    5. Paste in my players' live-typed session notes, link them up, and clarify misunderstandings where it's appropriate and where the details matter.
5. Create the page for the next session and go back to step 1.

## Restrictions
There were a few hard design restrictions:

1. **No manual mirroring. Ever.** Maintaining one gm-facing vault and one player-facing vault is not feasible and therefore not an acceptable solution.
2. Multiple information gates. Published and unpublished notes isn't good enough; I needed to be able to tell the publisher to omit certain information inline inside a note. This allows for GM Notes on NPCs, locations, etc. without creating the need to mirror a player-facing NPC note and a GM-facing NPC note, thereby violating rule 1. 
3. Every important piece of information has exactly one home, and propagates outwards from that home. Having to update the same fact in two different places violates rule 1. 
4. It's my working GM vault first, my player's quick reference close second. Being a public-facing "catch up on the story of our campaign!" actual-play record is barely a priority.

## Backend
None of the layout here is possible without the ITS Theme. The vast majority of the visual design comes from screwing around with infoboxes, cards, blanks, and embed / image adjustments.

The automation is powered by dataview, since Digital Garden didn't, at the time of creation, support many of the advanced Bases queries I'd have needed to pull this off (e.g. formulas). AFAIK most of those features are still pending support, so I'm sticking with the older-but-functioning method.

Calendar / timeline powered by the Fancy A Story timeline CSS snippet.

## Redaction & Information Control
Digital Garden's regex / custom filters system doesn't handle all filtering, but it does buy me a lot. !`r`! !`/r`! tag pairs render anything between them as `REDACTED`; !`h`! !`/h`! tag pairs are commented out entirely and simply don't exist at all as far as the public site is concerned.

Critically, it also gives me the ability to set a flag inside my dataview queries, whether they're embedded in the page or used as an argument when calling a script: `"__DG_PUBLISH__" = "__DG_PUBLISH__"`. Each of my dataview queries uses that check as, essentially, "is this query being rendered on the public site (true) or in the private vault (false)?"

Sometimes, even if an entity's own page has something tagged `REDACTED` (e.g. their origin), a lookup table might expose them by accident (e.g. if "Characters From Theseus" contains a `REDACTED` entry, and only one NPC has their origin `REDACTED`, it's not hard to put two and two together). So as a safety measure, those queries are written to transform, *then* evaluate. If that same character's origin is already replaced with `REDACTED`, then obviously that property no longer matches the query. 

Meanwhile, the event viewer allows multiple tag gates through INCLUDE_ANY, INCLUDE_ALL, and EXCLUDE. The last of which is used most often right now, since it handles things like "I need to know that this got #DECLARED into existence during the game, and the relevant entity page needs to know that, but the scenario page doesn't need to know that."

**GEN AI DISCLOSURE**: The working vault contains 2 AI-generated plugins (redaction marker handling in read mode & a bug fix to let Obsidian auto-update backlinks inside string properties) and two AI-generated dataviewJS scripts (the calendar, as well as a general wrapper for dataview queries to fix link handling during the publication process). The public-facing garden contains multiple AI-generated JS and CSS fixes for compatibility with the ITS theme, mostly centered around fixing Digital Garden's handling of ITS's more advanced callouts (by precision-zapping the many empty paragraphs it creates). 