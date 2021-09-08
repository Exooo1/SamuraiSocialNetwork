import React from 'react'
import {MessagesTypes} from '../../Redux/Redux'
import {TypesMessagesArray} from '../../InterfaceTypes/InterfaceTypes'
import {DialogStyle} from '../../StyledComponents/Flex/Flex';
import {StyleDialogsMessages} from '../../StyledComponents/Text/TextH';
import {Messages} from './Messages/Messages';
import {Link} from 'react-router-dom';

const styleHr = {
    width: '350px',
    color: 'grey'
}

export const Dialogs: React.FC<TypesMessagesArray> = ({store}) => {
    console.log(store)
    return (
        <DialogStyle>
            <StyleDialogsMessages>Messages</StyleDialogsMessages>
            <hr style={styleHr}/>
            {store.messages.map((item: MessagesTypes) => {
                return <Link style={{textDecoration: 'none'}} to="hey" key={item.id}>
                    <Messages id={item.id} src={item.src} time={item.time} name={item.name} text={item.text}/>
                </Link>
            })}
        </DialogStyle>
    )
}