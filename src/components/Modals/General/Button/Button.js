import React from "react";

function Button(props) {
  //
  const { backgroundColor, color, label, addClass, onClick, disabled } = props;
  //
  return (
    <button
      onClick={() => {
        if (typeof onClick === "function") onClick();
      }}
      type="button"
      className={`${
        disabled === true ? "cursor-not-allowed" : "cursor-pointer"
      } px-4 py-2.5 border-none font-semibold rounded-lg 
      ${backgroundColor} ${color} ${addClass}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
