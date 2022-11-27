import React from 'react';
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";
import Name from "./Name/Name";

const Messages = () => {
    return (
        <section className={s.messages}>
            <div className={s.names}>
                    <Name id='1' name='Денис'/>
                    <Name id='2' name='Кристина'/>
                    <Name id='3' name='Полина'/>
            </div>
            <div className={s.messages__items}>
            </div>
        </section>
    );
};

export default Messages;
