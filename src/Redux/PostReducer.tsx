export interface PostTypes {
    id: number
    src: string
    text: string
}

export type PostIinitialTypes = {
    posts: Array<PostTypes>
}

const initialPostState: PostIinitialTypes = {
    posts: [
        {
            id: 1,
            src: 'https://api.time.com/wp-content/uploads/2021/03/nft-art-2.jpg',
            text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It'
        },
        {
            id: 2,
            src: 'https://api.time.com/wp-content/uploads/2021/03/nft-art-2.jpg',
            text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It'
        },
        {
            id: 3,
            src: 'https://api.time.com/wp-content/uploads/2021/03/nft-art-2.jpg',
            text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It'
        },
        {
            id: 4,
            src: 'https://api.time.com/wp-content/uploads/2021/03/nft-art-2.jpg',
            text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It'
        },
        {
            id: 5,
            src: 'https://api.time.com/wp-content/uploads/2021/03/nft-art-2.jpg',
            text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It'
        },
    ]
}

export const PostReducer = (state = initialPostState, action: ActionPostType): PostIinitialTypes => {
    switch (action.type) {
        case 'ADD_POST':
            const obj = {
                id: 7,
                src: 'https://api.time.com/wp-content/uploads/2021/03/nft-art-2.jpg',
                text: action.post
            }
            console.log(state)
            return {
                ...state,
                posts: [...state.posts, obj]
            }
        default:
            return state
    }
}

export type ActionPostType = ReturnType<typeof addPostActionCreator>

export const addPostActionCreator = (post: string) => {
    return {
        type: 'ADD_POST',
        post
    } as const
}

