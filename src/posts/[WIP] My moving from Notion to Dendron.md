---
title: '[WIP] My moving from Notion to Dendron'
Created: October 2, 2022 11:26 AM
description: 'A living working paper on the hardest goal of the year'
Featured: No
Last Updated: January 8, 2023 2:23 PM
Public: Yes
Published: 2022/10/02
Status: In progress
Tags: exocortex, tech
_checkForUrl: No
archived: No
content_type: article
isEng: Yes
---

<aside>
ℹ️ This is a living working paper on the hardest goal of the year

</aside>

<aside>
⚠️ I decided to move a main part of my system (Diary) to Obsidian as a intermediate step on the path from Notion to VSCode. I wainting for release of the Advanced Queries feature and continue to learn Dendron to complete this relocation in future.

</aside>

# My comparison table

✅ — Definetely yes

❌ — No

🌕 — Yes with extension or workaround

🌗 — Partial

| Feature | Notion | Obsidian | Dendron (VSCode) |
| --- | --- | --- | --- |
| Move to… | ✅ | 🟡  | ❌ (WIP) |
| Databases / Queries | ✅ | 🟡  | ❌ (WIP) |
| Power text editing | 🌗 | 🟡  | ✅ |
| Instant Markdown rendering | ✅ | ✅ | 🟡  |
| Self hosting
(md-files) | ❌ | ✅ | ✅ |
| Alfred Integration | ✅ | ✅ | ❓ |
| Formulas | ✅ | 🟡  | ❌ (WIP) |
| Synced blocks | ✅ | 🌗 | ✅ |
| Customizible shortcuts | ❌ | ✅ | ✅ |
| Graph view | ❌ | ✅ | ✅ |
| Collaboration | ✅ | 🟡  | 🟡  |

## Comparison by Dendron

[https://wiki.dendron.so/notes/b33d1803-6e4e-418f-a269-c4d4bde967cf/](https://wiki.dendron.so/notes/b33d1803-6e4e-418f-a269-c4d4bde967cf/)

| Software Name | Extensions | Rich text editing | Local-first | Fast and performant | Open source | Bi-directional links | Outlining | Flexible Hierarchy |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Obsidian | ✅ | 🌕 | ✅ | ✅ | ❌ | ✅ | 🌕 | ❌ |
| Dendron | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❓ | ✅ |
| Notion | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Foam | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Roam | ❓ | ❓ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ |

# Plan to move

- [x]  Dendron crash course
- [x]  Test extension for csv-based databases
    
    ❌ No way to link files and update tables on new files
    
    [https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-data-preview](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-data-preview)
    
    query languagee not implemented
    
- [ ]  test synchronisation with Notion via Pod-v2
    
    [https://wiki.dendron.so/notes/cYOPq6mbS7lqeSdCVgjlU/](https://wiki.dendron.so/notes/cYOPq6mbS7lqeSdCVgjlU/)
    
- [ ]  Create custom notes type (rhytms) for quarter notes (marathons)
    - [ ]  Also for years (ultramarathons), 5-years (journeys) and 15-years (paths)
- [ ]  Publish an extension with “Move to” feature from the forked repo
    - [ ]  test extension
    - [ ]  paste link
- [ ]  Figured out how to implement “Logarhythm” database in Dendron
- [ ]  Move current week diary to Dendron
- [ ]  Create custom task types
- [ ]  Test extension for sheets-like formulas in markdown
    - [ ]  paste link