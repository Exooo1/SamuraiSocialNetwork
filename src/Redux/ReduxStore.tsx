import {combineReducers, createStore, applyMiddleware} from 'redux';
import {AuthReducer} from './AuthReducer';
import {MessagesReducer} from './MessagesReducer';
import {PostReducer} from './PostReducer';
import {ProfileReducer} from './ProfileReducer';
import {UserReducer} from './UserReducer';
import thunkMiddlawere from 'redux-thunk'
import { TypedUseSelectorHook, useSelector } from 'react-redux';


const rootReducers = combineReducers({
    posts: PostReducer,
    messages: MessagesReducer,
    user: UserReducer,
    profile: ProfileReducer,
    authMe: AuthReducer
});

export type StoreType = ReturnType<typeof rootReducers>

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector

export const store = createStore(rootReducers, applyMiddleware(thunkMiddlawere));