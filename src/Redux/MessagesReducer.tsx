export type MessagesTypes = {
    id: number
    src: string
    time: string
    name: string
    text: string
}

export type MessagesInitialState = typeof initalState

const initalState = {
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
    ] as Array<MessagesTypes>,
}

export const MessagesReducer = (state = initalState, action: ActionMessagesType): MessagesInitialState => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            const mess = {
                id: 6,
                src: 'https://i.pinimg.com/564x/49/60/32/496032fb38b76e5bc22f8eb1d4a5d9be.jpg',
                time: '19:00',
                name: 'ITECHART',
                text: action.text
            }
            return {
                ...state,
                messages: [...state.messages, mess]
            }
        default:
            return {...state}
    }
}

export type ActionMessagesType = ReturnType<typeof addMessageActionCreator>

export const addMessageActionCreator = (text: string) => {
    return {
        type: 'ADD_MESSAGE',
        text
    } as const
}