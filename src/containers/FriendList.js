import React, {Component} from 'react'
import {FriendList, AddFriendInput} from '../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FriendActions from '../actions'

class FriendListApp extends Component {
    render() {
        const { friendlist: { friendsById }, dispatch } = this.props,
            actions = bindActionCreators(FriendActions, dispatch);

        return (
            <div>
                <AddFriendInput addFriend={actions.addFriend}/>
                <FriendList friends={friendsById} actions={actions}/>
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