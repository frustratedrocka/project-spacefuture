---
{"dg-publish":true,"permalink":"/admin/scratchpads/qa-events/","tags":["session"],"dgShowToc":true,"noteIcon":"","updated":"2026-10-08T22:50:30.687-04:00","dg-note-properties":{"tags":["session"],"SESH_Done":true,"SESH_Date":null,"SESH_Name":"Event Logic Stress Test","SESH_Next":null,"SESH_Prev":null,"Scenario":null,"Scenario_Index":null,"Logline":null,"Attending":["[[Player Characters/August Grier]]","[[Player Characters/Lane Gable]]","[[Player Characters/Menodora Thaliana]]","[[Player Characters/Vergen Koni]]"],"NPCs":[null],"Locations":[null],"Mechs":[null],"Impact":["#TEST_A Public","#TEST_B Public","#TEST_C Public","#TEST_D Exclude","#TEST_E Exclude","#TEST_F Exclude","#TEST_A #TEST_D Public","#TEST_A #TEST_F Exclude","#TEST_D #TEST_E Public"],"Changelog":["Entity ::: Old ::: New :::"]}}
---




> [!infobox|embed ws-med table wikipedia]
> # Vitals
>> [!blank]
>
>|Scenario|Part|Date|
>|---|:---:|---:|
>|`=this.Scenario`|`=this.Scenario_Index`| `=dateformat(this.SESH_Date, "M-dd-yy")` |
>
> |Previous|Next|
> |:---|---:|
> |`=link(this.SESH_Prev)`|`=link(this.SESH_Next)` |
> |`=this.SESH_Prev.SESH_Name`|\- |
>
>## Present
>> [!cards|4 collapse]
>> 
>> ![Admin/Attachments/Auggie_Zoom.webp\|cover ht-sm](/img/user/Admin/Attachments/Auggie_Zoom.webp)
>>  **[[Player Characters/August Grier\|Auggie]]**
>> 
>> ![Admin/Attachments/Lane_Zoom.webp\|cover ht-sm](/img/user/Admin/Attachments/Lane_Zoom.webp)
>> **[[Player Characters/Lane Gable\|Lane]]**
>> 
>> ![Admin/Attachments/Mena_Zoom.webp\|cover ht-sm](/img/user/Admin/Attachments/Mena_Zoom.webp)
>> **[[Player Characters/Menodora Thaliana\|Mena]]**
>> 
>> ![Admin/Attachments/Verg_Zoom.webp\|cover ht-sm](/img/user/Admin/Attachments/Verg_Zoom.webp)
>> **[[Player Characters/Vergen Koni\|Verg]]**
>
>----
>
>## Appearing
> | NPCs |
>| ---- |
>
{ .block-language-dataview}
> 
>  | Mobile Suits |
> | ------------ |
> 
{ .block-language-dataview}
> 
>  | Locations |
> | --------- |
> 
{ .block-language-dataview}

# QA_EVENTS \- Event Logic Stress Test

 

*`=choice(!contains(this.Logline, "!r"+"!") or (contains(this.Logline, "!r"+"!") and contains(this.Logline, "!/r"+"!") and "__DG_PUBLISH__" != "__DG_PUBLISH__"), this.Logline, "REDACTED")`*

 


# Notes


**TESTING BACKEND STUFF, IGNORE THIS.**

# 
>[!cards|txt-c]
>**Previous**
>`=link(this.SESH_Prev)` \- `=this.SESH_Prev.SESH_Name`
>
>**Scenario**
>`=link(this.Scenario)`
>
>**Next**
>`=link(this.SESH_Next)` \- 

 