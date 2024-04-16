import { useEffect, useState } from "react";
import socket from "../../socket";

const ChatPlaceHolder = ({setLatestChatsData }) => {


  useEffect(() => {
    const messageReceivedListener = (message) => {
      console.log(message, message)
      const data = { contactId: message?.senderId, userId: message?.receiverId };
      socket.emit('increase pending count', data);
      console.log("function emit")
    };

    const messageCountListener = (data) => {
      console.log(data, "message counter listner lisitng");
      setLatestChatsData(data);
    };

    socket.on('message received', messageReceivedListener);
    socket.on('updating pending count', messageCountListener);

    return () => {
      socket.off('message received', messageReceivedListener);
      socket.off('updating pending count', messageCountListener);
    };
  });


  return (
    <div className="chat d-flex align-items-center justify-content-center" id="middle">
      <div className="slimscroll">
        <div className="placeholder-content text-center">
          <h3 className=" fw-bold  empty-placeholder-chat-text">Please select a contact to start a chat.</h3>
        </div>
      </div>
    </div>
  );
};

export default ChatPlaceHolder;