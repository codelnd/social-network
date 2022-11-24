import React from 'react';
import s from "../Messages.module.css";

const Name = ({id, name}) => {
    return (
        <div className={`${s.name} ${s.active}`}>

        </div>
    );
};

export default Name;
