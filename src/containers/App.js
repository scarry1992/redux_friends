import React, { Component } from 'react'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
//import { createStore, renderDevTools } from '../utils/devTools'
import {FriendListApp} from './FriendList'
import * as reducers from '../reducers'
import * as actions from '../actions'
import logger from '../enhancers/logger'

const reducer = combineReducers(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));

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

//store.dispatch(actions.fetchFriends());