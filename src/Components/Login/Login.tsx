import React, {memo, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AuthReducerType, getMeTC} from '../../Redux/AuthReducer'
import {StoreType} from '../../Redux/ReduxStore'

export const Login = memo(() => {
    const dispatch = useDispatch()
    const {resultCode, ...userData} = useSelector<StoreType, AuthReducerType>(state => state.authMe)
    console.log(resultCode, userData)
    useEffect(() => {
        console.log('asd')
        dispatch(getMeTC())
    }, [])
    return <div>
        <h1>LOGIN</h1>
    </div>
})