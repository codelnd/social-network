const state = {
    messagesPage: {
        nameData: [
            {
                id: 1,
                name: 'Денис'
            },
            {
                id: 2,
                name: 'Ваня'
            }, {
                id: 3,
                name: 'Виталя'
            }, {
                id: 4,
                name: 'Полина'
            },
        ],
        messageData: [
            {
                id: 1,
                message: 'Hi, bro'
            },
            {
                id: 2,
                message: 'Ok'
            },
            {
                id: 3,
                message: 'What is it?'
            },
            {
                id: 4,
                message: 'How are you?'
            },
        ],
    },
    profilePage: {
        postData: [
            {
                id: 1,
                message: 'Всем привет',
                likes: 10
            },
            {
                id: 2,
                message: 'Мой первый пост',
                likes: 4
            },
            {
                id: 3,
                message: 'Освоил redux!',
                likes: 99
            },
        ],
        newPostMessage: ''
    },
}

export let rerender = () => {
    console.log('Заглушка')
}

export const addPost = () => {
    const newPost = {
        id: 4,
        message: state.profilePage.newPostMessage,
        likes: 0
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostMessage = ''
    rerender(state)
}

export const updatePostMessage = (message) => {
    state.profilePage.newPostMessage = message
    rerender(state)
}

export const subscribe = (observer) => {
    rerender = observer
}


export default state
