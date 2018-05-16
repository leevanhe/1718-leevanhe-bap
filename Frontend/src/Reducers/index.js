import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

//Auth
import authReducer from './Auth/auth';
import SubmitUserReducer from './Auth/submitUser';
//Comments
import CommentsReducer from './Comments/comments';
import CommentItemReducer from './Comments/commentItem';
import SubmitCommentReducer from './Comments/submitComment';
//Matchmaking
import MatchmakingReducer from './Matchmaking/matchmaking';
import MatchmakingItemReducer from './Matchmaking/matchmakingItem';
import SubmitServiceReducer from './Matchmaking/submitMatchmaking';
import CategoryReducer from './Matchmaking/category';
import SubmitCategoryReducer from './Matchmaking/categorySubmit';
//Profile
import ProfileReducer from './Profile/profile';
//Timeline
import TimelineReducer from './Timeline/timeline';
import FriendItemReducer from './Timeline/friendItem';
import Friend2ItemReducer from './Timeline/friend2Item';
import SubmitPostReducer from './Timeline/submitPost';
//Otherss
import UserReducer from './user';


const AppReducers = combineReducers({
    auth: authReducer,
    register: SubmitUserReducer,
    timeline: TimelineReducer,
    category: CategoryReducer,
    user: UserReducer,
    submitPost: SubmitPostReducer,
    submitCategory: SubmitCategoryReducer,
    submitComment: SubmitCommentReducer,
    comments: CommentsReducer,
    matchmaking: MatchmakingReducer,
    submitService: SubmitServiceReducer,
    profile: ProfileReducer,
    friend: FriendItemReducer,
    friend2: Friend2ItemReducer,
    matchmakingItem: MatchmakingItemReducer,
    commentItem: CommentItemReducer,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

const logger = createLogger();

let store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;

