import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import authReducer from './auth';
import ProfileReducer from './profile';

const AppReducers = combineReducers({
    auth: authReducer,
    profile: ProfileReducer,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

const logger = createLogger();
let store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;

