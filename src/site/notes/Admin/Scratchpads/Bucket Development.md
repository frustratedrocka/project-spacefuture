---
{"dg-publish":true,"permalink":"/admin/scratchpads/bucket-development/","tags":["tracker"],"dgShowInlineTitle":true,"dgShowToc":true,"noteIcon":"","updated":"2026-10-09T01:02:52.619-04:00","dg-note-properties":{"tags":["tracker"],"status":"Open"}}
---




## Summary
> [!blank|embed clean] EVENT LIST
> <table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>EP</span></th><th class="table-view-th"><span>Impact</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><span data-tag-name="dg-ready" aria-hidden="true" style="display: none;"></span>

## Involved

### Characters

> [!cards|dataview 5 clean notion img-tiny]
>  | Portrait | Display |
> | -------- | ------- |
> 
{ .block-language-dataview}


# KNOWN GOOD

## V 2.02
| Display |
| ------- |

{ .block-language-dataview}

## V 2.01
| Display |
| ------- |

{ .block-language-dataview}

## Event Gate

```
WHERE none(
    EXCLUDE,
    (x) => econtains(split(Events_Raw, " "),x)
)

WHERE (
    any(
        INCLUDE_ANY,
        (x) => econtains(split(Events_Raw, " "),x)
    )
    OR (
        length(INCLUDE_ALL) > 0
        AND all(
            INCLUDE_ALL,
            (x) => econtains(split(Events_Raw, " "), x)
        )
    )
)

WHERE (
    !PUBLISHED
    OR none(
        (contains(Events_Raw, "!h"+"!") AND contains(Events_Raw, "!/h"+"!")),
	    (contains(Events_Raw, "!r"+"!") AND contains(Events_Raw, "!/r"+"!")),
        SESH_Done != true
    )
)

WHERE (
	!PUBLISHED
	OR any(
        INCLUDE_ANY,
        (x) => econtains(split(Events_Raw, " ::: ")[0],x)
    )
    OR (
        length(INCLUDE_ALL) > 0
        AND all(
            INCLUDE_ALL,
            (x) => econtains(split(Events_Raw, " ::: ")[0], x)
        )
    )
)
```