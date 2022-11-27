import React from 'react';
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";
import Name from "./Name/Name";
import Message from "./Message/Message";

const Messages = () => {
    return (
        <section className={s.messages}>
            <div className={s.names}>
                    <Name id='1' name='Денис'/>
                    <Name id='2' name='Кристина'/>
                    <Name id='3' name='Полина'/>
            </div>
            <div className={s.messages__items}>
                <Message message="Hi, bro"/>
                <Message message="How are you?"/>
                <Message message="What is it?"/>
            </div>
        </section>
    );
};

export default Messages;
