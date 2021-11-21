import axios from 'axios'

export {}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '4762a00d-9a2d-4124-bf54-d57e92931606'
    }
})

export const profileAPI = {
    getMe() {
        return instance.get(`/auth/me`)
    }
}