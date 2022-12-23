const store = {
    _state: {
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
    },

    _callSubscriber() {
        console.log('no subscribers')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    addPost() {
        const newPost = {
            id: 4,
            message: this._state.profilePage.newPostMessage,
            likes: 0
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostMessage = ''
        this._callSubscriber(this._state)
    },

    updatePost(message) {
        this._state.profilePage.newPostMessage = message
        this._callSubscriber(this._state)
    }

}

export default store
