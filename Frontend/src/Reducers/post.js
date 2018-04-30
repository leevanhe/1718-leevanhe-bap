import * as Actions from '../Actions/actionTypes';
import { combineReducers } from 'redux';

function selectedPost(state = 'post', action) {
    switch (action.type) {
      case Actions.SELECT_POST:
        return action.post
      default:
        return state
    }
}

function post(
    state = {isFetching: false, error: false, post: {}}, action ) {
    switch (action.type) {
      case Actions.REQUEST_POST:
        return Object.assign({}, state, {
          isFetching: true,
          error: false,
        })
      case Actions.RECEIVE_POST:
        return Object.assign({}, state, {
          isFetching: false,
          error: false,
          post: action.data,
        })
      case Actions.SERVICE_RESET:
        return Object.assign({}, state, {
          isFetching: false,
          error: false,
          post: {}
        })
      default:
        return state
    }
}
   
const postReducer = combineReducers({
    post: post,
    selected: selectedPost
})
  
  export default postReducer