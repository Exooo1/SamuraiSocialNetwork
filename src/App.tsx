import React from 'react'
import {BrowserRouter as Router,} from 'react-router-dom'
import {Header} from './Components/Header/Header';

type A = {
    id: number,
    name: string
}
type AA = {
    vlas: Array<A>
    vlad: Array<A>
}

export const App = () => {
    const users: AA = {
        'vlas': [
            {id: 1, name: 'vlas'}
        ],
        'vlad': [{id: 2, name: 'vlad'}]
    }

    const allo = (city: { [key: string]: Array<A> }, name: string) => {
        const copy = {...city,
        // [name]:city[name].map(item=>)
        }
        copy[name] = copy[name].map(item => item.name === 'vlas' ? {...item, name: 'blad'} : item)
        return copy
    }


    console.log(allo(users, 'vlas'))
    const user = {
        name: 'vlas',
        book: [

            {id: 1, book: 'html'},
            {id: 2, book: 'css'},
            {id: 3, book: 'js'},
        ]
    }
    const userTwo = {
        ...user,
        book: user.book.map(item=>({...item}))
    }
    userTwo.book[2].book='adsasdads'
    console.log(user, 'user')
    console.log(userTwo, 'userTwo')

    return (
        <Router>
            <Header/>
        </Router>
    )
}