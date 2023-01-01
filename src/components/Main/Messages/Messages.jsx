import React from 'react';
import s from './Messages.module.css'
import Name from "./Name/Name";
import Message from "./Message/Message";
import {sendMessageCreator, updateMessageCreator} from "../../../store/store";

const Messages = (props) => {
    const namesRender = props.messagesPage.nameData.map(n => <Name key={n.id} id={n.id} name={n.name}/>)
    const messagesRender = props.messagesPage.messageData.map(m => <Message key={m.id} message={m.message}/>)
    const messageTextValue = props.newMessage;

    const sendMessage = () => {
        props.dispatch(sendMessageCreator())
    }

    const onMessageChange = (e) => {
        let message = e.target.value
        const action = updateMessageCreator(message);
        props.dispatch(action)
    }

    return (
        <section className={s.messages}>
            <div className={s.names}>
                {namesRender}
            </div>
            <div className={s.messages__items}>
                {messagesRender}
            </div>
            <div>
                <textarea onChange={onMessageChange} value={messageTextValue}/>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </section>
    );
};

export default Messages;
