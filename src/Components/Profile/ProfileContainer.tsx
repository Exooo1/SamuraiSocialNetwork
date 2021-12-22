import axios from 'axios'
import React, {useEffect} from 'react'
import {Redirect, RouteComponentProps, useHistory, useParams, withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {ActionPostType, PostIinitialTypes} from '../../Redux/PostReducer'
import {AddProfileAC, AddProfileTC, GetStatusProfileTC, InitialProfileType} from '../../Redux/ProfileReducer'
import {StoreType, useAppSelector} from '../../Redux/ReduxStore'
import {Profile} from './Profile'
import {AuthReducerType} from '../../Redux/AuthReducer'
import {Login} from '../Login/Login'
import {RedirectHOC} from '../HOC/RedirectHOC'
import {compose} from 'redux'
import {profileAPI} from '../API/profile-api'

type QuizParams = {
    userId: string;
};
type MyPageType = {
    posts: PostIinitialTypes
    dispatch: (text: ActionPostType) => void
}
type PathParamsType = {
    userId: string
}

type TypeRouter = RouteComponentProps<PathParamsType> & MyPageType

export const ProfileContainer = () => {
    let token = useParams<QuizParams>()
    const getAuth = useAppSelector<number | null>(state => state.authMe.resultCode)
    const currentStatus = useAppSelector<string>(state => state.profile.profileStatus)
    const getProfile = useAppSelector<InitialProfileType>(state => state.profile)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!token.userId) {
            token.userId = '14470'
        }
        dispatch(GetStatusProfileTC(token.userId))
        dispatch(AddProfileTC(token.userId))
    }, [])
    console.log(getAuth)
    if (getAuth === null) return <Redirect to={'/login'}/>
    return <div>
        {getProfile ? <Profile about={getProfile.user.aboutMe} fullName={getProfile.user.fullName}
                               photos={getProfile.user.photos}
                               lookingForAJob={getProfile.user.lookingForAJob}
                               lookingForAJobDescription={'asd'}
                               currentStatus={currentStatus}

        /> : null}
    </div>
}

export default compose<React.ComponentType>(RedirectHOC
)(ProfileContainer)
