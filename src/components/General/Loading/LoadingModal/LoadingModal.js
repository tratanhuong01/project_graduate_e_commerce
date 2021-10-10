import React from "react";

function LoadingModal(props) {
  return (
    <div
      className="w-full h-full fixed top-0 left-0 bg-opacity-60 z-40
    bg-white"
    >
      <div className="w-full h-full relative flex items-center justify-center">
        <i className="fas fa-circle-notch fa-spin rounded-full cursor-pointer text-5xl text-organce"></i>
      </div>
    </div>
  );
}

export default LoadingModal;
