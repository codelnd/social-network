import React, {useRef} from 'react';
import s from './Messages.module.css'
import Name from "./Name/Name";
import Message from "./Message/Message";

const Messages = (props) => {
    const namesRender = props.state.nameData.map(n => <Name key={n.id} id={n.id} name={n.name}/>)
    const messagesRender = props.state.messageData.map(m => <Message key={m.id} message={m.message}/>)
    const messageRef = useRef()
    const addMessage = () => {
        const value = messageRef.current.value
        console.log(value)
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
