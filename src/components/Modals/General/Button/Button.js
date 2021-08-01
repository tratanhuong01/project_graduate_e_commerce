import React from "react";

function Button(props) {
  //
  const { backgroundColor, color, label, addClass, onClick } = props;
  //
  return (
    <button
      onClick={() => onClick()}
      type="button"
      className={`cursor-pointer px-4 py-2.5 border-none font-semibold rounded-lg 
      ${backgroundColor} ${color} ${addClass}`}
    >
      {label}
    </button>
  );
}

export default Button;
