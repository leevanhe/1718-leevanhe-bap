import * as Actions from '../Actions/actionTypes'

const CommentItemReducer = (state = { isLoading: false, error: undefined, post: {}, userdata: [] }, action) => {
    switch (action.type) {
        case Actions.COMMENTS_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.COMM:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.COMMENTS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                post: action.post,
                userdata: action.userdata
            });
        default:
            return state;
    }
}

export default CommentItemReducer;