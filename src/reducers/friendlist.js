import * as types from '../constants/ActionTypes'
import omit from 'lodash/omit'
import assign from 'lodash/assign'
import mapValues from 'lodash/mapValues'

const initialState = {
    friends: [1,2,3],
    friendsById: {
        1: {
            id:1,
            name: 'Dima Vladov'
        },
        2: {
            id: 2,
            name: 'Mihail Stasov'
        },
        3: {
            id: 3,
            name: 'Vladimir Dmitriev'
        }
    }
};

export default function friends(state = initialState, action) {
    switch (action.type) {
        case types.ADD_FRIEND: {
            const newId = state.friends[state.friends.length] + 1;

            return {
                friends: state.friends.concat(newId),
                friendsById: {
                    ...state.friendsById,
                    [newId]: {
                        id: newId,
                        name: action.name
                    }
                }
            }
        }
        case types.DELETE_FRIEND: {
            return {
                ...state,
                friends: state.friends.filter(id => id !== action.id),
                friendsById: omit(state.friendsById, action.id)
            }
        }
        case types.STAR_FRIEND: {
            return {
                ...state,
                friendsById: mapValues(state.friendsById, friend => {
                    return friend.id === action.id?
                        assign({}, friend, {starred: !friend.starred}): friend
                })
            }
        }
        default: {
            return state;
        }
    }
}