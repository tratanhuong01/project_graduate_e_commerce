import React from "react";

function ImageMain(props) {
  //
  const { image } = props;
  //
  return (
    <img
      src={typeof image !== "undefined" ? image.src : ""}
      className="w-full h-64 object-contain"
      alt=""
    />
  );
}

export default ImageMain;
