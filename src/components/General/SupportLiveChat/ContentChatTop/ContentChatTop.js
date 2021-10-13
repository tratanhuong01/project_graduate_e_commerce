import React from "react";
import { useSelector } from "react-redux";

function ContentChatTop(props) {
  //
  const messages = useSelector((state) => state.messages);
  const { setInfoChat } = props;
  //
  return (
    <div
      className="w-full p-2 flex justify-between h-16 items-center border-2 border-solid 
    border-gray-200 shadow-lg dark:border-dark-third"
    >
      <div className="flex">
        <div className="w-12 h-12 relative">
          <img
            src={messages.admin.avatar}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="w-3 h-3 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
        </div>
        <span className="font-semibold flex items-center pl-4 flex-wrap dark:text-white">
          {`${messages.admin.firstName} ${messages.admin.lastName}`}
          <span className="text-gray-600 text-xs w-full dark:text-gray-300 dark:text-gray-300">
            Đang hoạt động
          </span>
        </span>
      </div>

      <div className="text-gray-600 pr-2 relative flex items-center justify-end dark:text-gray-300">
        <i className="fas fa-search text-xl cursor-pointer" />
        <i
          onClick={() => setInfoChat(false)}
          className="bx bx-x text-4xl ml-6 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ContentChatTop;
