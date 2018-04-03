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
})

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

export default connect(mapStateToProps, mapDispatchToProps)(TimelineService);
