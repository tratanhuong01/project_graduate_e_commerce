import React from "react";

function ImageTopSell(props) {
  //
  const { image } = props;
  //
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <img src={image.src} className="max-w-10/12 mx-auto h-80" alt="" />
    </div>
  );
}

export default ImageTopSell;
