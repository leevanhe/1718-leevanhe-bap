import * as ActionTypes from '../actionTypes';
import axios from 'axios';
import CategoryService from '../../Components/Pages/Matchmaking/category';
import { connect } from 'react-redux';
import { URL } from '../../Config/index';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    isLoading: state.category.isLoading,
    error: state.category.error,
    data: state.category.data,
    token: state.auth.token,
    id: state.auth.id
})

const mapDispatchToProps = (dispatch) => 
({
    fetchCategories: (token,id) => dispatch(fetchCategories(token, id)),
    submitCategory: (token, id, categoryId) => dispatch(submitCategory(token, id, categoryId))
})

//Fetch categories
export const categoriesPending = () => ({
    type: ActionTypes.CATEGORY_PENDING
})

export const categoriesError = (error) => ({
    type: ActionTypes.CATEGORY_ERROR,
    error: error
})

export const categoriesSucces = (data) => ({
    type: ActionTypes.CATEGORY_SUCCES,
    data: data
})

export const fetchCategories = (token, id) => {
    return dispatch => {
        dispatch(categoriesPending())
        axios.get(`${URL}${id}/categories`, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(categoriesSucces(response.data))
        })
        .catch(response => {
            dispatch(categoriesError(response.error))
        });
    }
}


export const categorySubmitPending = () => ({
    type: ActionTypes.CATEGORY_SUBMIT_PENDING
})

export const categorySubmitError = (error) => ({
    type: ActionTypes.CATEGORY_SUBMIT_ERROR,
    error: error
})

export const categorySubmitSucces = () => ({
    type: ActionTypes.CATEGORY_SUBMIT_SUCCES
})

export const submitCategory = (token, id, categoryId) => {
    console.log(`${URL}${id}/matchmaking/empty/${categoryId}`)
    return dispatch => {
        dispatch(categorySubmitPending())
        axios.post(`${URL}${id}/matchmaking/empty/${categoryId}`, null, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => {
            dispatch(categorySubmitSucces());
            Actions.pop();
        })
        .catch(response => {
            dispatch(categorySubmitError());
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CategoryService);
