import React from 'react';
import s from './Messages.module.css'
import Name from "./Name/Name";
import Message from "./Message/Message";
import {sendMessageCreator, updateMessageCreator} from "../../../store/store";

const Messages = (props) => {
    const namesRender = props.messagesPage.nameData.map(n => <Name key={n.id} id={n.id} name={n.name}/>)
    const messagesRender = props.messagesPage.messageData.map(m => <Message key={m.id} message={m.message}/>)
    const messageRef = React.createRef()

    const addMessage = () => {
        props.dispatch(sendMessageCreator())
    }

    const onMessageChange = () => {
        const message = messageRef.current.value
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
                <textarea ref={messageRef} onChange={onMessageChange} value={props.newMessage}/>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </section>
    );
};

export default Messages;
