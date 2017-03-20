import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
require('./data/friends.json');

ReactDOM.render(<App/>, document.getElementById('root'));