import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)
    },
}

export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updatePostCreator = (message) => {
    return {
        type: UPDATE_POST_MESSAGE,
        message: message
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateMessageCreator = (message) => {
    return {
        type: UPDATE_MESSAGE,
        message: message
    }
}

export default store
