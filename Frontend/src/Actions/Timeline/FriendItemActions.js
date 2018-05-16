import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import FriendItemService from '../../Components/Pages/Timeline/DetailFriend/index';
import { connect } from 'react-redux';
import { URL } from '../../Config/index';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    isLoading: state.friend.isLoading,
    error: state.friend.error,
    data: state.friend.data,
    token: state.auth.token,
    id: state.auth.id
})

const dispatchStateToProps = (dispatch) => ({
    fetchFriendItem: (token, id, friendId) => dispatch(fetchFriendItem(token, id, friendId)),
    addFriend: (token, id, newFriendId) => dispatch(addFriend(token, id, newFriendId))
})

export const friendItemPending = () => ({
    type: ActionTypes.FRIEND_ITEM_PENDING
})

export const friendItemError = (error) => ({
    type: ActionTypes.FRIEND_ITEM_ERROR,
    error: error
})

export const friendItemSuccess = (data) => ({
    type: ActionTypes.FRIEND_ITEM_SUCCESS,
    data: data,
})

export const fetchFriendItem = (token, id, friendId) => {
    return dispatch => {
        dispatch(friendItemPending())
        axios.get(`${URL}${id}/timeline/friend/${friendId}`,  {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(friendItemSuccess(response.data))
        })
        .catch(error => {
            dispatch(friendItemError(error))
        })
    }
}

export const addFriendPending = () => ({
    type: ActionTypes.ADDFRIEND_PENDING
})

export const addFriendError = (error) => ({
    type: ActionTypes.ADDFRIEND_ERROR,
    error: error
})

export const addFriendSucces = () => ({
    type: ActionTypes.ADDFRIEND_SUCCESS
})

export const addFriend = (token, id, newFriendId) => {
    console.log(`${URL}${id}/timeline/addfriend/${newFriendId}`)
    return dispatch => {
        dispatch(addFriendPending())
        axios.post(`${URL}${id}/timeline/addfriend/${newFriendId}`, null, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(addFriendSucces());
            Actions.timeline();
        })
        .catch(response => {
            dispatch(addFriendError());
        })
    }
}


export default connect(mapStateToProps, dispatchStateToProps) (FriendItemService)