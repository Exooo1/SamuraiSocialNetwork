import React, {useState} from 'react'
import {MyPosts} from './MyPost/MyPosts';
import {MyPageFlex} from '../../StyledComponents/Flex/Flex';
import {AboutForMe, MyPageAbout} from '../../StyledComponents/Div';
import {PostIinitialTypes} from '../../Redux/PostReducer'
import {ContainerMyPosts} from './MyPost/ContainerMyPosts'
import {ActionPostType} from '../../Redux/PostReducer';

type ProfileType = {
    about: string
    fullName: string
    photos: {
        large: string
        small: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
}

export const Profile: React.FC<ProfileType> = ({
                                                   about,
                                                   photos,
                                                   fullName,
                                                   lookingForAJob,
                                                   lookingForAJobDescription
                                               }) => {
    const [value, setValue] = useState('')
    return (
        <>
            <MyPageFlex>
                {photos.large ?
                    <img style={{borderRadius: '90px', width: '150px', height: '150px'}} src={photos.large}
                         alt=""/> : ''}
                <AboutForMe>
                    <p>{about}: 05</p>
                    <p>FullName : {fullName}</p>
                    <p>{lookingForAJob ? 'Right now i for looking job' : 'I don\'t looking job'}</p>
                </AboutForMe>
            </MyPageFlex>
            <input type="text" value={value} onChange={(e) => {
                setValue(e.currentTarget.value)
            }}/>
            {/*<button onClick={() => {*/}
            {/*    dispatch({type: 'ADD_POST', post: value})*/}
            {/*    setValue('')*/}
            {/*}}>add*/}
            {/*</button>*/}
            <ContainerMyPosts/>
        </>
    )
}