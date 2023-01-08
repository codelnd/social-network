import React from 'react';
import s from './Messages.module.css'
import Name from "./Name/Name";
import Message from "./Message/Message";
import {sendMessageCreator, updateMessageCreator} from "../../../redux/messages-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    const state = props.store.getState().messagesPage
    // const namesRender = state.nameData.map(n => <Name key={n.id} id={n.id} name={n.name}/>)
    // const messagesRender = state.messageData.map(m => <Message key={m.id} message={m.message}/>)
    // const messageTextValue = state.newMessage;

    const sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const updateNewMessageText = (e) => {
        let message = e.target.value
        const action = updateMessageCreator(message);
        props.store.dispatch(action)
    }

    return (
        <Messages sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} nameData={state.nameData}
                  messageData={state.messageData} newMessage={state.newMessage}/>
    );
};

export default MessagesContainer;
