---
title: 'Visual Studio Code и его улучшения для новичков'
Created: February 11, 2022 12:37 PM
Featured: No
Last Updated: September 18, 2022 1:18 PM
Public: Yes
Published: 2022/02/13
Slug: how-to-vscode
Status: Done
Tags: tech
_checkForUrl: Yes
archived: No
content_type: article
isEng: No
---

# Вводная часть

VSCode — Самый популярный редактор кода среди веб-разработчиков. Вы можете использовать его с нуля, однако для опытных программистов его базовых функций недостаточно. Здесь я описал, то как сам докрутил этот редактор под свои потребности.

Я фронтенд-разработчик, но также использую другие диалекты и языки, а также разрабатываю мобильное приложение и делаю простенькие сервера. В этом посте я указал, только то, что использую для разработки на JS.

Так как с недавних пор я ещё и преподаватель, то статья написана с расчётом на начинающих веб-разработчиков.

## История появления редактора

VSCode разрабатывается в Microsoft и унаследовал имя от их тяжеловесного IDE — Visual Studio. Первый релиз был аж в апреле 2015. В 2016 редактор стал доступным для всех желающих.

## Особенности

- Сделан с помощью **Electron.js**, то есть «под капотом» это **HTML + CSS + JS**
- Поддерживает разработку на разных языках: [Java](https://en.wikipedia.org/wiki/Java_(programming_language)), [JavaScript](https://en.wikipedia.org/wiki/JavaScript), [Go](https://en.wikipedia.org/wiki/Go_(programming_language)), [Node.js](https://en.wikipedia.org/wiki/Node.js), [Python,](https://en.wikipedia.org/wiki/Python_(programming_language)) [C++](https://en.wikipedia.org/wiki/C%2B%2B), и так далее (см. [[Расширения]])
- Имеет ОГРОМНОЕ количество настроек, которыми удобно управлять
- Многие фичи скрыты из графического интерфейса, но их можно найти через *Command Pallete* (`cmd/win + shift + P`)
- Возможности редактора могут быть значительно дополнены с помощью расширений (*extensions*)
    - Удобный и быстрый магазин расширений внутри редактора и через браузер
    - Большое разнообразие расширений
    - Расширение может создать на основе API редактора и опубликовать любой пользователь
- Собирает данные и шлёт их в Microsoft
    - можно отключить телеметрию в настройках
- В среднем скорость отклика медленнее чем у нативных конкуретнов*
    - Точно медленнее чем в Sublime и Vim/Emacs
    - Замедляется с количеством расширений и сложностью проекта

## Преимущества

- Быстрее чем типичное приложение на Electron.js
- Сообщество
- Плотная интеграция с Github
- Плотная интеграция с TypeScript
- Расширения
- Open source, хоть и частичный
    - Есть версия освобождённая от кода из Microsoft
- Бесплатно
    - Плату могу требовать только отдельные проприетарные расширения (Quokka.js, Tabnine, Stepsize)
- Низкий порог входа
- Можно настроить под себя почти что угодно

## Почему не VSCode

- Некоторые программисты, которые не хотят тратить время на конфигурацию, выбирают редакторы JetBrains, потому что те специализируются на отдельных языках и сразу включают в себя всё необходимое для комфортной разработки.
- Некоторые программисты предпочитают Vim или Emacs, потому что это наиболее мощные и быстрые редакторы для разработки. Хоть они и имею высокий порог входа.
- Некоторые программисты предпочитают инструменты разработки, к которым привыкли и которые существую дольше чем VSCode
- И так далее

# Настройки

## JSON vs UI

У настроек есть два режима просмотра/управления.

- Стандартный просмотр через UI с категориями и поиском
    
    Использую для поиска по настройкам или для просмотра возможных значений.
    
- Просмотр большого JSON со всеми изменёнными* настройками
    
    Использую во всех остальных случаях и чаще.
    

Забавно, что шоткат для настроек `cmd/win + ,` по умолчанию вызывает именно JSON. А для UI нужно нажать более длинный `cmd/win + shift + ,`. Наверное это исторически так сложилось 🤷‍♂️

## Синхронизация настроек

VSCode сам научился синхронизировать настройки между устройствами. До этого требовалось расширение и пара *Гистов* на Гитхабе.

Кажется тут нечего добавить, потому что синхронизация легко настраивается через меню «Шестерёнка» (требует логина через Github).

![Untitled](Visual%20Studio%20Code%20%D0%B8%20%D0%B5%D0%B3%D0%BE%20%D1%83%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%BA%D0%BE%D0%B2/Untitled.png)

## Сортировка и поиск настроек в JSON

В режиме JSON мы видим только те параметры, которые отличаются от настроек по умолчанию. Если вы открыли VSCode впервые, то JSON будет пустым. Со временем, по мере подстройки редактора, он станет больше — в моём сейчас аж 370 строк.

Чтобы было удобнее ориентироваться я использую автосортировку по алфавиту (с помощью расширения) и пользуюсь поиском по ключевым словам в файле.

VSCode сам линтит этот JSON: предупреждает об ошибках, подсказывает имена настроек и подсвечивает неиспользуемые опции.

## Полезные настройки

Некоторые из моих любимых настроек. Их можно просто скопировать себе в JSON с настройками.

### Доводка редактора

- [ ]  добавил комментарий про эти настройки

```json
"editor.acceptSuggestionOnEnter": "off",
"editor.bracketPairColorization.enabled": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
}
"editor.foldingImportsByDefault": true,
"editor.fontFamily": "'Fira Code', 'Courier New', monospace",
"editor.fontLigatures": true,
"editor.guides.bracketPairs": "active",
"editor.inlineSuggest.enabled": true,
"editor.lineNumbers": "interval",
"editor.linkedEditing": true, // doesn’t work for JSX 
"editor.minimap.enabled": false,
"editor.quickSuggestions": false,
"editor.scrollBeyondLastColumn": 0,
"editor.suggest.preview": true,
"editor.suggestSelection": "recentlyUsedByPrefix",
"editor.unicodeHighlight.ambiguousCharacters": false,
```

### Улучшение JS

- [ ]  добавил комментарий про эти настройки

```json
"javascript.inlayHints.enumMemberValues.enabled": true,
"javascript.inlayHints.functionLikeReturnTypes.enabled": true,
"javascript.inlayHints.parameterNames.enabled": "literals",
"javascript.inlayHints.parameterTypes.enabled": true,
"javascript.inlayHints.propertyDeclarationTypes.enabled": true,
"javascript.inlayHints.variableTypes.enabled": true,
"javascript.updateImportsOnFileMove.enabled": "always",
"js/ts.implicitProjectConfig.checkJs": true,
```

### Прочее

- [ ]  добавил комментарий про эти настройки

```json
// Работа с файлами
"files.autoSave": "onFocusChange",
"files.defaultLanguage": "markdown",

// Доводка терминала
"terminal.integrated.defaultProfile.osx": "zsh",
"terminal.integrated.fontSize": 10,

// Доводка рабочей области
"workbench.colorCustomizations": {
    "tab.activeBackground": "#fff3"
},
"workbench.editor.limit.value": 5,

// ***
"extensions.ignoreRecommendations": true,
```

# Расширения

Я часто ищу новые расширения и отключаю бесполезные. Чтобы накопить несколько десятков любимых расширения мне потребовалось 5 лет. Список ниже будет состоять на 80% из того, что вы найдёте в любой подобной статье.

## Featured

VSCode, помимо хорошего поиска и стандартных тэгов, имеет тэг с отборными расширениями, которые меняются примерно раз в месяц. Рекомендую иногда в него заглядывать чтобы находить крутые штуки.

![Untitled](Visual%20Studio%20Code%20%D0%B8%20%D0%B5%D0%B3%D0%BE%20%D1%83%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%BA%D0%BE%D0%B2/Untitled%201.png)

## Любимые расширения

- [ ]  Заменил описания на свои на русском языке
- [ ]  убрал айдишники расширений
1. Error Lens
    - Id: usernamehw.errorlens
    - Description: Improve highlighting of errors, warnings and other language diagnostics.
2. change-case
    - Id: wmaurer.change-case
    - Description: Quickly change the case (camelCase, CONSTANT_CASE, snake_case, etc) of the current selection or current word
3. Material Icon Theme
    - Id: PKief.material-icon-theme
    - Description: Material Design Icons for Visual Studio Code
4. Project Manager
    - Id: alefragnani.project-manager
    - Description: Easily switch between projects
5. Quit Control for VSCode
    - Id: artdiniz.quitcontrol-vscode
    - Description: Stop mistyping keyboard shortctus that close/quit VSCode unintentionally
6. GitLens — Git supercharged
    - Id: eamodio.gitlens
    - Description: Supercharge the Git capabilities built into Visual Studio Code — Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more
7. New Relic CodeStream: GitHub, GitLab, Bitbucket PRs and Code Review
    - Id: CodeStream.codestream
    - Description: GitHub pull requests, GitLab merge requests, and code reviews in your IDE. Eliminate context-switching. Integrates with New Relic One observability, Bitbucket, Slack, MS Teams, Jira, Trello and more.
8. Markdown All in One
    - Id: yzhang.markdown-all-in-one
    - Description: All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)
    Version: 3.4.0
9. open in browser
    - Id: techer.open-in-browser
    - Description: This allows you to open the current file in your default browser or application.
10. Path Intellisense
    - Id: christian-kohler.path-intellisense
    - Description: Visual Studio Code plugin that autocompletes filenames
11. Prettier - Code formatter
    - Id: esbenp.prettier-vscode
    - Description: Code formatter using prettier
    Version: 9.2.0
    Publisher: Prettier
12. Quokka.js
    - Id: WallabyJs.quokka-vscode
    - Description: JavaScript and TypeScript playground in your editor.
13. REST Client
    - Id: humao.rest-client
    - Description: REST Client for Visual Studio Code
14. Tabnine AI
    - Id: TabNine.tabnine-vscode
    - Description: 👩‍💻🤖 JavaScript, Python, Java, Typescript & all other languages - AI Code completion plugin. Tabnine makes developers more productive by auto-completing their code.
15. Turbo Console Log
    - Id: ChakrounAnas.turbo-console-log
    - Description: Automating the process of writing meaningful log messages.
16. WakaTime
    - Id: WakaTime.vscode-wakatime
    - Description: Metrics, insights, and time tracking automatically generated from your programming activity.
17. Auto Rename Tag
    - Id: formulahendry.auto-rename-tag
    - Description: Auto rename paired HTML/XML tag
18. Better Comments
    - Id: aaron-bond.better-comments
    - Description: Improve your code commenting by annotating with alert, informational, TODOs, and more!
19. gitignore
    - Id: codezombiech.gitignore
    - Description: Lets you pull .gitignore templates from the [https://github.com/github/gitignore](https://github.com/github/gitignore) repository. Language support for .gitignore files.
20. ESLint
    - Id: dbaeumer.vscode-eslint
    - Description: Integrates ESLint JavaScript into VS Code.
21. Babel JavaScript
    - Id: mgmcdermott.vscode-language-babel
    - Description: VSCode syntax highlighting for today's JavaScript
22. Color Highlight
    - Id: naumovs.color-highlight
    - Description: Highlight web colors in your editor
23. [Draw.io](http://draw.io/) Integration
    - Id: hediet.vscode-drawio
    - Description: This unofficial extension integrates [Draw.io](http://draw.io/) into VS Code.
24. EditorConfig for VS Code
    - Id: EditorConfig.EditorConfig
    - Description: EditorConfig Support for Visual Studio Code
25. Git Graph
    - Id: mhutchie.git-graph
    - Description: View a Git Graph of your repository, and perform Git actions from the graph.
    Version: 1.30.0
    Publisher: mhutchie
26. GitHub Pull Requests and Issues
    - Id: GitHub.vscode-pull-request-github
    - Description: Pull Request and Issue Provider for GitHub
27. GitHub Repositories
    - Id: GitHub.remotehub
    - Description: Remotely browse and edit any GitHub repository
28. HTML CSS Support
    - Id: ecmel.vscode-html-css
    - Description: CSS Intellisense for HTML
29. Intelli Refactor
    - Id: ypresto.vscode-intelli-refactor
    - Description: Smartly select range for refactoring under cursor, like IntelliJ / Android Studio.
30. IntelliSense for CSS class names in HTML
    - Id: Zignd.html-css-class-completion
    - Description: CSS class name completion for the HTML class attribute based on the definitions found in your workspace.
31. LeetCode
    - Id: LeetCode.vscode-leetcode
    - Description: Solve LeetCode problems in VS Code
32. Live Server
    - Id: ritwickdey.LiveServer
    - Description: Launch a development local Server with live reload feature for static & dynamic pages
33. Live Share
    - Id: ms-vsliveshare.vsliveshare
    - Description: Real-time collaborative development from the comfort of your favorite tools.
34. npm
    - Id: eg2.vscode-npm-script
    - Description: npm support for VS Code
35. npm Intellisense
    - Id: christian-kohler.npm-intellisense
    - Description: Visual Studio Code plugin that autocompletes npm modules in import statements
36. Sort JSON objects
    - Id: richie5um2.vscode-sort-json
    - Description: Sorts the keys within JSON objects
37. Space Block Jumper
    - Id: jmfirth.vsc-space-block-jumper
    - Description: Jump vertically across space-delimited blocks.