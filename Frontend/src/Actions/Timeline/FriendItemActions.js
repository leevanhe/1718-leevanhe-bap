import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import FriendItemService from '../../Components/Pages/DetailFriend/index';
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
    fetchFriendItem: (token, id, friendId) => dispatch(fetchFriendItem(token, id, friendId))
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
        console.log('URL',`${URL}${id}/timeline/${friendId}` )
        dispatch(friendItemPending())
        axios.get(`${URL}${id}/timeline/${friendId}`,  {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(friendItemSuccess(response.data))
        })
        .catch(error => {
            dispatch(friendItemError(error))
        })
    }
}

export default connect(mapStateToProps, dispatchStateToProps) (FriendItemService)