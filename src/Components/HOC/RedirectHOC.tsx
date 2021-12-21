import React, {ComponentType} from 'react'
import {useSelector} from 'react-redux'
import {Redirect, RouteComponentProps} from 'react-router-dom'
import {AuthReducerType} from '../../Redux/AuthReducer'
import {ActionPostType, PostIinitialTypes} from '../../Redux/PostReducer'
import {StoreType} from '../../Redux/ReduxStore'
import {TypePropsDialogs} from '../Dialogs/ContainerDialogs'

type TypeHOC = TypePropsDialogs | {}

export function RedirectHOC<T>(Component: ComponentType<T>) {
    const ComponentHOC = (props:TypeHOC) => {
        console.log(props, 'HOOOOKKKSSS')
        const getResultCode = useSelector<StoreType, number>(state => state.authMe.resultCode)
        if (getResultCode === 1) return <Redirect to={'/login'}/>
        return <Component {...props as T}/>
    }
    return ComponentHOC
}