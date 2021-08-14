import React from "react";

function VideoTransparent(props) {
  return (
    <>
      <div
        className="w-full absolute top-0 left-0 bg-black
        bg-opacity-50 h-full news__view"
      >
        <div className="w-full relative h-full">
          <div
            className="w-full absolute top-1/2 left-1/2 transform -translate-y-1/2 
              -translate-x-1/2 flex justify-center flex-wrap"
          ></div>
        </div>
      </div>
      <i
        className="bx bx-play-circle absolute text-4xl cursor-pointer text-white absolute top-1/2  
          left-1/2 transform -translate-y-1/2 -translate-x-1/2"
      ></i>
    </>
  );
}

export default VideoTransparent;
