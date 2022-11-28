import React from "react";
import s from "./Name.module.css";
import { NavLink } from "react-router-dom";

const Name = ({ id, name }) => {
  return (
    <NavLink
      className={(navLink) => (navLink.isActive ? s.active : s.link)}
      to={`/messages/${id}`}
    >
      {name}
    </NavLink>
  );
};

export default Name;
