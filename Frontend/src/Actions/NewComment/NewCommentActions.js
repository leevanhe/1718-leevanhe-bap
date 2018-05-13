import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import NewCommentService from '../../Components/Pages/NewComment/index';
import { connect } from 'react-redux';
import { URL } from '../../Config/index';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => 
({
    isLoading: state.commentItem.isLoading,
    error: state.commentItem.error,
    data: state.commentItem.data,
    token: state.auth.token,
    id: state.auth.id
})

const mapDispatchToProps = (dispatch) => 
({
    fetchUserAndPost: (token, id, postId) => dispatch(fetchUser(token, id, postId)),
    submitComment: (token, id, postId, data) => dispatch(submitComment(token, id, postId, data))
})

//Fetch userdata
export const commentItemPending = () => ({
    type: ActionTypes.COMMENT_ITEM_PENDING
})

export const commentItemError = (error) => ({
    type: ActionTypes.COMMENT_ITEM_ERROR,
    error: error
})

export const commentItemSucces = (data, userdata) => ({
    type: ActionTypes.COMMENT_ITEM_SUCCESS,
    post: data,
    userdata: userdata
})

export const fetchUserAndPost = (token, id, postId) => {
    return dispatch => {
        dispatch(commentItemPending())
        axios.get(`${URL}${id}/timeline/post/${postId}/comment/data`, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(commentItemSucces(response.data.userdata, response.data.post))
        })
        .catch(response => {
            dispatch(commentItemError(response.error))
        });
    }
}

//Submit comment
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

export const submitComment = (token, id, postId, data) => {
    return dispatch => {
        dispatch(submitPending())
        axios.post(`${URL}${id}/timeline/post/${postId}/comment/create`, data, {headers: {'Content-Type':'application/json','Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(submitSucces(response.data));
            Actions.pop();
        })
        .catch(response => {
            dispatch(submitError(response.error))
        })
    }
}