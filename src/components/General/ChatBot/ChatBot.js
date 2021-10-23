import React, { useEffect, useState } from "react";
import SupportLiveRight from "../SupportLiveChat/SupportLiveRight";
import ModalChatBot from "./ModalChatBot/ModalChatBot";
import WaitingUserSupport from "./ModalChatBot/WaitingUserSupport/WaitingUserSupport";
import * as messagesAction from "../../../actions/messages/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function ChatBot(props) {
  //
  const [infoChat, setInfoChat] = useState(false);
  const dispatch = useDispatch();
  const { user, messages } = useSelector((state) => {
    return {
      messages: state.messages,
      user: state.user,
    };
  });
  useEffect(() => {
    //
    let timeOut;
    if (!messages.group)
      if (infoChat)
        if (!messages.admin)
          timeOut = setTimeout(() => {
            dispatch(messagesAction.randomUserSupportLiveRequest());
          }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infoChat]);
  //
  return (
    <>
      {!infoChat && (
        <div
          onClick={() => setInfoChat(true)}
          className="fixed right-8 bottom-8 rounded-full bg-organce flex items-center 
          justify-center w-16 h-16 shadow-xl-organce z-50"
        >
          <span
            className="bx bx-chat text-3xl flex items-center cursor-pointer
          justify-center text-white "
          ></span>
        </div>
      )}
      {infoChat ? (
        messages.admin === null || messages.admin === "" ? (
          <WaitingUserSupport />
        ) : messages.group ? (
          <SupportLiveRight setInfoChat={setInfoChat} />
        ) : (
          <ModalChatBot setInfoChat={setInfoChat} />
        )
      ) : (
        ""
      )}
    </>
  );
}

export default ChatBot;
