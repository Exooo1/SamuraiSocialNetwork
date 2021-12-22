import React, {memo, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AuthMeTC, GetMeTC} from '../../Redux/AuthReducer'
import {useFormik} from 'formik'
import {StoreType} from '../../Redux/ReduxStore'
import {Redirect} from 'react-router'

type formik = {
    email: string
    password: string
    rememberMe: boolean
}
export const Login = memo(() => {
    const dispatch = useDispatch()
    const resultCode = useSelector<StoreType, number | null>(state => state.authMe.resultCode)
    useEffect(() => {
        dispatch(GetMeTC())
    }, [])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(AuthMeTC(values))
        },
    });
    if (resultCode === 0) return <Redirect to={'/profile'}/>
    return <div>
        <h1>LOGIN</h1>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <br/>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <br/>
            <label htmlFor="remember">RememberMe</label>
            <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
})