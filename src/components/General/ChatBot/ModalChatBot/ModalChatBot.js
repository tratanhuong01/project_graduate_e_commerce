import React from "react";
import FormChatBot from "./FormChatBot/FormChatBot";

function ModalChatBot(props) {
  //
  const { setChatBot } = props;
  //
  return (
    <div className="fixed right-8 bottom-8 z-40" style={{ width: 360 }}>
      <div className="w-full rounded-lg bg-white shadow-lg h-full  ">
        <div className="w-full bg-organce py-2 relative h-10 rounded-t-lg">
          <span
            onClick={() => setChatBot(false)}
            className="absolute top-1.5 cursor-pointer right-3 text-xl text-white"
          >
            &times;
          </span>
        </div>
        <div className="w-full py-2 text-xs border-b-2 border-solid border-gray-300">
          &nbsp;&nbsp;&nbsp;&nbsp;Xin chào mừng quý khách đến với hỗ trợ trực
          tuyến!&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="w-full py-2 px-3">
          <FormChatBot />
        </div>
      </div>
    </div>
  );
}

export default ModalChatBot;
