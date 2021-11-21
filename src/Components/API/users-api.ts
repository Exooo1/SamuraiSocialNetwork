import axios from 'axios'

export {}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '4762a00d-9a2d-4124-bf54-d57e92931606'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
    },
    followUsers(value: number) {
        return instance.post(`follow/${value}`)
    },
    unfollowUsers(value: number) {
        return instance.delete(`follow/${value}`)
    }
}