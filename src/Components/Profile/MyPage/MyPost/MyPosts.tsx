import React from 'react'
import {MyPostsFlex} from '../../../../StyledComponents/Flex/Flex';
import {Post} from './Post/Post';
import {TypesPostsArray} from '../../../../InterfaceTypes/InterfaceTypes';

export const MyPosts: React.FC<TypesPostsArray> = ({storePosts}) => {
    return (
        <MyPostsFlex>
            {storePosts.map((item) => <Post id={item.id} src={item.src} text={item.text}/>)}
        </MyPostsFlex>
    )
}