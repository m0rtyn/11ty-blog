---
title: 'My moving from Obsidian to VSCode'
description: 'A living working paper'
Featured: No
published: false
date: 2023-06-21
Status: In progress
Tags: exocortex, tech
archived: No
content_type: article
isEng: true
cover: ''
---
## Comparison table
✅ — Definetely yes
❌ — No
🌕 — Yes with extension or workaround
🌗 — Partial

| **Feature** | **Notion** | **Obsidian** | **VSCode** |
| --- |:---:|:---:|:---:|
| Move to… | ✅ | 🟡  | ❌ (WIP) |
| Databases / Queries | ✅ | 🟡  | ❌ (WIP) |
| Power text editing | 🌗 | 🟡  | ✅ |
| Instant Markdown rendering | ✅ | ✅ | 🟡  |
| Self hosting (md-files) | ❌ | ✅ | ✅ |
| Alfred Integration | ✅ | ✅ | ❓ |
| Formulas | ✅ | 🟡  | ❌ (WIP) |
| Synced blocks | ✅ | 🌗 | ✅ |
| Customizible shortcuts | ❌ | ✅ | ✅ |
| Graph view | ❌ | ✅ | ✅ |
| Collaboration | ✅ | 🟡  | 🟡  |

### Comparison by Dendron

| Software Name | Extensions | Rich text editing | Local-first | Fast and performant | Open source | Bi-directional links | Outlining | Flexible Hierarchy |
| --- |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Obsidian | ✅ | 🌕 | ✅ | ✅ | ❌ | ✅ | 🌕 | ❌ |
| VSCode | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❓ | ✅ |
| Notion | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |

## Plan to move
- [x] Dendron crash course
- [x] Test extension for csv-based databases
    ❌ No way to link files and update tables on new files
    [https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-data-preview](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-data-preview)
    query languagee not implemented
- [ ] test synchronisation with Notion via Pod-v2
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