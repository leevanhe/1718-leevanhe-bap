import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import authReducer from './auth';
import TimelineReducer from './timeline';
import UserdataReducer from './userdata';
import SubmitPostReducer from './submitPost';
import MatchmakingReducer from './matchmaking';
import ProfileReducer from './profile';
import postReducer from './post';

const AppReducers = combineReducers({
    auth: authReducer,
    timeline: TimelineReducer,
    post: postReducer,
    userdata: UserdataReducer,
    matchmaking: MatchmakingReducer,
    profile: ProfileReducer,
    submitPost: SubmitPostReducer,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

const logger = createLogger();
let store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;

