import React from 'react';
import s from './Messages.module.css'
import Name from "./Name/Name";
import Message from "./Message/Message";


const Messages = (props) => {
    const namesRender = props.nameData.map(n => <Name key={n.id} id={n.id} name={n.name}/>)
    const messagesRender = props.messageData.map(m => <Message key={m.id} message={m.message}/>)
    const messageTextValue = props.newMessage;

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onMessageChange = (e) => {
        let message = e.target.value
        props.updateNewMessageText(message)
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
                <button onClick={onSendMessage}>Отправить</button>
            </div>
        </section>
    );
};

export default Messages;
