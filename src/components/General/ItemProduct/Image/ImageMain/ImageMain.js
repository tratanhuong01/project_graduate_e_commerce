import React from "react";

function ImageMain(props) {
  //
  const { URL } = props;
  //
  return <img src={URL} className="w-full h-64 object-cover" alt="" />;
}

export default ImageMain;
