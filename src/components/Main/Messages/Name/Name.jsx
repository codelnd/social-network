import React from "react";
import s from "./Name.module.css";
import { NavLink } from "react-router-dom";

const Name = (props) => {
  return (
    <NavLink
      className={(navLink) => (navLink.isActive ? s.active : s.link)}
      to={`/messages/${props.id}`}
    >
      {props.name}
    </NavLink>
  );
};

export default Name;
