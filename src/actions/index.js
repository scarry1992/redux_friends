import * as types from '../constants/ActionTypes'

export function addFriend(name) { //что придет
    return {
        type: types.ADD_FRIEND,//тип из констант
        name//данные. есть негласное правило изпользовать payload: name
    }
}

export function deleteFriend(id) {
    return {
        type: types.DELETE_FRIEND,
        id
    }
}

export function starFriend(id) {
    return {
        type: types.STAR_FRIEND,
        id
    }
}