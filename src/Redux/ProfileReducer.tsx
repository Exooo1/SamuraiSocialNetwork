import {Dispatch} from 'redux'
import {profileAPI} from '../Components/API/profile-api'

export {}

export type ProfileUserType = {
    aboutMe: string
    contacts: any[]
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        large: string
        small: string
    }
    userId: number

}
export type InitialProfileType = {
    user: ProfileUserType
    profileStatus: string
}
export type ActionProfileTypes =
    ReturnType<typeof AddProfileAC>
    | ReturnType<typeof GetStatusProfileAC>
    | ReturnType<typeof StatusTextAC>
const initialState: InitialProfileType = {
    user: {
        aboutMe: 'string',
        contacts: [],
        fullName: 'string',
        lookingForAJob: false,
        lookingForAJobDescription: 'string',
        photos: {
            large: 'string',
            small: 'string'
        },
        userId: 0
    },
    profileStatus: ''
}


export const ProfileReducer = (state = initialState, action: ActionProfileTypes) => {
    switch (action.type) {
        case 'GET_STATUS_PROFILE':
            return {...state, profileStatus: action.status}
        case 'SET_STATUS_TEXT':
            return {...state, profileStatus: action.text}
        case 'ADD_PROFILE':
            return {...state, user: {...action.user}}
        default:
            return {...state}
    }
}

export const AddProfileAC = (user: any) => ({type: 'ADD_PROFILE', user} as const)
export const AddProfileTC = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const {data} = await profileAPI.getProfile(userId)
        dispatch(AddProfileAC(data))
    } catch (err) {
        console.log(err)
    }
}
export const GetStatusProfileAC = (status: string) => ({type: 'GET_STATUS_PROFILE', status} as const)
export const GetStatusProfileTC = (userId: string) => async (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(res => res)
    try {
        const {data} = await profileAPI.getStatus(userId)
        console.log(data)
        if (data) dispatch(GetStatusProfileAC(data))
    } catch (err) {
        console.log(err)
    }
}
export const StatusTextAC = (text: string) => ({type: 'SET_STATUS_TEXT', text} as const)
export const StatusTextTC = (text: string) => async (dispatch: Dispatch) => {
    try {
        const data = await profileAPI.changeStatus(text)
    } catch (err) {
        console.log(err)
    }
}



