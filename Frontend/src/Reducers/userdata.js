import * as Actions from '../Actions/actionTypes'

const UserdataReducer = (state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch (action.type) {
        case Actions.USERDATA_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.USERDATA_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.USERDATA_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                loggedIn: true,
                data: action.data,
            }); 
        default:
            return state;
    }
}

export default UserdataReducer;