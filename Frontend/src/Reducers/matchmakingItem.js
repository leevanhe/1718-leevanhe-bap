import * as Actions from '../Actions/actionTypes'

const MatchmakingItemReducer = ( state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch(action.type)
    {
        case Actions.MATCHMAKING_ITEM_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.MATCHMAKING_ITEM_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.MATCHMAKING_ITEM_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            })
        default:
            return state;
            
    }
}

export default MatchmakingItemReducer;