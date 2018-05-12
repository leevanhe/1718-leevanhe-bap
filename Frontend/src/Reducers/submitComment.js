import * as Actions from '../Actions/actionTypes'

const SubmitCommentReducer = (state = {isLoading: false, error: undefined, data: {} }, action) => {
    switch(action.type) {
        case Actions.COMMENTS_SUBMIT_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.COMMENTS_SUBMIT_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.COMMENTS_SUBMIT_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data,
            })
        default:
            return state;
    }
}

export default SubmitCommentReducer;