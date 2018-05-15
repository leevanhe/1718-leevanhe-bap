import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import NewUserService from '../../Components/Pages/Auth/Register/index';
import { connect } from 'react-redux';
import { URL } from '../../Config/index';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    isLoading: state.register.isLoading,
    error: state.register.error,
})

const mapDispatchToProps = (dispatch) => ({
    register: (data) => dispatch(register(data))
})

export const newUserPending = () => ({
    type: ActionTypes.NEWUSER_PENDING
})

export const newUserError = (error) => ({
    type: ActionTypes.NEWUSER_ERROR,
    error: error
})

export const newUserSucces = (data) => ({
    type: ActionTypes.NEWUSER_SUCCES,
    data: data
})

export const register = (data) => {
    return dispatch => {
        dispatch(newUserPending())
        axios.post(`${URL}register`, data, {headers: {'Content-Type':'application/json'}})
        .then( response => {
            dispatch(newUserSucces(response.data));
            Actions.pop();
        })
        .catch( response => {
            dispatch(newUserError(response.error));
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewUserService);
