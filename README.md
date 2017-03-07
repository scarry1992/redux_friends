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
