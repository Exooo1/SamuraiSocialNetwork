import React from 'react'
import {MyPostsFlex} from '../../../../StyledComponents/Flex/Flex';
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <MyPostsFlex>
            <div style={{background:'white',width:'700px',textAlign:'center',borderRadius:'2px'}}><p>All Posts</p></div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </MyPostsFlex>
    )
}