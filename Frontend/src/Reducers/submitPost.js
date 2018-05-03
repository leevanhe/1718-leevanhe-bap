import * as Actions from '../Actions/actionTypes'

const SubmitPostReducer = (state = {isLoading: false, error: undefined, data: {} }, action) => {
    switch(action.type) {
        case Actions.SUBMIT_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.SUBMIT_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.SUBMIT_SUCCES:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data,
            })
        default:
            return state;
    }
}

export default SubmitPostReducer;