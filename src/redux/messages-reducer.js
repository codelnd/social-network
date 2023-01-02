const SEND_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

const messagesReducer = (state, action) => {
    // switch (action.type) {
    //     case SEND_MESSAGE:
    //         return
    //
    // }
    if (action.type === SEND_MESSAGE) {
        const newMessage = state.newMessage
        state.messageData.push({id: 5, message: newMessage})
        state.newMessage = ''
    } else if (action.type === UPDATE_MESSAGE) {
        state.newMessage = action.message
    }
    return state
}

export default messagesReducer;
