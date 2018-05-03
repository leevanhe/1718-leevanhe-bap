import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import authReducer from './auth';
import TimelineReducer from './timeline';
import MatchmakingReducer from './matchmaking';
import ProfileReducer from './profile';
import UserReducer from './user';
import SubmitPostReducer from './submitPost';

const AppReducers = combineReducers({
    auth: authReducer,
    timeline: TimelineReducer,
    user: UserReducer,
    submitPost: SubmitPostReducer,
    matchmaking: MatchmakingReducer,
    profile: ProfileReducer,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

const logger = createLogger();
let store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;

