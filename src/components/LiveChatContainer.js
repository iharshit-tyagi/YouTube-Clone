import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../utils/LiveChatSlice";
import { randomName, randomMessage } from "../utils/constants";
const LiveChatContainer = () => {
  const dispatch = useDispatch();
  const messageList = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const id = setInterval(() => {
      dispatch(
        addMessage({
          name: randomName(),
          message: randomMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(id);
  }, []);
  return (
    <div className="overflow-y-scroll h-full">
      {messageList.map((msg, idx) => {
        return <ChatMessage key={idx} name={msg.name} message={msg.message} />;
      })}
    </div>
  );
};

export default LiveChatContainer;
