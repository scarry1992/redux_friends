import React, { Component, PropTypes } from 'react'


class FriendItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    };

    render() {
        return (
            <li>
                <span>{this.props.name}</span>
                <span><input type="button" value='star' onClick={() => this.props.starFriend(this.props.id)}/></span>
                <span><input type="button" value='delete' onClick={() => this.props.deleteFriend(this.props.id)}/></span>
            </li>
        );
    }
}

export class FriendList extends Component {
    static propTypes = {
        friends: PropTypes.object.isRequired
    };

    render() {
        let friends = Object.values(this.props.friends),
            style = this.props.isFetching? {opacity:0.3}: {};

        return (
            <div style={style}>
                <ul>
                    {
                        friends.map((friend) => {
                            return (<FriendItem
                                key={friend.id}
                                id={friend.id}
                                name={friend.name}
                                starred={friend.starred}
                                {...this.props.actions} />);
                        })
                    }
                </ul>
                <GetFriends getFriends={this.props.actions.fetchFriends}/>
            </div>
        );
    }
}

export class AddFriendInput extends Component {
    render() {
        return (
            <input
                type="text"
                //value={this.state.name}
                onChange={this.changeHandler.bind(this)}
                onKeyDown={this.submitHandler.bind(this)}/>
        );
    }
    // constructor(props, context) {
    //     super(props, context);
    //     this.state = {
    //         name: ''
    //     }
    // }

    changeHandler(e) {
        //this.setState({name: e.target.value});
        this.props.onChange(e.target.value);
    }

    submitHandler(e) {
        const name = e.target.value.trim();
        if (e.which === 13) {
            this.props.addFriend(name);
            this.props.onChange('');
            e.target.value = '';
        }
    }
}

class GetFriends extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.getFriends.bind(this)}>get</button>
            </div>
        );
    }
}