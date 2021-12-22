import React, {useState, useEffect, ChangeEvent} from 'react'
import {MyPosts} from './MyPost/MyPosts';
import {MyPageFlex} from '../../StyledComponents/Flex/Flex';
import {AboutForMe, MyPageAbout} from '../../StyledComponents/Div';
import {PostIinitialTypes} from '../../Redux/PostReducer'
import {ContainerMyPosts} from './MyPost/ContainerMyPosts'
import {ActionPostType} from '../../Redux/PostReducer';
import {useDispatch} from 'react-redux';
import {GetStatusProfileTC, StatusTextTC} from '../../Redux/ProfileReducer';

type ProfileType = {
    about: string
    fullName: string
    photos: {
        large: string
        small: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string,
    currentStatus: string
}

export const Profile: React.FC<ProfileType> = ({
                                                   about,
                                                   photos,
                                                   fullName,
                                                   lookingForAJob,
                                                   lookingForAJobDescription,
                                                   currentStatus
                                               }) => {
    useEffect(() => {
        setStatus(currentStatus)
    }, [currentStatus])
    const [status, setStatus] = useState<string>('')
    const [isStatus, setIsStatus] = useState<boolean>(false)
    const dispatch = useDispatch()

    const setTextStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
        dispatch(StatusTextTC(e.currentTarget.value))
    }
    return (
        <>
            <MyPageFlex>
                {photos.large ?
                    <img style={{borderRadius: '90px', width: '150px', height: '150px'}} src={photos.large}
                         alt=""/> : ''}
                <AboutForMe>
                    {isStatus ?

                        <input autoFocus={true} onBlur={() => setIsStatus(false)} type="text" value={status}
                               onChange={setTextStatus}/> :
                        <h2 onDoubleClick={() => setIsStatus(true)}>Status: {currentStatus}</h2>}
                    <p>{about}: 05</p>
                    <p>FullName : {fullName}</p>
                    <p>{lookingForAJob ? 'Right now i for looking job' : 'I don\'t looking job'}</p>
                </AboutForMe>
            </MyPageFlex>
            <ContainerMyPosts/>
        </>
    )
}