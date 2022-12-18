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
        ]
    },
}

export const addPost = (message) => {
    const newPost = {
        id: 4,
        message,
        likes: 0
    }
    state.profilePage.postData.push(newPost)
    console.log(state.profilePage.postData)
}

export default state
