import React, {Component} from 'react'
import {FriendList, AddFriendInput} from '../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FriendActions from '../actions'
import pickBy from 'lodash/pickBy'

class FriendListApp extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {find: ''};
    // }

    state = {find: ''};//лучше объявлять так

    onChangeHanler = (value) => {//не надо тогда биндить
        this.setState({find: value});
    };

    render() {
        let { friendlist: { isFetching, friendsById }, dispatch } = this.props,
            actions = bindActionCreators(FriendActions, dispatch);

        friendsById = pickBy(friendsById, friend => friend.name.indexOf(this.state.find) !== -1);


        return (
            <div>
                <AddFriendInput addFriend={actions.addFriend} onChange={this.onChangeHanler}/>
                <FriendList friends={friendsById} actions={actions} isFetching={isFetching}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        friendlist: state.friendlist
    }
}

FriendListApp = connect(mapStateToProps)(FriendListApp);

export {FriendListApp}