import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import FriendsService from '../../Components/Pages/Timeline/friends';
import { connect } from 'react-redux';
import { URL } from '../../Config/index';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    isLoading: state.allFriends.isLoading,
    error: state.allFriends.error,
    data: state.allFriends.data,
    token: state.auth.token,
    id: state.auth.id
})

const mapDispatchToProps = (dispatch) => 
({
    fetchFriends: (token,id) => dispatch(fetchFriends(token, id)),
})

//Fetch categories
export const friendsPending = () => ({
    type: ActionTypes.FRIENDS_PENDING
})

export const friendsError = (error) => ({
    type: ActionTypes.FRIENDS_ERROR,
    error: error
})

export const friendsSucces = (data) => ({
    type: ActionTypes.FRIENDS_SUCCESS,
    data: data
})

export const fetchFriends = (token, id) => {
    return dispatch => {
        dispatch(friendsPending())
        axios.get(`${URL}${id}/timeline/startups`, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(friendsSucces(response.data))
        })
        .catch(response => {
            dispatch(friendsError(response.error))
        });
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FriendsService);
