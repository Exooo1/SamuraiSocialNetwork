import axios from 'axios'
import React, {useEffect} from 'react'
import {Redirect, RouteComponentProps, useHistory, useParams, withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {ActionPostType, PostIinitialTypes} from '../../Redux/PostReducer'
import {AddProfileAC, InitialProfileType} from '../../Redux/ProfileReducer'
import {StoreType, useAppSelector} from '../../Redux/ReduxStore'
import {Profile} from './Profile'
import {AuthReducerType} from '../../Redux/AuthReducer'
import {Login} from '../Login/Login'
import {RedirectHOC} from '../HOC/RedirectHOC'
import { compose } from 'redux'

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
    const getAuth = useAppSelector<number>(state => state.authMe.resultCode)
    const getProfile = useAppSelector<InitialProfileType>(state => state.profile)
    const dispatche = useDispatch()
    useEffect(() => {
        if (!token.userId) {
            token.userId = '14470'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + token.userId).then(res => {
            dispatche(AddProfileAC(res.data))
        })
    }, [])

    // if (getAuth === 1) return <Redirect to={'/login'}/>
    return <div>
        {getProfile ? <Profile about={getProfile.user.aboutMe} fullName={getProfile.user.fullName}
                               photos={getProfile.user.photos}
                               lookingForAJob={getProfile.user.lookingForAJob}
                               lookingForAJobDescription={'asd'}

        /> : null}
    </div>
}
// export const ContainerParams = withRouter(ProfileContainer)

export default compose<React.ComponentType>(RedirectHOC
)(ProfileContainer)
