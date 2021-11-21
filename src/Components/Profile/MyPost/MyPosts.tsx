import React from 'react'
import {MyPostsFlex} from '../../../StyledComponents/Flex/Flex';
import {Post} from './Post/Post';
import {PostTypes} from '../../../Redux/PostReducer'
import {TypePropsMyPost} from './ContainerMyPosts';


export const MyPosts: React.FC<TypePropsMyPost> = ({post}) => {

    return (
        <MyPostsFlex>
            {post.posts.map(i => <Post id={i.id} src={i.src} text={i.text}/>)}
        </MyPostsFlex>
    )
}