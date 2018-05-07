import * as Actions from '../Actions/actionTypes'

const CommentsReducer = (state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch (action.type) {
        case Actions.COMMENTS_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.COMMENTS_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.COMMENTS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                loggedIn: true,
                data: action.data,
            });
        default:
            return state;
    }
}

export default CommentsReducer;