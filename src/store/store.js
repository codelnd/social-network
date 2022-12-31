const ADD_POST = "ADD_POST";
const UPDATE_POST_MESSAGE = "UPDATE_POST";
const SEND_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

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
            newMessage: '',
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
            newPostMessage: '',
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

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 4,
                message: this._state.profilePage.newPostMessage,
                likes: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostMessage = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_POST_MESSAGE) {
            this._state.profilePage.newPostMessage = action.message
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            const newMessage = this._state.messagesPage.newMessage
            this._state.messagesPage.messageData.push({id: 5, message: newMessage})
            this._state.messagesPage.newMessage = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_MESSAGE) {
            this._state.messagesPage.newMessage = action.body
            this._callSubscriber(this._state)
        }
    },
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updatePostActionCreator = (message) => {
    return {
        type: UPDATE_POST_MESSAGE,
        message: message
    }
}

export const addMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateMessageActionCreator = (message) => {
    return {
        type: UPDATE_MESSAGE,
        body: message
    }
}

export default store
