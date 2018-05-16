import * as Actions from '../../Actions/actionTypes'

const FriendReducer = ( state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch(action.type)
    {
        case Actions.FRIENDS_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FRIENDS_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.FRIENDS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            })
        default:
            return state;
            
    }
}

export default FriendReducer;