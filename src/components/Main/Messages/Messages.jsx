import React from 'react';
import s from './Messages.module.css'

const Messages = () => {
    return (
        <section className={s.dialogs}>
            <div className={s.dialogs__items}>
                <div className={`${s.dialog} ${s.active}`}>
                    Имя 1
                </div>
                <div className={s.dialog}>
                    Имя 2
                </div>
                <div className={s.dialog}>
                    Имя 3
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
