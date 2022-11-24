import React from 'react';
import s from "./Name.module.css";
import {NavLink} from "react-router-dom";

const Name = ({id, name}) => {
    return (
        <div className={`${s.name} ${s.active}`}>
            <NavLink to={`/messages/${id}`}>{name}</NavLink>
        </div>
    );
};

export default Name;
