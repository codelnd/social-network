import React from 'react';
import {sendMessageCreator, updateMessageCreator} from "../../../redux/messages-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    const state = props.store.getState().messagesPage

    const sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const updateNewMessageText = (message) => {
        const action = updateMessageCreator(message);
        props.store.dispatch(action)
    }

    return (
        <Messages sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} nameData={state.nameData}
                  messageData={state.messageData} newMessage={state.newMessage}/>
    );
};

export default MessagesContainer;
