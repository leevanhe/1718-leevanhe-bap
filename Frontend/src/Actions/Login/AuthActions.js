import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import LoginService from '../../Components/Pages/Auth/Login/index';

import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { URL } from '../../Config/index';

const mapStateToProps = (state) => ({   
    isLoading: state.auth.isLoading,
    error: state.auth.error,
    token: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
    login: (credentials) => dispatch(login(credentials))
})

export const loginPending = () => ({
    type: ActionTypes.LOGGING_IN
})

export const loginSuccess = (data) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    data: data
})

export const loginError = (error) => ({
    type: ActionTypes.LOGIN_ERROR,
    error: error
})

export const login =(credentials) => { 
    return dispatch => {
        dispatch(loginPending());
        axios.post(
            URL + 'auth', 
            credentials, 
            { headers: {'Content-Type': 'application/json'}}
        ) 
        .then(
            response => { 
                if(response.data != 'Invalid password'){
                    dispatch(loginSuccess(response.data)),
                    this.saveCredentials(credentials.username, credentials.password, response.data.token, response.data.startup).then(Actions.timeline()); 
                }
            })
        .catch(error => {
            console.log("ERROR: ", error.response.data.message);
            dispatch(loginError(error.response.data.message))
        });
    }
}
saveCredentials = (username, password, token, startup_id) => {
        let startup = {
            username: username, 
            password: password, 
            token: token, 
            startup_id: startup_id
        } 
        return AsyncStorage.setItem('startup', JSON.stringify(startup)); 
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginService);