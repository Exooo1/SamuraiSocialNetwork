export {}
let render = () => { }

export interface MessagesTypes {
    id: number
    src: string
    time: string
    name: string
    text: string
}

export interface PostTypes {
    id: number
    src: string
    text: string
}

export interface ObjectTypes {
    messages: Array<MessagesTypes>
    posts: Array<PostTypes>
}

export const state: ObjectTypes = {
    messages: [
        {
            id: 1,
            src: 'https://i.pinimg.com/564x/49/60/32/496032fb38b76e5bc22f8eb1d4a5d9be.jpg',
            time: '22:30',
            name: 'Vlas Maskalenchik',
            text: 'Текст песни группы «Сплин» «Помолчим немного» был прислан Александру Васильеву поклонником на электронную почту. Музыканту понравилось произведение и после произведенной дополнительной редакции он включил его в репертуар коллектива.'
        },
        {
            id: 2,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvU_Y6exaVJGi1UXKPPalXzCo7fhDPWUT9w&usqp=CAU',
            time: '12:30',
            name: 'Vlad Molchanov',
            text: 'Текст песни группы «Сплин» «Помолчим немного» был прислан Александру Васильеву поклонником на электронную почту. Музыканту понравилось произведение и после произведенной дополнительной редакции он включил его в репертуар коллектива.'
        },
        {
            id: 3,
            src: 'https://i.pinimg.com/564x/49/60/32/496032fb38b76e5bc22f8eb1d4a5d9be.jpg',
            time: '07:30',
            name: 'Vlad Pas',
            text: 'Текст песни группы «Сплин» «Помолчим немного» был прислан Александру Васильеву поклонником на электронную почту. Музыканту понравилось произведение и после произведенной дополнительной редакции он включил его в репертуар коллектива.'
        },
        {
            id: 4,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvU_Y6exaVJGi1UXKPPalXzCo7fhDPWUT9w&usqp=CAU',
            time: '15:30',
            name: 'Mikhail Novickiy',
            text: 'Текст песни группы «Сплин» «Помолчим немного» был прислан Александру Васильеву поклонником на электронную почту. Музыканту понравилось произведение и после произведенной дополнительной редакции он включил его в репертуар коллектива.'
        },
        {
            id: 5,
            src: 'https://wallpaperaccess.com/full/3746815.jpg',
            time: '09:30',
            name: 'Diana Maskalenchik',
            text: 'Текст песни группы «Сплин» «Помолчим немного» был прислан Александру Васильеву поклонником на электронную почту. Музыканту понравилось произведение и после произведенной дополнительной редакции он включил его в репертуар коллектива.'
        },
    ],
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

export const add = (text: string) => {
    const obj = {
        id: 7,
        src: 'https://api.time.com/wp-content/uploads/2021/03/nft-art-2.jpg',
        text: text
    }
    state.posts.push(obj)
    render()
}

export const subscribe = (observer: () => void) => {
    render = observer
}
