import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import React, { forwardRef } from "react";
import { selectUser } from "./features/userSlice";
import InputOption from "./InputOption";
import "./Post.css";
import { useSelector } from "react-redux";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const user = useSelector(selectUser);

  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl}> </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p> {description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption
          Icon={ThumbUpOutlined}
          title="like"
          color="gray"
        ></InputOption>
        <InputOption
          Icon={ChatOutlined}
          title="Comments"
          color="gray"
        ></InputOption>
        <InputOption
          Icon={ShareOutlined}
          title="Share"
          color="gray"
        ></InputOption>
        <InputOption
          Icon={SendOutlined}
          title="Send"
          color="gray"
        ></InputOption>
      </div>
    </div>
  );
});

export default Post;
