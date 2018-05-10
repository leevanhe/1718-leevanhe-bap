import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import TimelineService from '../../Components/Pages/Timeline/index';

import { connect } from 'react-redux';
import { URL } from '../../Config/index';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    isLoading: state.timeline.isLoading,  
    error: state.timeline.error,
    data: state.timeline.data,
    token: state.auth.token,
    id: state.auth.id
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: (token, id) => dispatch(fetchPosts(token, id)),

    select: (token, id, friend) =>  dispatch(selectFriend(token, id, friend)),
    fetch: (token, id, friend)  =>  dispatch(fetchFriendDetail(token, id, friend)),

})

/*** ALL POSTS ***/
export const postsPending = () => ({
    type: ActionTypes.POSTS_PENDING
})

export const postsSuccess = (data) => ({
    type: ActionTypes.POSTS_SUCCESS,
    data: data
})

export const postsError = (error) => ({
    type: ActionTypes.POSTS_ERROR,
    error: error
})

export const fetchPosts = (token, id) => {
    return dispatch => {
        dispatch(postsPending())
        axios.get(`${URL}${id}/timeline`, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            console.log('RESPONSE', response);
            dispatch(postsSuccess(response.data))
        })
        .catch(error => {
            dispatch(postsError(error))
        });
    }
}

/*** USER DETAIL ***/

export const selectFriend = (friend) => ({
    type: ActionTypes.SELECT_FRIEND,
    friend
});

export const requestFriend = (friend) => ({
    type: ActionTypes.REQUEST_FRIEND,
    friend
});

export const receiveFriend = (response) => ({
    type: ActionTypes.RECEIVE_FRIEND,
    data: response,
});

export const fetchFriendDetail = (token, id, friend) => {
    return function (dispatch) {
      dispatch(requestFriend(token, id, friend))
      axios.get(`${URL}${id}/timeline/${friend}`,  {headers: {'Authorization': `Bearer ${token}`}})
        .then( response => { 
            dispatch(receiveFriend(response.data)), 
            Actions.friend(response.data) 
        },
            error => console.log('An error occurred.', error)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineService);
