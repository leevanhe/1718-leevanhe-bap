import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import NewServiceService from '../../Components/Pages/NewService/index';

import { connect } from 'react-redux';
import { URL } from '../../Config/index';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    isLoading: state.user.isLoading,
    error: state.user.error,
    data: state.user.data,
    token: state.auth.token,
    id: state.auth.id
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (token,id) => dispatch(fetchUser(token, id)),
    submitService: (token, id, data) => dispatch(submitService(token, id, data))
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
            console.log('Response', response);
            dispatch(userSucces(response.data))
        })
        .catch(response => {
            dispatch(userError(response.error))
        });
    }
}

export const submitServicePending = () => ({
    type: ActionTypes.NEWSERVICE_PENDING,
})

export const submitServiceError = (error) => ({
    type: ActionTypes.NEWSERVICE_ERROR,
    error: error,
})

export const submitServiceSucces = (data) => ({
    type: ActionTypes.NEWSERVICE_SUCCES,
    data: data
})

export const submitService = (token, id, data) => {
    return dispatch => {
        dispatch(submitServicePending())
        axios.post(`${URL}${id}/matchmaking/create`, data, {headers: {'Content-Type':'application/json','Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(submitServiceSucces(response.data))
            Actions.pop();
        })
        .catch(response => {
            dispatch(submitServiceError(response.error))
        });
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewServiceService)