import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '6784f4b9-4ed4-48aa-9226-420a03963cad'
    }
})

export const profileAPI = {
    changeStatus(status: string) {
        return instance.put(`/profile/status`, {status})
    },
    getStatus(userID: string) {
        return instance.get(`profile/status/${userID}`)
    },
    getProfile(userID: string) {
        return instance.get(`profile/${userID}`)
    }
}