import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
//import { createStore, renderDevTools } from '../utils/devTools'
import {FriendListApp} from './FriendList'
import * as reducers from '../reducers'
import { addFriend, deleteFriend, starFriend } from '../actions'

const reducer = combineReducers(reducers);
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <FriendListApp />
                </Provider>
            </div>
        );
    }
}