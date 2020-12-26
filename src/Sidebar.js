import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.zipjob.com/blog/wp-content/uploads/2020/08/linkedin-default-background-cover-photo-1.png"
          alt=""
        ></img>
        <Avatar className="sidebar__avatar"></Avatar>
        <h2>Juned Raza</h2>
        <h4>junedr375@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">3,555</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("flutter")}
        {recentItem("app dev")}
        {recentItem("programming")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
