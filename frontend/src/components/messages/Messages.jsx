import React from "react";
import { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../Hooks/useGetMessages";
import "../../App.css";
import MessageSkeleton from "../skeleton/MessageSkeleton";
const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  // console.log(messages);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto hide-scrollbar ">
      {!loading &&
        messages.length > 0 &&
        messages.map((message,idx) => (
          <div key={message._id}  ref={idx === messages.length - 1 ? lastMessageRef : null}>
            {message && <Message message={message} />}
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
