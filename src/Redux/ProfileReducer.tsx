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
}
export type ActionProfileTypes = ReturnType<typeof AddProfileAC>
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
    }
}


export const ProfileReducer = (state = initialState, action: ActionProfileTypes) => {
    switch (action.type) {
        case 'ADD_PROFILE':
            return {...state, user: {...action.user}}
        default:
            return {...state}
    }
}

export const AddProfileAC = (user: any) => {
    return {
        type: 'ADD_PROFILE',
        user
    }
}



