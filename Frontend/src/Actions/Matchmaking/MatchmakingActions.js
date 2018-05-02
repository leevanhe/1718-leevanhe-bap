import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import MatchmakingService from '../../Components/Pages/Matchmaking/index';

import { connect } from 'react-redux';
import { URL } from '../../Config/index';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    isLoading: state.matchmaking.isLoading,
    error: state.matchmaking.error,
    data: state.matchmaking.data,
    token: state.auth.token,
    id: state.auth.id
})

const mapDispatchToProps = (dispatch) => ({
    fetchMatchmaking: (token, id) => dispatch(fetchMatchmaking(token, id)),
})

export const matchmakingPending = () => ({
    type: ActionTypes.MATCHMAKING_PENDING
})

export const matchmakingSuccess = (data) => ({
    type: ActionTypes.MATCHMAKING_SUCCESS,
    data: data
})

export const matchmakingError = (error) => ({
    type: ActionTypes.MATCHMAKING_ERROR,
    error: error
})

export const fetchMatchmaking = (token, id) => {
    return dispatch => {
        dispatch(matchmakingPending())
        axios.get(`${URL}${id}/matchmaking`, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            console.log('RESPONSE', response);
            dispatch(matchmakingSuccess(response.data))
        })
        .catch(error => {
            dispatch(matchmakingError(error))
        });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchmakingService);