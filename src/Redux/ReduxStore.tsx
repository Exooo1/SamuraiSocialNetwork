import {combineReducers, createStore} from 'redux';
import {MessagesReducer} from './MessagesReducer';
import {PostReducer} from './PostReducer';
import { UserReducer } from './UserReducer';

const rootReducers = combineReducers({
    posts: PostReducer,
    messages: MessagesReducer,
    user:UserReducer
});

export type StoreType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers);