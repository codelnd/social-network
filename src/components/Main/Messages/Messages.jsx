import React from 'react';
import s from './Messages.module.css'
import Name from "./Name/Name";
import Message from "./Message/Message";

const Messages = () => {
    const nameData = [
        {
            id: 1,
            name: 'Денис'
        },
        {
            id: 2,
            name: 'Ваня'
        }, {
            id: 3,
            name: 'Виталя'
        }, {
            id: 4,
            name: 'Полина'
        },
    ]
    const messageData = [
        {
            id: 1,
            message: 'Hi, bro'
        },
        {
            id: 2,
            message: 'Ok'
        },
        {
            id: 3,
            message: 'What is it?'
        },
        {
            id: 4,
            message: 'How are you?'
        },
    ]
    return (
        <section className={s.messages}>
            <div className={s.names}>
                {nameData.map(n => <Name key={n.id} id={n.id} name={n.name}/>)}
            </div>
            <div className={s.messages__items}>
                {messageData.map(m => <Message key={m.id} message={m.message}/>)}
            </div>
        </section>
    );
};

export default Messages;
