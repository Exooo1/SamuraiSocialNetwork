import {Dispatch} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {usersAPI} from '../Components/API/users-api'
import {StoreType} from './ReduxStore'


export type ActionType =
    ReturnType<typeof followUnfollowAC>
    | ReturnType<typeof addUsersAC>
    | ReturnType<typeof changeCurrentPageAC>
    | ReturnType<typeof ChangeDisabledButtonAC>

export type UserType = {
    followed: boolean
    id: number
    name: string
    photos: {
        large: null
        small: null
    }
    status: null
    uniqueUrlName: null
}

export type UsersType = typeof initialUser
export type Numbers = number

const initialUser = {
    users: [] as Array<UserType>,
    pageSize: 25 as Numbers,
    totalCount: 0 as Numbers,
    currentPage: 1 as Numbers,
    disableButton: false as boolean
}

export const UserReducer = (state = initialUser, action: ActionType) => {

    switch (action.type) {
        case 'FOLLOW_UNFOLLOW':
            return {
                ...state,
                users: [...state.users.map(item => item.id === action.value ? {
                    ...item,
                    followed: !item.followed
                } : {...item})]
            }
        case 'ADD_USERS':
            return {...state, users: action.arr, totalCount: action.totalCount}
        case 'CHANGE_CURRENT_PAGE':
            return {...state, currentPage: action.page}
        case 'CHANGE_DISABLED_BUTTON':
            return {...state, disableButton: !state.disableButton}
        default:
            return {...state}
    }
}

export const followUnfollowAC = (value: number) => {
    return {
        type: 'FOLLOW_UNFOLLOW',
        value
    } as const
}

export const addUsersAC = (arr: Array<UserType>, totalCount: number) => {
    return {
        type: 'ADD_USERS',
        arr,
        totalCount

    } as const
}

export const changeCurrentPageAC = (page: number) => {
    return {
        type: 'CHANGE_CURRENT_PAGE',
        page
    } as const
}

export const ChangeDisabledButtonAC = () => {
    return {type: 'CHANGE_DISABLED_BUTTON'} as const
}

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    usersAPI.getUsers(currentPage, pageSize).then(res => {
        dispatch(addUsersAC(res.data.items, res.data.totalCount))
        console.log(res.data)
    })
}

export const followUserTC = (value: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(ChangeDisabledButtonAC())
    usersAPI.followUsers(value).then(res => {
        dispatch(followUnfollowAC(value))
        dispatch(ChangeDisabledButtonAC())
    })
}
export const unfollowUserTC = (value: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(ChangeDisabledButtonAC())
    usersAPI.followUsers(value).then(res => {
        dispatch(followUnfollowAC(value))
        dispatch(ChangeDisabledButtonAC())
    })
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, ActionType>
// export const s = (value: number): AppThunk => {
//     return (dispatch) => {
//         dispatch(ChangeDisabledButtonAC())
//         usersAPI.followUsers(value).then(res => {
//             dispatch(followUnfollowAC(value))
//             dispatch(ChangeDisabledButtonAC())
//             dispatch(followUserTC(2))
//         })
//     }
// }
// export const s = (value: number): AppThunk => async dispatch => {
//     dispatch(ChangeDisabledButtonAC())
//     usersAPI.followUsers(value).then(res => {
//         dispatch(followUnfollowAC(value))
//         dispatch(ChangeDisabledButtonAC())
//         dispatch(followUserTC(2))
//     })
// }
