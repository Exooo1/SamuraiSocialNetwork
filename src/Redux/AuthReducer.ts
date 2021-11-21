import {Dispatch} from 'redux'
import {profileAPI} from '../Components/API/profile-api'

export {}
export type AuthReducerType = {
    id: number
    email: string
    login: string
    resultCode: number
}

export type  ActionTypeAuth = ReturnType<typeof SetUserAC>


const initialState: AuthReducerType = {
    id: 0,
    email: '',
    login: '',
    resultCode: 1
}

export const AuthReducer = (state: AuthReducerType=initialState, action: ActionTypeAuth) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, ...action.data, resultCode: action.result}
        default:
            return {...state}
    }
}

export const SetUserAC = (data: AuthReducerType, result: number) => {
    return {
        type: 'SET_USER',
        data, result
    } as const
}
export const getMeTC = () => (dispatch: Dispatch) => {
    profileAPI.getMe().then(res => dispatch(SetUserAC(res.data.data, res.data.resultCode)))
}
