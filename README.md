# Дополнительный урок 01 для спринта 04

- [Swagger документация](https://api.flashcards.andrii.es/docs)
- [Пример готового проекта](https://04-sprint-01-add-lesson-flashcards.vercel.app/)

Задание 1 (пишем get-запрос)
1. Написать get-запрос за decks и протипизировать ответ (fetchDecks). (Параметры указывать и типизировать не надо).
2. Отправить запрос при монтировании компонента DecksList.

Задание 2 (redux flow) - отрисовать колоды, используя redux state
1. Написать action creator (setDecksAC)
2. Написать case в reducer для этого action
3. Задиспатчить action в компоненте DecksList
4. Получить decks из redux state в компоненте DecksList
5. Отрендерить decks, используя компонент DeckItem