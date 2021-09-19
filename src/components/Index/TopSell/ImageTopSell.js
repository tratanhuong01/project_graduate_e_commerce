import React from "react";

function ImageTopSell(props) {
  //
  const { image } = props;
  //
  return (
    <div className="w-full md:w-1/2">
      <img src={image.src} className="w-10/12 mx-auto" alt="" />
    </div>
  );
}

export default ImageTopSell;
