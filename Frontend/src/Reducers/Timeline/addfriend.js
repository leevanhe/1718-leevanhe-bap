import * as Actions from '../../Actions/actionTypes'

const AddFriendReducer = (state = {isLoading: false, error: undefined}, action) => {
    switch(action.type) {
        case Actions.ADDFRIEND_PENDING:
            return Object.assign({}, state, {
                isLoading: true
            });
        case Actions.ADDFRIEND_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.ADDFRIEND_SUCCESS:
            return Object.assign({}, state, {
                isLoading: true
            });
        default:
            return state;
    }
}

export default AddFriendReducer;