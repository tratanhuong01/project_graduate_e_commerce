import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  //
  const { type, className, disabled, onClick, to, linkUseClick } = props;
  //
  return to && !disabled ? (
    <Link
      to={to}
      onClick={() => {
        if (linkUseClick) if (typeof onClick === "function") onClick();
      }}
      className={className}
    >
      {props.children}
    </Link>
  ) : (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={() => {
        if (typeof onClick === "function") onClick();
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
