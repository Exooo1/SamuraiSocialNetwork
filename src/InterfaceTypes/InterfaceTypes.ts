import {MessagesTypes, PostTypes} from '../Redux/Redux';

export interface TypesMessagesArray {
    store: {
        messages: Array<MessagesTypes>
        posts: Array<PostTypes>
    }
}

export interface TypesPostsArray {
    storePosts: Array<PostTypes>
}