import * as Actions from '../Actions/actionTypes';
import { combineReducers } from 'redux';

function selectedFriend(state = 'friend', action) {
    switch (action.type) {
      case Actions.SELECT_FRIEND:
        return action.friend
      default:
        return state
    }
}

function friend( state = {isFetching: false, error: false, friend: {} }, action ) {
    switch (action.type) {
      case Actions.REQUEST_FRIEND:
        return Object.assign({}, state, {
          isFetching: true,
          error: false,
        })
      case Actions.RECEIVE_FRIEND:
        return Object.assign({}, state, {
          isFetching: false,
          error: false,
          friend: action.data,
        })
      case Actions.SERVICE_RESET:
        return Object.assign({}, state, {
          isFetching: false,
          error: false,
          friend: {}
        })
      default:
        return state
    }
}
   
const FriendReducer = combineReducers({
  selected: selectedFriend,
  friend: friend
})
  
export default FriendReducer;