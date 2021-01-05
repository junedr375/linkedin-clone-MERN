import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";

import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationIcon from "@material-ui/icons/Notifications";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        ></img>

        <div className="header__search">
          <SearchIcon></SearchIcon>
          <input placeholder="Search" type="text"></input>
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
          avatar={true}
          title="Me"
          onClick={logoutOfApp}
        ></HeaderOption>
      </div>
    </div>
  );
}

export default Header;
