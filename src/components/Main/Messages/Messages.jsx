import React from 'react';
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

const Messages = () => {
    return (
        <section className={s.messages}>
            <div className={s.names}>
                <div className={`${s.name} ${s.active}`}>
                   <NavLink to='/messages/1'>Денис</NavLink>
                </div>
                <div className={s.name}>
                    <NavLink to='/messages/2'>Кристина</NavLink>
                </div>
                <div className={s.name}>
                    <NavLink to='/messages/3'>Полина</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Сообщение 1</div>
                <div className={s.message}>Сообщение 2</div>
                <div className={s.message}>Сообщение 3</div>
            </div>
        </section>
    );
};

export default Messages;
