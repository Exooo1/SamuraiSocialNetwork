import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '6784f4b9-4ed4-48aa-9226-420a03963cad'
    }
})
export type AuthLogin = {
    email: string
    password: string
}

export const loginAPI = {
    getMe() {
        return instance.get(`/auth/me`)
    },
    auth(auth: AuthLogin) {
        return instance.post(`/auth/login`, auth)
    },
    deleteAuth() {
        return instance.post(`auth/logout`)
    }
}