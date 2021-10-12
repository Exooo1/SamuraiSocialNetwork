import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {StoreType} from '../../Redux/ReduxStore'
import {followUnfollowAC, UsersType} from '../../Redux/UserReducer'
import {User} from './User/User'

export const Users = () => {
    const dispatch = useDispatch()
    const userSelector = useSelector<StoreType, UsersType>(state => state.user)
    const followUnfollow = (value: number) => {
        dispatch(followUnfollowAC(value))
    }
    return <div>
        <h3>All Users</h3>
        {userSelector.users.map(item => <User folUn={item.folUn}
                                              src={item.src}
                                              followUnfollow={() => followUnfollow(item.id)}
                                              key={item.id + item.name} id={item.id} name={item.name}
                                              surname={item.surname}
                                              country={item.country}
                                              city={item.city}/>)}
    </div>
}