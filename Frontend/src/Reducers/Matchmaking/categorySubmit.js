import * as Actions from '../../Actions/actionTypes'

const SubmitCategoryReducer = (state = {isLoading: false, error: undefined}, action) => {
    switch(action.type) {
        case Actions.CATEGORY_SUBMIT_PENDING:
            return Object.assign({}, state, {
                isLoading: true
            });
        case Actions.CATEGORY_SUBMIT_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.CATEGORY_SUBMIT_SUCCES:
            return Object.assign({}, state, {
                isLoading: true
            });
        default:
            return state;
    }
}

export default SubmitCategoryReducer;