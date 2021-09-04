import React from 'react'
import {BrowserRouter as Router,} from 'react-router-dom'
import {Header} from './Components/Header/Header';


export const App = () => {
    return (
        <Router>
            <Header/>
        </Router>
    )
}