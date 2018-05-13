import * as Actions from '../../Actions/actionTypes'

const TimelineReducer = (state = { isLoading: false, error: undefined, data: {}}, action) => {
    switch (action.type) {
        //All posts
        case Actions.POSTS_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.POSTS_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.POSTS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                loggedIn: true,
                data: action.data,
            });
        default:
            return state;
    }
}

export default TimelineReducer;