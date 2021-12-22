import React, {ComponentType} from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {StoreType} from '../../Redux/ReduxStore'
import {TypePropsDialogs} from '../Dialogs/ContainerDialogs'

type TypeHOC = TypePropsDialogs | {}

export function RedirectHOC<T>(Component: ComponentType<T>) {
    const ComponentHOC = (props: TypeHOC) => {
        const getResultCode = useSelector<StoreType, number | null>(state => state.authMe.resultCode)
        if (getResultCode === null) return <Redirect to={'/login'}/>
        return <Component {...props as T}/>
    }
    return ComponentHOC
}