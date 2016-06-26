Moov
====

Приложение необходимое в путешествиях. 

Релаизована небольшая часть - остлеживание трека и запрос информации об 
интересных местах по пути, с сервера. Сервер написан на **Go** только для 
тестовых данных.

[moov-server](https://github.com/pik4ez/moov-server)

Приложение написано на **React Native**

- Приложение отслеживает маршрут путешествия / прогулки
- Отправляет на сервер текущее положение
- В ответ получает объекты потенциально интересные для посещения
- Расставляет точки на карте для возможности выбрать интересное место 
  поблизости


Как запустить
-------------

- Установить [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
  под свою мобильную и desktop платформу
- Понадобятся [npm](https://www.npmjs.com/), [react-native-maps](https://www.npmjs.com/package/react-native-maps), [rnpm](https://www.npmjs.com/package/rnpm)
- Android SDK или XCode на MAC OS

- В корне проекта запустить `npm install`
- Для IOS запутить эмулятор с проектом `react-native run-ios`
- Для Android `react-native run-android`

