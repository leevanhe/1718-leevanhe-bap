import * as Actions from '../Actions/actionTypes'

const MatchmakingReducer = (state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch (action.type) {
        case Actions.MATCHMAKING_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.MATCHMAKING_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.MATCHMAKING_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data,
            }); 
        default:
            return state;
    }
}

export default MatchmakingReducer;