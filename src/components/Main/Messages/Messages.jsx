import React from 'react';
import s from './Messages.module.css'
import Name from "./Name/Name";
import Message from "./Message/Message";
import {sendMessageCreator, updateMessageCreator} from "../../../store/store";

const Messages = (props) => {
    const namesRender = props.store.getState().messagesPage.nameData.map(n => <Name key={n.id} id={n.id} name={n.name}/>)
    const messagesRender = props.store.getState().messagesPage.messageData.map(m => <Message key={m.id} message={m.message}/>)
    const messageTextValue = props.store.getState().messagesPage.newMessage;
    console.log(props.store)

    const sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onMessageChange = (e) => {
        let message = e.target.value
        const action = updateMessageCreator(message);
        props.store.dispatch(action)
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
