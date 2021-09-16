import React from 'react'
import {Link} from 'react-router-dom';
import {MessagesStyle} from '../../../StyledComponents/Flex/Flex';
import {MessagesTypes} from '../../../Redux/Redux';
import {StyleMessageAvatarImg} from '../../../StyledComponents/Img/ImageStyle';
import {StyleMessagesTextP, StyleMessageTimeP} from '../../../StyledComponents/Text/TextP';
import {StyleDialogsMessagesNameH} from '../../../StyledComponents/Text/TextH';
import {StyleMessageDescripDiv} from '../../../StyledComponents/Div';

const divText = {
    borderBottom: 'solid 1px #8080807d',
    marginLeft: '30px',
    width: '550px'
}

export const Messages: React.FC<MessagesTypes> = ({id, src, time, name, text}) => {
    return (
        <Link key={id} to={`${id}`} style={{textDecoration: 'none'}}>
            <MessagesStyle>
                <div>
                    <StyleMessageAvatarImg src={src} alt="avatar photo"/>
                </div>
                <StyleMessageDescripDiv style={divText}>
                    <StyleMessageTimeP>{time}</StyleMessageTimeP>
                    <StyleDialogsMessagesNameH>{name}</StyleDialogsMessagesNameH>
                    <StyleMessagesTextP>{text}</StyleMessagesTextP>
                </StyleMessageDescripDiv>
            </MessagesStyle>
        </Link>
    )
}