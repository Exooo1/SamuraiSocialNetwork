import React, {useState, useMemo, useEffect} from 'react'
import {DialogStyle} from './DialogsStyleds'
import {StyleDialogsMessages} from '../../StyledComponents/Text/TextH';
import {Messages} from './Messages/Messages';
import {MessagesInitialState} from '../../Redux/MessagesReducer'
import {TypePropsDialogs} from './ContainerDialogs';
import {Redirect} from 'react-router-dom'

const styleHr = {
    width: '350px',
    color: 'grey'
}
export const Dialogs: React.FC<TypePropsDialogs> = ({messages, addMessageActionCreator, resultCode}) => {
    const [value, setValue] = useState<string>('')
    const [mess, setMess] = useState(messages)
    useEffect(() => {
        setMess(messages)
    }, [messages])

    const showMessages = useMemo(() => {
        const a = mess.messages.map(item => {
            return <Messages id={item.id} src={item.src} time={item.time} name={item.name} text={item.text}/>
        })
        return a
    }, [mess])

    return (<DialogStyle>
            <StyleDialogsMessages>Messages</StyleDialogsMessages>
            <input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
            <button onClick={() => {
                addMessageActionCreator(value)
                setValue('')
            }}>addMessage
            </button>
            <hr/>
            {showMessages}
        </DialogStyle>

    )
}
