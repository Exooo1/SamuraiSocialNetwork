import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AuthReducerType, getMeTC, SetUserAC} from '../../Redux/AuthReducer'
import {StoreType} from '../../Redux/ReduxStore'
import {Header} from './Header'

export const HeaderContainer = () => {

    return <Header resultCode={1}/>
}

