---
title: 'Как связать Notion с Google Calendar'
Created: August 2, 2021 12:17 AM
description: 'Пошаговый гайд для автоматического получения событий из Гугл-календаря в вашу базу с задачами на Notion.'
Featured: No
Last Updated: September 18, 2022 1:18 PM
published: true
date: 2021-08-28
Slug: how-to-notion-plus-google-calendar
Status: Done
Tags: exocortex, focus management
_checkForUrl: Yes
archived: No
content_type: article
cover_image: CleanShot_2021-08-28_at_20.32.442x.png
isEng: false
---

Интеграция Ноушена с календарём уже несколько месяцев как не привелегия. Этому научились такие no-code сервисы интеграций как: Zapier, IFTTT, Automate.io. Я ждал этого реально два года. Живу с этим новшеством пару месяцев и очень нравится, тем более, что это бесплатно. Делюсь как подключал. 

# Инструкция

1. Я завёл в Notion таблицу (базу данных) для задач, где каждая отдельная «строка» это страничка/документ с привязанными к ней свойствами/колонками
2. Создал для таблицы колонки следующих типов:
    - `eventId (GCal)` — Text
    - `dueDate` — Date
    - `isDone` — Checkbox
    - `isArchived` — Checkbox
    - `untilStart` — Formula
        
        ```python
        round(dateBetween(start(prop("Due date")), now(), "hours") / 24 * 100) / 100
        ```
        
    - `timeRemain` — Formula
        
        ```python
        round(dateBetween(end(prop("Due date")), now(), "hours") / 24 * 100) / 100
        ```
        
3. Зашёл в сервис [Automate.io](http://automate.io)
4. Подключил [Automate.io](http://automate.io) к своему аккаунту в Notion следуя простым шагам
    1. На страничке [https://automate.io/integration/notion](https://automate.io/integration/notion) выбрал интеграцию с G.Calendar (можно вбить в поиске для быстрого доступа)
    2. Выбрал интеграцию «Add Database Item in Notion on a Event Added in Google Calendar» и нажал **Try Now**
        
        ![Untitled](%D0%9A%D0%B0%D0%BA%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%20Notion%20%D1%81%20Google%20Calendar/Untitled.png)
        
    3. Зарегался в сервисе и вошёл в него 🤷‍♂️
    4. Нажал кнопку **Connect** сразу после входа в сервис.
        
        ![Untitled](%D0%9A%D0%B0%D0%BA%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%20Notion%20%D1%81%20Google%20Calendar/Untitled%201.png)
        
    5. Последовал инструкциям сервиса по подключению к Notion
5. Попал на шаг *Configure* или нажал кнопку на главной в шапке **Create Bot**
    
    ![Untitled](%D0%9A%D0%B0%D0%BA%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%20Notion%20%D1%81%20Google%20Calendar/Untitled%202.png)
    
6. В первой колонке «Select trigger app» выбрал *Google Calendar* и тип триггера **Event Added**
    
    ![Untitled](%D0%9A%D0%B0%D0%BA%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%20Notion%20%D1%81%20Google%20Calendar/Untitled%203.png)
    
7. Заполнил вторую колонку
    1. В поле **Database** я выбирал имя таблицы с задачами в *Notion*
        
        ![Untitled](%D0%9A%D0%B0%D0%BA%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%20Notion%20%D1%81%20Google%20Calendar/Untitled%204.png)
        
    2. Поле **Content** и всё, что внутри можно оставил пустыми. Пока не нашёл этому применения.
    3. В поле, которое по умолчанию называлось **Name** (имя строки в таблице) я выбирал параметр **Event Summary** и ещё добавил произвольный опозновательный знак в виде «🗓» чтобы отличать события из календаря от других задач.
        
        ![Result это переименованная колонка Name в моей базе задач](%D0%9A%D0%B0%D0%BA%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%20Notion%20%D1%81%20Google%20Calendar/Untitled%205.png)
        
        Result это переименованная колонка Name в моей базе задач
        
    4. В поле **eventId (GCal)** нажал плюсик и выбрал из подсказок параметр **Еvent id**
        
        ![Untitled](%D0%9A%D0%B0%D0%BA%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%20Notion%20%D1%81%20Google%20Calendar/Untitled%206.png)
        
    5. В поле **dueDate** снова развилка
        1. В поле **Time Zone** я выбрал **UTC** чтобы исправить проблему сдвига даты в таблице. Не уверен, что это лучшее решение, но мне помогло.
        2. В поле **startDate** выбрал параметр **Event begins**
        3. В поле **endDate** выбрал параметр **Event ends**
        
        ![Untitled](%D0%9A%D0%B0%D0%BA%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%20Notion%20%D1%81%20Google%20Calendar/Untitled%207.png)
        
    6. Остальные поля я оставил пустыми чтобы заполнять их в *Notion* по желанию
8. Осталось нажать на кнопку **Savе 🏁**
    
    ![Untitled](%D0%9A%D0%B0%D0%BA%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%20Notion%20%D1%81%20Google%20Calendar/Untitled%208.png)
    

# Как работает

Tеперь как только в моём календаре появляется новое событие, оно создаётся в базе задач. Я отказался от идеи двухсторонней синхронизации событий, потому что это сложно реализуется и рождает много ошибок. Как оказалось оно и не особо нужно.

Односторонней синхронизации мне достаточно, а на случай изменений в событии на стороне календаря я настроил похожую интеграцию (ещё одного бота), но по тригеру «Event Modified».

![Untitled](%D0%9A%D0%B0%D0%BA%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%20Notion%20%D1%81%20Google%20Calendar/Untitled%209.png)

Есть проблема второй интеграции: она будет сыпать ошибки в случаях, когда в Notion-базе по какой-либо причине не оказалось задачи с соответствующим полем **eventId**. Но это в худшем случае отключает бота лишь спустя 20 повторений и требует ручного включения примерно раз в месяц-два.