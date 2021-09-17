import React from "react";

function ItemLoadingChat(props) {
  //
  const { admin } = props;
  //
  return (
    <div title="3727438274837824" className={`w-full flex my-2 justify-start`}>
      <div className={`max-w-3/4 flex items-center`}>
        <div className="w-10 h-10 relative">
          <img
            src={admin.avatar}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="w-2.5 h-2.5 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
        </div>
        <div
          className={`ml-4 rounded-lg h-10 items-center text-sm bg-gray-200 text-gray-700 w-16 px-2 flex justify-center transform scale-90`}
        >
          <div className="dot-typing"></div>
        </div>
      </div>
    </div>
  );
}

export default ItemLoadingChat;
