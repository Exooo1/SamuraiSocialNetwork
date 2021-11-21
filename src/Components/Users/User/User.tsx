import React from 'react'
import {NavLink} from 'react-router-dom'

type UserTypes = {
    id: number
    name: string
    followed: boolean
    follow: () => void
    unfollow: () => void
    buttonDisabled: boolean
}


export const User = ({id, name, followed, follow, unfollow, buttonDisabled}: UserTypes,) => {
    return <div>
        <NavLink to={'/profile/' + id}>

            <img
                src={'https://besthqwallpapers.com/Uploads/17-2-2018/41098/thumb2-zero-two-manga-anime-characters-pink-hair-darling-in-the-franxx.jpg'}
                alt={'avatar'} style={{borderRadius: '30%', width: '100px', height: '100px'}}/>
        </NavLink>
        <h4>Name: {name} </h4>

        {followed ? <button disabled={buttonDisabled} onClick={unfollow}>Unfollow</button> :
            <button disabled={buttonDisabled} onClick={follow}>Follow</button>}
    </div>
}