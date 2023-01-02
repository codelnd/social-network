const SEND_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

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
