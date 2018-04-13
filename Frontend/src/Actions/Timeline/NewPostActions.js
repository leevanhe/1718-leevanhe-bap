import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import  NewPostService from '../../Components/Timeline/new';
import { connect } from 'react-redux';
import { URL } from '../../Config/index';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({   
    token: state.auth.token,
    id: state.auth.id
});

const mapDispatchToProps = (dispatch) => ({
    submitNewPost: (token, id, data) => dispatch(submitNewPost(token, id, data))
})

export const submitPending = () => ({
    type: ActionTypes.SUBMIT_PENDING
})

export const submitSuccess = (data) => ({
    type: ActionTypes.SUBMIT_SUCCESS,
    data: data
})

export const submitError = (error) => ({
    type: ActionTypes.SUBMIT_ERROR,
    error: error
})

export const submitNewPost = (token, id, data) => {
    return dispatch => {
        dispatch(submitPending())
        axios.post( `${URL}${id}/timeline/create`, data, {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(submitSuccess(response.data));
            Actions.pop()
        })
        .catch(error => {
            dispatch(submitError(error))
        });
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPostService);
