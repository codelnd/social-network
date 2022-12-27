import React from 'react';
import s from './Messages.module.css'
import Name from "./Name/Name";
import Message from "./Message/Message";
import {addMessageActionCreator} from "../../../store/store";

const Messages = (props) => {
    const namesRender = props.messagesPage.nameData.map(n => <Name key={n.id} id={n.id} name={n.name}/>)
    const messagesRender = props.messagesPage.messageData.map(m => <Message key={m.id} message={m.message}/>)
    const messageRef = React.createRef()

    const addMessage = () => {
        const value = messageRef.current.value
        props.dispatch(addMessageActionCreator())
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
                <textarea ref={messageRef}></textarea>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </section>
    );
};

export default Messages;
