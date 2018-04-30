import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import  NewPostService from '../../Components/Timeline/new';
import { connect } from 'react-redux';
import { URL } from '../../Config/index';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    isLoading: state.userdata.isLoading,
    error: state.userdata.error,
    data: state.userdata.data,   
    token: state.auth.token,
    id: state.auth.id
});

const mapDispatchToProps = (dispatch) => ({
    fetchUserdata: (token, id) => dispatch(fetchUserdata(token, id)),
})

export const userdataPending = () => ({
    type: ActionTypes.USERDATA_PENDING
})

export const userdataSuccess = (data) => ({
    type: ActionTypes.USERDATA_SUCCESS,
    data: data
})

export const userdataError = (error) => ({
    type: ActionTypes.USERDATA_ERROR,
    error: error
})

export const fetchUserdata = (token, id) => {
    return dispatch => {
        dispatch(userdataPending())
        axios.get(`${URL}${id}/timeline/userdata`, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(userdataSuccess(response.data))
        })
        .catch(error => {
            dispatch(userdataError(error))
        });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostService);
