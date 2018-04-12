import * as Actions from '../Actions/actionTypes'

const TimelineReducer = (state = { isLoading: false, error: undefined, data: {}, user: {} }, action) => {
    switch (action.type) {
        case Actions.TIMELINE_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.TIMELINE_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.TIMELINE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data,
            });

        case Actions.TIMELINE_USER_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.TIMELINE_USER_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.TIMELINE_USER_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                user: action.user,
            });

        default:
            return state;
    }
}

export default TimelineReducer;