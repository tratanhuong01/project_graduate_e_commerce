import React from "react";
import loading from "../../../assets/images/loading.gif";
function Loading(props) {
  return (
    <div className="w-full h-screen relative bg-white dark:bg-dark-second">
      <img
        src={loading}
        alt=""
        className="w-28 h-28 rounded-full absolute top-1/2 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2 "
      />
    </div>
  );
}

export default Loading;
