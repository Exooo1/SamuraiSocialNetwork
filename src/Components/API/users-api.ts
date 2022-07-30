import axios from 'axios'

export {}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '6784f4b9-4ed4-48aa-9226-420a03963cad'
    }
})

type UserType = {
    followed: boolean
    id: number
    name: string
    photos: { small: null, large: null }
    status: null
    uniqueUrlName: null
}
type GetUsers = {
    error: null
    items: Array<UserType>
    totalCount: number
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsers>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
    },
    followUsers(value: number) {
        return instance.post(`follow/${value}`)
    },
    unfollowUsers(value: number) {
        return instance.delete(`follow/${value}`)
    }
}