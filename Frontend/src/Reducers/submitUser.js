import * as Actions from '../Actions/actionTypes'

const SubmitUserReducer = (state = {isLoading: false, error: undefined, data: {} }, action) => {
    switch(action.type) {
        case Actions.NEWUSER_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.NEWUSER_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.NEWSERVICE_SUCCES:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data,
            })
        default:
            return state;
    }
}

export default SubmitUserReducer;