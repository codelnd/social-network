const SEND_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

const initialState = {
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
}

const messagesReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = state.newMessage
            state.messageData.push({id: 5, message: newMessage})
            state.newMessage = ''
            break;
        case UPDATE_MESSAGE:
            state.newMessage = action.message
            break;
        default:
            return state
    }
    return state
}

export default messagesReducer;


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
