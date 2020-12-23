import React from "react";
import "./Header.css";

import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        ></img>

        <div className="header__search">
          <SearchIcon></SearchIcon>
          <input type="text"></input>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
        <HeaderOption
          Icon={SupervisorAccountIcon}
          title="Network"
        ></HeaderOption>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
        <HeaderOption Icon={ChatIcon} title="Messanging"></HeaderOption>
        <HeaderOption
          Icon={NotificationIcon}
          title="Notification"
        ></HeaderOption>
        <HeaderOption
          avatar="https://avatars2.githubusercontent.com/u/49837673?s=460&u=367d06d74dfaac2be14becdc37ffa922808c3827&v=4"
          title="Me"
        ></HeaderOption>
      </div>
    </div>
  );
}

export default Header;
