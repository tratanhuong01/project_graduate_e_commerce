import React from "react";

function ScrollTop(props) {
  //

  //
  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className="fixed right-5 transform -translate-y-1/2 rounded-full bg-organce flex items-center 
    justify-center w-12 h-12 z-50"
      style={{ top: "calc(50% - 32px)" }}
    >
      <span
        className="bx bx-arrow-to-top text-2xl flex items-center cursor-pointer
      justify-center text-white "
      ></span>
    </div>
  );
}

export default ScrollTop;
