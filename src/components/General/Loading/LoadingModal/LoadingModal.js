import React from "react";

function LoadingModal(props) {
  return (
    <div
      className="w-full h-full fixed top-0 left-0 bg-opacity-50 z-50
    bg-white"
    >
      <div className="w-full h-full relative">
        <img
          src="/images/loading.gif"
          alt=""
          className="w-20 h-20 rounded-full absolute top-1/2 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default LoadingModal;
