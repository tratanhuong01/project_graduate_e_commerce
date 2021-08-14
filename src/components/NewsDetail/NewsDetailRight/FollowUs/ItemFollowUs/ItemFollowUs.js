import React from "react";

function ItemFollowUs(props) {
  //
  const { icon, color, number, ins } = props;
  //
  return (
    <div
      className={`w-28 mx-2 h-28 mb-4 flex justify-center rounded-lg 
      items-center flex-col text-white font-semibold ${ins}`}
      style={color}
    >
      <span className={`${icon} text-2xl mb-2`}></span>
      <span className="text-xm">{number}</span>
    </div>
  );
}

export default ItemFollowUs;
