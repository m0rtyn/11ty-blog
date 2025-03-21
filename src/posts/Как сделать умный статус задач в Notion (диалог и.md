---
title: 'Как сделать умный статус задач в Notion (диалог из чата)'
created: June 5, 2021 11:35 PM
description: 'Подписчик спросил как я сделал автоматическое определение статуса проекта в Notion-таблице'
Featured: No
Last Updated: September 18, 2022 1:22 PM
published: true
date: 2021-06-05
Slug: how-to-smart-status-of-notion-project
Status: Done
Tags: exocortex, focus management
_checkForUrl: Yes
archived: No
content_type: article
cover_image: Screenshot_2021-06-05_at_21.55.04.png
isEng: false
---

- Edward
    
    > Мартын здравствуй, мне нужна твоя помощь, как человека знающего, я все бьюсь с формулами в ноушн, пытаясь вывести умный статус проекта
    > 
    > 
    > ![Из доклада «[Моушен — модульная система дел в Notion](https://www.youtube.com/watch?v=DeWI3x3k4xo&list=PLWYGgkgDvA_8q1dTsD0soKIMezctgchVL&index=5)» (2020)](%D0%9A%D0%B0%D0%BA%20%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C%20%D1%83%D0%BC%D0%BD%D1%8B%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D1%82%D1%83%D1%81%20%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%20%D0%B2%20Notion%20(%D0%B4%D0%B8%D0%B0%D0%BB%D0%BE%D0%B3%20%D0%B8%201864c1b8c47a4aea8539a3750ee55c3f/Untitled.png)
    > 
    > Из доклада «[Моушен — модульная система дел в Notion](https://www.youtube.com/watch?v=DeWI3x3k4xo&list=PLWYGgkgDvA_8q1dTsD0soKIMezctgchVL&index=5)» (2020)
    > 
    
    > Объясни пожалуйста как работает твоя формула в данном моменте, так мне будет чуть-чуть проще понять как реализовать свой смарт статус
    > 
- **Martyn**
    
    > О, я сам со смарт-статусом намучался. Сейчас он работает немного иначе, хоть принцип тот же. Могу показать.
    > 
    
    > Та формула работает перебором:
    > 
    
    > Если уровень проекта (колонка *stage* в строке таблицы), который я проставлял вручную, то статус сам становился «⚫️ Concept», что означало, что он ещё не существует на практике.
    > 
    
    > Если предыдущее условие не выполнялось, то проверка шла дальше.
    > 
    
    > Если колонка *Аrchived?* равна true (нажатый чекбокс), то принимался статус «⚪️ Archived», то есть проект не актуален.
    > 
    
    > Далее проверка на колонку *Active?* для статуса активности.
    > 
    
    > В итоге если все предыдущие условия не выполнялись, то проставлялся статус «🟡 Passive»
    > 
    
    > А вот что сейчас:
    `(not prop("Is unarchived?")) ? "⚪️ Archived" : (prop("Active?") ? "🟢 Active" : "🟡 Passive")`
    > 
    
    > формула хитрее, но проще
    > 
    
    > статусa всего три. Те, которые оказались нужны на практике.
    > 
    
    > все проекты по умолчанию заархивированы пока я о них не вспомнил
    > 
    
    > кстати колонка *Active? тожe* «умная»
    > 
    
    > И внезапно, я её сейчас не понял
    > 
    
    > ...
    > 
    
    > Разобрался, хитро
    > 
    
    > Короче активный проект это тот, у которого есть задачи на сегодня. Понятное дело, так проекты могут становиться то активными, то пассивными хоть каждый день. Но такой подход хорошо работает на отсеивание неактуального.
    > 
- Edward
    
    > Огромное тебе спасибо, а то я всю голову сломал и ноги по отстреливать с ним
    > 
- **Martyn**
    
    > Вот формула для колонки *Active?*:
    `contains(prop("Dates"), formatDate(now(), "DD/MM/YYYY"))`
    > 
    
    > она проверяет есть ли строка с сегодняшим числом в колонке со строкой, где перечислены даты всех связанных с проектом задач
    > 
- Edward
    
    > Понял
    > 
- **Martyn**
    
    > Колонка со всеми датами всех связанных задач сделана так:
    > 
    
    ![[/Untitled 1.png]]
    
    > То есть она смотрит на связь таблицы «Games» (Проекты) с таблицей «Results» (Задачи) с перечислением всех значений, которые превращаются из дат в одну строку
    > 
- Edward
    
    > Ого, мега круто
    > 
- **Martyn**
    
    > Как же я тогда заморочился, блин. Зато давно работает и почти не тревожит.
    >