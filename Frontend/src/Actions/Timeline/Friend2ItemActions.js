import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import Friend2ItemService from '../../Components/Pages/Timeline/DetailFriend/friend';
import { connect } from 'react-redux';
import { URL } from '../../Config/index';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    isLoading: state.friend2.isLoading,
    error: state.friend2.error,
    data: state.friend2.data,
    token: state.auth.token,
    id: state.auth.id
})

const dispatchStateToProps = (dispatch) => ({
    fetchFriend2Item: (token, id, friendesId) => dispatch(fetchFriend2Item(token, id, friendesId))
})

export const friend2ItemPending = () => ({
    type: ActionTypes.FRIEND2_ITEM_PENDING
})

export const friend2ItemError = (error) => ({
    type: ActionTypes.FRIEND2_ITEM_ERROR,
    error: error
})

export const friend2ItemSuccess = (data) => ({
    type: ActionTypes.FRIEND2_ITEM_SUCCESS,
    data: data,
})

export const fetchFriend2Item = (token, id, friendesId) => {
    return dispatch => {
        dispatch(friend2ItemPending())
        axios.get(`${URL}${id}/timeline/friend/${friendesId}`,  {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(friend2ItemSuccess(response.data))
        })
        .catch(error => {
            dispatch(friend2ItemError(error))
        })
    }
}

export default connect(mapStateToProps, dispatchStateToProps) (Friend2ItemService)