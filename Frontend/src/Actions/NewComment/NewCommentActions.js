import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import NewCommentService from '../../Components/Pages/NewComment/index';
import { connect } from 'react-redux';
import { URL } from '../../Config/index';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => 
({
    isLoading: state.user.isLoading,
    error: state.user.error,
    data: state.user.data,
    token: state.auth.token,
    id: state.auth.id
})

const mapDispatchToProps = (dispatch) => 
({
    fetchUser: (token,id) => dispatch(fetchUser(token, id)),
    submitComment: (token, id, post_id, data) => dispatch(submitComment(token, id, post_id, data))
})

//Fetch userdata
export const userPending = () => ({
    type: ActionTypes.USER_PENDING
})

export const userError = (error) => ({
    type: ActionTypes.USER_ERROR,
    error: error
})

export const userSucces = (data) => ({
    type: ActionTypes.USER_SUCCES,
    data: data
})

export const fetchUser = (token, id) => {
    return dispatch => {
        dispatch(userPending())
        axios.get(`${URL}${id}/timeline/userdata`, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(userSucces(response.data))
        })
        .catch(response => {
            dispatch(userError(response.error))
        });
    }
}

//Submit post
export const submitCommentPending = () => ({
    type: ActionTypes.COMMENTS_SUBMIT_PENDING
})

export const submitCommentSucces = (data) => ({
    type: ActionTypes.COMMENTS_SUBMIT_SUCCESS,
    data: data
})

export const submitCommentError = (error) => ({
    type: ActionTypes.COMMENTS_SUBMIT_ERROR,
    error: error
})

export const submitComment = (token, id, post_id, data) => {
    return dispatch => {
        dispatch(submitPending())
        axios.post(`${URL}${id}/timeline/${post_id}/comment`, data, {headers: {'Content-Type':'application/json','Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(submitSucces(response.data));
            Actions.pop();
        })
        .catch(response => {
            dispatch(submitError(response.error))
        })
    }
}