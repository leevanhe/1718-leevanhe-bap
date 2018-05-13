import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import NewPostService from '../../Components/Pages/Timeline/New/index';
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
    submitPost: (token, id, data) => dispatch(submitPost(token, id, data))
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
export const submitPending = () => ({
    type: ActionTypes.SUBMIT_PENDING
})

export const submitSucces = (data) => ({
    type: ActionTypes.SUBMIT_SUCCES,
    data: data
})

export const submitError = (error) => ({
    type: ActionTypes.SUBMIT_ERROR,
    error: error
})

export const submitPost = (token, id, data) => {
    return dispatch => {
        dispatch(submitPending())
        axios.post(`${URL}${id}/timeline/create`, data, {headers: {'Content-Type':'application/json','Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(submitSucces(response.data));
            Actions.pop();
        })
        .catch(response => {
            dispatch(submitError(response.error))
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewPostService);
