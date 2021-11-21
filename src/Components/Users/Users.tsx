import React from 'react'
import {UserType} from '../../Redux/UserReducer'
import {User} from './User/User'
import gifSamur from '../../Images/gifSamurai.gif'


export type UsersTypes = {
    pagesCount: number
    getUsers: Array<UserType>
    follow: (value: number) => void
    changeCurrentPage: (value: number) => void
    unfollow:(value:number)=>void
    buttonDisabled:boolean
}

export const Users: React.FC<UsersTypes> = ({pagesCount, getUsers, follow, changeCurrentPage,unfollow,buttonDisabled}) => {
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <>
        <h3>All Users</h3>
        {getUsers.length ? getUsers.map(item => <User
            buttonDisabled={buttonDisabled}
            followed={item.followed}
            unfollow={()=>unfollow(item.id)}
            follow={() => follow(item.id)}
            key={item.id + item.name} id={item.id} name={item.name}
        />) : <img
            src={gifSamur}
            alt="gif"/>}

        <div>
            {pages.map(item => {
                return <div onClick={() => changeCurrentPage(item)}
                            className={true ? '' : ''}>{item}</div>
            })}
        </div>
    </>
}