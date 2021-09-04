import React from 'react'
import {DialogStyle} from '../../StyledComponents/Flex/Flex';
import {Messages} from './Messages/Messages';
import {MessagesTypes, object} from '../../Redux/Redux'
import {Link} from 'react-router-dom';
import {StyleDialogsMessages} from '../../StyledComponents/Text/TextH';

const messages = object.messages

const styleHr={
    width: '350px',
    color: 'grey'
}
export const Dialogs = () => {
    return (
        <DialogStyle>
            <StyleDialogsMessages>Messages</StyleDialogsMessages>
            <hr style={styleHr}/>
            {messages.map((item:MessagesTypes)=>{
                return <Link style={{textDecoration: 'none'}} to='hey' key={item.id}>
                    <Messages id={item.id} src={item.src} time={item.time} name={item.name} text={item.text}/>
                </Link>
            })}
        </DialogStyle>
    )
}