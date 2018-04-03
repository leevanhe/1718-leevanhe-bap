import * as Actions from '../Actions/actionTypes'

const TimelineReducer = (state = { isLoading: false, error: undefined, data: {} }, action) => {
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
        default:
            return state;
    }
}

export default TimelineReducer;