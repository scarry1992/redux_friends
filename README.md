# redux friends

- Опишем первоначальную структуру Store (initialState в src/reducers/friendlist.js)
- Продумаем действия(экшены) и опишем их в константах - это будет type для будующих actions
- Опишем экшены пример в src/actions/index.js
- Опишем функцию-редьюсер(принимает state, action), в которой разруливается по типу экшена, что будет происходить с Store.
  Обязательно возвращать новое состояние, а не модифицировать старое.(src/reducers/friendlist.js).
  Если редьюсеров несколько нужно их скомбинить с помощью combineReducers(src/containers/App.js).
- Создаем Store(src/containers/App.js) с помощью createStore(reducer, ...midleware)
- Оборачиваем корень нашего приложения в Provider(src/containers/App.js) для передачи store как props
- В контейнере экшены оборачиваем в dispatch с помощью bindActionCreators(src/containers/FriendList.js:20)
- Опишем как наш state всего приложения будет приобразовываться в props для контейнера с помощью функции (src/containers/FriendList.js:34)
- Опишем как наш dispatch всего приложения будет приобразовываться в props для контейнера с помощью функции (*не реализованно*)
- Коннектим наш контейнер к store с помощью connect(mapStateToProps, mapDispatchToProps)(src/containers/FriendList.js:40)
- В главном контейнере рендерим компоненты и в них пробрасываем нужные данные из store (src/containers/FriendList.js)

Асинхронность(redux-thunk):
- Опишем максимально общим методом виды экшенов. Должно быть не менее 3х. (/constants)
    - Начало запроса с хранением флага в state.
    - Успешное завершение запроса с данными.
    - Не успешное завершение запроса с ошибкой
- Опишем для вышеперечисленных генераторов экшенов редьюсеры.(src/reducers/friendlist.js:57)
- Опишем генераторы экшенов (/actions/index.js:24)
- Опишем генератор экшенов в синтаксисе redux-thunk, который будет вызывать другие генераторы экшенов (/actions/index.js:46)
- С помощью applyMiddleware применим redux-thunk к нашему Store при создании (src/containers/App.js:12)
- Редактируем компоненты и контейнеры для работы с новыми параметрами, генераторами экшенов и флагами.

Middleware (logger):
Middleware работает по принципу оборачивания функции dispatch в новую функцию с расширенными возможностями.
Для этого она принимает функцию next(он же dispatch) и возвращается функция, в которую передается action, в которой и происходит
 конечная модификация чего-либо. (src/enhancers/logger.js)