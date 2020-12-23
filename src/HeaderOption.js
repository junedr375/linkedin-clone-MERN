import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon"></Icon>}
      {avatar && <Avatar className="headerOption__icon" src={avatar}></Avatar>}
      <h11 className="headerOption__title">{title}</h11>
    </div>
  );
}

export default HeaderOption;
