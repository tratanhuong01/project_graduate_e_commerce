import React from "react";
import ContentChatTop from "../../SupportLiveChat/ContentChatTop/ContentChatTop";
import FormChatBot from "./FormChatBot/FormChatBot";

function ModalChatBot(props) {
  //
  const { setInfoChat, setGroupChat, userSupport } = props;
  //
  return (
    <div className="fixed right-8 bottom-8 z-second" style={{ width: 380 }}>
      <div className="w-full rounded-lg bg-white shadow-lg">
        <ContentChatTop setInfoChat={setInfoChat} userSupport={userSupport} />
        <div className="w-full py-2 text-xs border-b-2 border-solid border-gray-300">
          &nbsp;&nbsp;&nbsp;&nbsp;Xin chào mừng quý khách đến với hỗ trợ trực
          tuyến!&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="w-full py-2 px-3">
          <FormChatBot setGroupChat={setGroupChat} userSupport={userSupport} />
        </div>
      </div>
    </div>
  );
}

export default ModalChatBot;
