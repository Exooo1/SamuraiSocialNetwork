import axios from 'axios'
import React, {useEffect,memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {StoreType} from '../../Redux/ReduxStore'
import {
    addUsersAC,
    changeCurrentPageAC,
    ChangeDisabledButtonAC,
    followUnfollowAC,
    followUserTC,
    getUsersTC,
    Numbers,
    unfollowUserTC,
    UsersType,
    UserType
} from '../../Redux/UserReducer'
import {usersAPI} from '../API/users-api'
import {User} from './User/User'
import {Users} from './Users'

export const UsersAPI = memo(() => {
    const dispatch = useDispatch()
    const getUsers = useSelector<StoreType, Array<UserType>>(state => state.user.users)
    const pagesCount = Math.ceil(useSelector<StoreType, Numbers>(state => state.user.totalCount / state.user.pageSize))
    const pageSize = useSelector<StoreType, Numbers>(state => state.user.pageSize)
    const currentPage = useSelector<StoreType, Numbers>(state => state.user.currentPage)
    const buttonDisabled = useSelector<StoreType, boolean>(state => state.user.disableButton)
    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [currentPage])

    const follow = (value: number) => {
        dispatch(followUserTC(value))
    }
    const unfollow = (value: number) => {
       dispatch(unfollowUserTC(value))
    }
    const changeCurrentPage = (value: number) => {
        dispatch(changeCurrentPageAC(value))
    }
    return <div>
        <Users pagesCount={pagesCount} getUsers={getUsers} follow={follow} unfollow={unfollow}
               changeCurrentPage={changeCurrentPage} buttonDisabled={buttonDisabled}/>
    </div>
})
