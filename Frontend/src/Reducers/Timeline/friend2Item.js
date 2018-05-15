import * as Actions from '../../Actions/actionTypes'

const Friend2ItemReducer = ( state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch(action.type)
    {
        case Actions.FRIEND2_ITEM_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FRIEND2_ITEM_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.FRIEND2_ITEM_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            })
        default:
            return state;
            
    }
}

export default Friend2ItemReducer;