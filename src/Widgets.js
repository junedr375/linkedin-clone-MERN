import { FiberManualRecord } from "@material-ui/icons";
import InfoIcon from "@material-ui/icons/Info";
import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord></FiberManualRecord>
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon></InfoIcon>
      </div>
      {newsArticle("MERN Developer", "Top Mern Devs 9999 Readers")}
      {newsArticle("Flutter Developer", "Flutter Devs 1399 Readers")}
      {newsArticle("GitHub Launch", "Added Dark Theme 6232 Readers")}
      {newsArticle("Firebase Update", "Host onClick of Button 349 Readers")}
    </div>
  );
}

export default Widgets;
