import React, { useState } from "react";

function Left(props) {
  //
  const [dark, setDark] = useState(false);
  //
  return (
    <li
      onClick={() => {
        if (dark) document.getElementById("root").classList = "";
        else document.getElementById("root").classList = "dark";
        setDark(!dark);
      }}
      className="py-6 px-2 flex dark:text-white relative cursor-pointer toggel__hover__cart_show cursor-pointer"
    >
      <i
        className={`${"bx bxs-moon"} text-3xl flex items-center cursor-pointer`}
      ></i>
    </li>
  );
}

export default Left;
