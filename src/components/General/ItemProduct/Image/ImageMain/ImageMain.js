import React from "react";

function ImageMain(props) {
  //
  const { images } = props;
  //
  return (
    <img
      src={typeof images !== "undefined" && images[0].src}
      className="w-full h-64 object-cover"
      alt=""
    />
  );
}

export default ImageMain;
