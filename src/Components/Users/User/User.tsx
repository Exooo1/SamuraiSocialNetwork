import React from 'react'

type UserTypes = {
    followUnfollow: () => void
    id: number
    name: string
    surname: string
    country: string
    city: string
    folUn: boolean
    src: string
}

export const User = ({id, name, surname, country, city, folUn, followUnfollow, src}: UserTypes) => {
    return <div>
        <img src={src} alt={'avatar'} style={{borderRadius: '30%', width: '100px', height: '100px'}}/>
        <h4>Name: {name} Surname: {surname}</h4>
        <p>Country: {country} City: {city}</p>
        {folUn ? <button onClick={followUnfollow}>Unfollow</button> : <button onClick={followUnfollow}>Follow</button>}
    </div>
}