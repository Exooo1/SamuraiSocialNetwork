import {Dispatch} from 'redux'
import {AuthLogin, loginAPI} from '../Components/API/login'

export type AuthReducerType = {
    resultCode: number | null
}

export type  ActionTypeAuth = ReturnType<typeof SetUserAC>

const initialState: AuthReducerType = {
    resultCode: null
}

export const AuthReducer = (state: AuthReducerType = initialState, action: ActionTypeAuth) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, resultCode: action.result}
        default:
            return {...state}
    }
}

export const SetUserAC = (result: number | null) => {
    return {
        type: 'SET_USER',
        result
    } as const
}
export const AuthMeTC = (auth: AuthLogin) => async (dispatch: Dispatch) => {
    try {
        const {data} = await loginAPI.auth(auth)
        if (data.resultCode === 0) {
            console.log('asd')
            dispatch(SetUserAC(data.resultCode))
        }
    } catch (err) {
        console.log(err)
    }
}
export const GetMeTC = () => async (dispatch: Dispatch) => {
    try {
        const {data} = await loginAPI.getMe()
        if (data.resultCode === 0) {
            dispatch(SetUserAC(data.resultCode))
        }
    } catch (err) {
        console.log(err)
    }
}

export const deleteAuthTC = () => async (dispatch: Dispatch) => {
    try {
        const {data} = await loginAPI.deleteAuth()
        console.log(data)
        if (data.resultCode === 0) {
            dispatch(SetUserAC(null))
        }
    } catch (err) {
        console.log(err)
    }
}
