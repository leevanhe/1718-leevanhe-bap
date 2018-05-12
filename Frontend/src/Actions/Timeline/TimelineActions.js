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
})

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

export default connect(mapStateToProps, mapDispatchToProps)(TimelineService);