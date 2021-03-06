import * as Actions from '../Actions/actionTypes'

const UserReducer = ( state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch(action.type)
    {
        case Actions.USER_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.USER_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.USER_SUCCES:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            });
        default:
            return state;
    }
}

export default UserReducer;