const SEND_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

const messagesReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return

    }
else
    if (action.type === SEND_MESSAGE) {
        const newMessage = this._state.messagesPage.newMessage
        this._state.messagesPage.messageData.push({id: 5, message: newMessage})
        this._state.messagesPage.newMessage = ''
        this._callSubscriber(this._state)
    } else if (action.type === UPDATE_MESSAGE) {
        this._state.messagesPage.newMessage = action.message
        this._callSubscriber(this._state)
    }
default:
    return state
}
}
