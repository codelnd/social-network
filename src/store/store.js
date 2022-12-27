const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const ADD_MESSAGE = "ADD_MESSAGE";
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
        } else if (action.type === UPDATE_POST) {
            this._state.profilePage.newPostMessage = action.message
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            const newMessage = {
                id: 5,
                message: this._state.messagesPage.newMessage
            }
            this._state.messagesPage.messageData.push(newMessage)
            this._state.messagesPage.newMessage = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_MESSAGE) {
            this._state.messagesPage.newMessage = action.message
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
        type: UPDATE_POST,
        message: message
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}

export const updateMessageActionCreator = (message) => {
    return {
        type: UPDATE_MESSAGE,
        message: message
    }
}

export default store
