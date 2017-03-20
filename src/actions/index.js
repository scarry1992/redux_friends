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

export function fetchRequest(isFetching) {
    return {
        type: types.FETCH_REQUEST,
        isFetching
    }
}

// export function fetchError(error) {
//     return {
//         type: types.FETCH_ERROR,
//         isFetching
//     }
// }

export function fetchSuccess(isFetching, data) {
    return {
        type: types.FETCH_SUCCESS,
        data,
        isFetching
    }
}

export function fetchFriends() {
    return function (dispatch, getState) {
        dispatch(fetchRequest(true));

        return fetch('/assets/friends.json').
            then(responce=>responce.json()).
            then(json => dispatch(fetchSuccess(false, json)));
    }
}