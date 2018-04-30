import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import TimelineService from '../../Components/Timeline/index';

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
    fetchTimeline: (token, id) => dispatch(fetchTimeline(token, id)),
    select: (token, id, post) => dispatch(selectPost(token, id, post)),
    fetch: (token, id, post) => dispatch(fetchPostDetail(token, id, post))
})

//All posts
export const timelinePending = () => ({
    type: ActionTypes.TIMELINE_PENDING
})

export const timelineSuccess = (data) => ({
    type: ActionTypes.TIMELINE_SUCCESS,
    data: data
})

export const timelineError = (error) => ({
    type: ActionTypes.TIMELINE_ERROR,
    error: error
})

export const fetchTimeline = (token, id) => {
    return dispatch => {
        dispatch(timelinePending())
        axios.get(`${URL}${id}/timeline`, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            console.log('RESPONSE', response);
            dispatch(timelineSuccess(response.data))
        })
        .catch(error => {
            dispatch(timelineError(error))
        });
    }
}

//Detail post
export const selectPost = (post) => ({
    type: ActionTypes.SELECT_POST,
    post
});
 
export const requestPost = (post) => ({
    type: ActionTypes.REQUEST_POST,
    post
});

export const recievePost = (response) => ({
    type: ActionTypes.RECIEVE_POST,
    data: response
});

export const fetchPostDetail = (post) => {
    return function (dispatch) {
        dispatch(requestEvent(event))
        return axios.get(`${URL}${id}/timeline/${post}`, {headers: {'Authorization': `Bearer ${token}`}})
            .then(response => { 
                dispatch(receiveEvent(response.data)), 
                Actions.event(response.data) 
            })
            .catch(error => {
                dispatch(timelineError(error))
            });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineService);
