import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import MatchmakingItemService from '../../Components/Pages/DetailMatchmaking/index';
import { connect } from 'react-redux';
import { URL } from '../../Config/index';

const mapStateToProps = (state) => ({
    isLoading: state.matchmakingItem.isLoading,
    error: state.matchmakingItem.error,
    data: state.matchmakingItem.data,
    token: state.auth.token,
    id: state.auth.id
})

const dispatchStateToProps = (dispatch) => ({
    fetchMatchmakingItem: (token, id, matchmakingId) => dispatch(fetchMatchmakingItem(token, id, matchmakingId))
})

export const matchmakingItemPending = () => ({
    type: ActionTypes.MATCHMAKING_ITEM_PENDING
})

export const matchmakingItemError = (error) => ({
    type: ActionTypes.MATCHMAKING_ITEM_ERROR,
    error: error
})

export const matchmakingItemSuccess = (data) => ({
    type: ActionTypes.MATCHMAKING_ITEM_SUCCESS,
    data: data
})

export const fetchMatchmakingItem = (token, id, matchmakingId) => {
    return dispatch => {
        dispatch(matchmakingItemPending())
        axios.get(`${URL}${id}/matchmaking/${matchmakingId}`,  {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(matchmakingItemSuccess(response.data))
        })
        .catch (error => {
            dispatch(matchmakingItemError(error))
        })
    }
}

export default connect (mapStateToProps, dispatchStateToProps) (MatchmakingItemService);