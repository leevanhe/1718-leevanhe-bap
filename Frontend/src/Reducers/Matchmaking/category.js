import * as Actions from '../../Actions/actionTypes'

const CategoryReducer = ( state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch(action.type)
    {
        case Actions.CATEGORY_PENDING:
        return Object.assign({}, state, {
            isLoading: true,
        });
    case Actions.CATEGORY_ERROR:
        return Object.assign({}, state, {
            isLoading: false,
            error: action.error
        });
    case Actions.CATEGORY_SUCCES:
        return Object.assign({}, state, {
            isLoading: false,
            data: action.data
        });

        default:
            return state;
    }
}

export default CategoryReducer;