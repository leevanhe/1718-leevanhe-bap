import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import NewPostService from '../../Components/Pages/NewPost/index';

import { connect } from 'react-redux';
import { URL } from '../../Config/index';

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
})

export const userPending = () => 
({
    type: ActionTypes.USER_PENDING
})

export const userError = (error) => 
({
    type: ActionTypes.USER_ERROR,
    error: error
})

export const userSucces = (data) => 
({
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

export default connect(mapStateToProps, mapDispatchToProps) (NewPostService);
