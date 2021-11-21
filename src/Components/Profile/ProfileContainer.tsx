import axios from 'axios'
import React, {useEffect} from 'react'
import {Redirect, RouteComponentProps, useHistory, useParams, withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {ActionPostType, PostIinitialTypes} from '../../Redux/PostReducer'
import {AddProfileAC, InitialProfileType} from '../../Redux/ProfileReducer'
import {StoreType} from '../../Redux/ReduxStore'
import {Profile} from './Profile'
import {AuthReducerType} from '../../Redux/AuthReducer'
import {Login} from '../Login/Login'

type MyPageType = {
    posts: PostIinitialTypes
    dispatch: (text: ActionPostType) => void
}
type QuizParams = {
    userId: string;
};
type PathParamsType = {
    userId: string
}

type TypeRouter = RouteComponentProps<PathParamsType> & MyPageType

export const ProfileContainer: React.FC<TypeRouter> = ({posts, dispatch, ...props}) => {
    let token = useParams<QuizParams>()
    const getAuth = useSelector<StoreType, number>(state => state.authMe.resultCode)
    console.log(getAuth)
    const getProfile = useSelector<StoreType, InitialProfileType>(state => state.profile)
    console.log(getProfile, getAuth)
    const dispatche = useDispatch()
    useEffect(() => {
        if (!token.userId) {
            token.userId = '14470'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + token.userId).then(res => {
            dispatche(AddProfileAC(res.data))
        })
    }, [])

    if (getAuth === 1) return <Redirect to={'/login'}/>
    return <div>
        {getProfile ? <Profile about={getProfile.user.aboutMe} fullName={getProfile.user.fullName}
                               photos={getProfile.user.photos}
                               lookingForAJob={getProfile.user.lookingForAJob}
                               lookingForAJobDescription={'asd'}

        /> : null}
    </div>
}
export const ContainerParams = withRouter(ProfileContainer)
