import React from 'react'
import {MyPosts} from './MyPost/MyPosts';
import {MyPageFlex} from '../../../StyledComponents/Flex/Flex';
import {AboutForMe, MyPageAbout} from '../../../StyledComponents/Div';

const user = {
    name: 'Vlas',
    surname: 'Maskalenchik',
    dateOfBirth: 5,
    age: 23,
    education: 'BGAS',
    country: 'Belarus',
    city: 'Minsk'
}

export const MyPage = () => {

    return (
        <>
            <MyPageFlex>
                <MyPageAbout>
                    <span>{user['name']}</span> <span>{user['surname']}</span>
                </MyPageAbout>
                <AboutForMe>
                    <p>{user.dateOfBirth}: 05</p>
                    <p>Age : {user.age}</p>
                    <p>Education : {user.education}</p>
                    <p>Country : {user.country}</p>
                    <p>City : {user.city}</p>
                </AboutForMe>
            </MyPageFlex>
            <MyPosts/>
        </>
    )
}