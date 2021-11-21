import React from 'react'
import {PostStyle} from '../../../../StyledComponents/Div'
import {PostTypes} from '../../../../Redux/PostReducer';

export const Post: React.FC<PostTypes> = ({id, src, text}) => {
    return (
        <PostStyle key={id}>
            <img alt="ref" style={{width: '120px', height: '120px'}}
                 src={src}/>
            <p>{text}</p>
        </PostStyle>
    )
}