import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import CommentsService from '../../Components/Pages/Comments/index';
import { connect } from 'react-redux';
import { URL } from '../../Config/index';

const mapStateToProps = (state) => ({
    isLoading: state.comments.isLoading,  
    error: state.comments.error,
    data: state.comments.data,
    token: state.auth.token,
    id: state.auth.id
});

const mapDispatchToProps = (dispatch) => ({
    fetchComments: (token, id, postId) => dispatch(fetchComments(token, id, postId))
})

export const commentsPending = () => ({
    type: ActionTypes.COMMENTS_PENDING
})

export const commentsSuccess = (data) => ({
    type: ActionTypes.COMMENTS_SUCCESS,
    data: data
})

export const commentsError = (error) => ({
    type: ActionTypes.COMMENTS_ERROR,
    error: error
})

export const fetchComments = (token, id, postId) => {
    return dispatch => {
        dispatch(commentsPending())
        axios.get(`${URL}${id}/timeline/post/${postId}`, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            console.log('RESPONSE', response);
            dispatch(commentsSuccess(response.data))
        })
        .catch(error => {
            dispatch(commentsError(error))
        });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsService);
