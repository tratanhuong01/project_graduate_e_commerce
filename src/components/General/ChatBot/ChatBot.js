import React, { useEffect, useState } from "react";
import SupportLiveRight from "../SupportLiveChat/SupportLiveRight";
import ModalChatBot from "./ModalChatBot/ModalChatBot";
import * as userApi from "../../../api/userApi";
import WaitingUserSupport from "./ModalChatBot/WaitingUserSupport/WaitingUserSupport";

function ChatBot(props) {
  //
  const [infoChat, setInfoChat] = useState(false);
  const [groupChat, setGroupChat] = useState(null);
  const [userSupport, setUserSupport] = useState(null);
  useEffect(() => {
    //
    let timeOut;
    let unmounted = false;
    async function fetch() {
      const result = await userApi.getTeleSupport();
      if (unmounted) return;
      setUserSupport(result.data);
    }
    if (groupChat === null)
      if (infoChat) {
        timeOut = setTimeout(() => {
          fetch();
        }, 2000);
      }
    return () => {
      unmounted = true;
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
        userSupport === null || userSupport === "" ? (
          <WaitingUserSupport />
        ) : groupChat ? (
          <SupportLiveRight
            setInfoChat={setInfoChat}
            groupChat={groupChat}
            userSupport={userSupport}
          />
        ) : (
          <ModalChatBot
            setInfoChat={setInfoChat}
            setGroupChat={setGroupChat}
            userSupport={userSupport}
          />
        )
      ) : (
        ""
      )}
    </>
  );
}

export default ChatBot;
