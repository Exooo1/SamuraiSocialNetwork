import React, {useState} from 'react'
import {MyPosts} from './MyPost/MyPosts';
import {MyPageFlex} from '../../../StyledComponents/Flex/Flex';
import {AboutForMe, MyPageAbout} from '../../../StyledComponents/Div';
import {TypesPostsArray} from '../../../InterfaceTypes/InterfaceTypes';
import {add} from '../../../Redux/Redux'

const user = {
    name: 'Vlas',
    surname: 'Maskalenchik',
    dateOfBirth: 5,
    age: 23,
    education: 'BGAS',
    country: 'Belarus',
    city: 'Minsk'
}

export const MyPage: React.FC<TypesPostsArray> = ({storePosts}) => {
    console.log(storePosts)

    const [value, setValue] = useState<string>('')

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
            <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
            <button onClick={()=>add(value)}>add</button>
            <MyPosts storePosts={storePosts} />
        </>
    )
}