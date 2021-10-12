export {}

export type ActionType = ReturnType<typeof followUnfollowAC>

export type UserType = {
    id: number
    name: string
    surname: string
    country: string
    city: string
    folUn: boolean
    src:string
}

export type UsersType = typeof initialUser

const initialUser = {
    users: [{id: 1, name: 'Vlas', surname: 'Maskalenchik', country: 'Belarus', city: 'Minsk', folUn: false,src:'https://www.pngitem.com/pimgs/m/192-1926160_transparent-ajax-png-anime-profile-png-download.png'},
        {id: 2, name: 'Diana', surname: 'Maskalenchik', country: 'Belarus', city: 'Minsk', folUn: false,src:'https://www.pngitem.com/pimgs/m/192-1926160_transparent-ajax-png-anime-profile-png-download.png'},
        {id: 3, name: 'Vlad', surname: 'Maskalenchik', country: 'Ukraine', city: 'Bobruisk', folUn: false,src:'https://www.pngitem.com/pimgs/m/192-1926160_transparent-ajax-png-anime-profile-png-download.png'},
        {id: 4, name: 'Evgeniy', surname: 'Maskalenchik', country: 'Russia', city: 'Gomel', folUn: false,src:'https://www.pngitem.com/pimgs/m/192-1926160_transparent-ajax-png-anime-profile-png-download.png'},
    ] as Array<UserType>
}

export const UserReducer = (state = initialUser, action: ActionType) => {
    switch (action.type) {
        case 'FOLLOW_UNFOLLOW':
            return {
                ...state,
                users: [...state.users.map(item => item.id === action.value ? {
                    ...item,
                    folUn: !item.folUn
                } : {...item})]
            }
        default:
            return {...state}
    }
}

export const followUnfollowAC = (value: number) => {
    return {
        type: 'FOLLOW_UNFOLLOW',
        value
    }
}

