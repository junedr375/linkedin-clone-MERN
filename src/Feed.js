import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon></CreateIcon>
          <form>
            <input type="text"></input>
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption
            title="Photo"
            Icon={ImageIcon}
            color="#70b5f9"
          ></InputOption>
          <InputOption
            title="Video"
            Icon={SubscriptionIcon}
            color="#e7a33e"
          ></InputOption>
          <InputOption
            title="Event"
            Icon={EventIcon}
            color="#C0CBCD"
          ></InputOption>
          <InputOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#7fc15e"
          ></InputOption>
        </div>
      </div>

      <Post
        name="junedr375"
        description="flutter and MERN Developer"
        message="     Message goes herer Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Adipisci, magni a doloribus ad dolor quaerat sunt temporibus
      sint, dolores corporis nam pariatur officiis cumque est enim
      praesentium quod velit eveniet."
        photoUrl="https://avatars2.githubusercontent.com/u/49837673?s=460&u=367d06d74dfaac2be14becdc37ffa922808c3827&v=4"
      ></Post>
    </div>
  );
}

export default Feed;
