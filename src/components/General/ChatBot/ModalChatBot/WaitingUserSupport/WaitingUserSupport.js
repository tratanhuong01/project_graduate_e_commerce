import React from "react";
import chat__bot__image__waiting from "../../../../../assets/images/chat__bot__image__waiting.png";
function WaitingUserSupport({ setInfoChat }) {
  //
  //
  return (
    <div
      className="fixed right-8 bottom-8 z-second"
      style={{ width: 380, height: 510 }}
    >
      <div className="w-full rounded-lg bg-white dark:bg-dark-third shadow-lg">
        <div
          className="w-full p-2 flex justify-between h-16 items-center border-2 border-solid 
        border-gray-200 dark:border-gray-300 dark:text-white shadow-lg"
        >
          <div className="flex items-center">
            <i className="fas fa-sync fa-spin text-organce text-2xl mr-4"></i>
            <div>
              <span className="font-semibold">Đang chờ nhân viên hổ trợ</span>
              <br></br>
              <span className="text-xs text-gray-600 dark:text-gray-300">
                Vui lòng chờ...
              </span>
            </div>
          </div>
          <div className="text-gray-600 pr-2 relative flex items-center justify-end">
            <i
              onClick={() => setInfoChat(false)}
              className="bx bx-x text-4xl ml-6 cursor-pointer"
            ></i>
          </div>
        </div>
        <div className="w-full py-2 text-xl text-gray-600 px-4 text-center border-b-2 border-solid border-gray-300 dark:text-gray-300">
          Xin chào mừng quý khách đến với hỗ trợ trực tuyến
        </div>
        <div className="w-full py-2 px-3" style={{ height: 360 }}>
          <div className="w-full my-2 relative flex items-center justify-center h-full">
            <img
              src={chat__bot__image__waiting}
              alt=""
              className="w-11/12 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingUserSupport;
