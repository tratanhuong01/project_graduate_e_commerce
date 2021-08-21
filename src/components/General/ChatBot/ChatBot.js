import React, { useState } from "react";
import ModalChatBot from "./ModalChatBot/ModalChatBot";

function ChatBot(props) {
  //
  const [chatBots, setChatBots] = useState();
  //
  return (
    <>
      {!chatBots && (
        <div
          onClick={() => setChatBots(true)}
          className="fixed right-8 bottom-8 rounded-full bg-organce flex items-center 
        justify-center w-16 h-16 shadow-xl-organce z-50"
        >
          <span
            className="bx bx-chat text-3xl flex items-center cursor-pointer
        justify-center text-white "
          ></span>
        </div>
      )}
      {chatBots && <ModalChatBot setChatBots={setChatBots} />}
    </>
  );
}

export default ChatBot;
