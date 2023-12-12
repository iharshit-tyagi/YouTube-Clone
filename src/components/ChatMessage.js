import React from "react";
import userIcon from "../utils/images/user_icon.png";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="ml-3 mt-2 text-xl text-black flex  items-center shadow-sm">
      <img className="h-8  " alt="userIcon" src={userIcon}></img>
      <p className="font-semibold px-2 my-1">{name + " : "}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
