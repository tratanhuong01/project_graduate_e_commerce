import React, { useState } from "react";
import ModalHeaderRight from "./ModalHeaderRight/ModalHeaderRight";

function HeaderRight(props) {
  //
  const [show, setShow] = useState(false);
  //
  return (
    <div className="w-1/4 relative">
      <ul className="flex justify-end mr-8">
        <li className="p-2 flex items-center">
          <i className="far fa-envelope text-2xl"></i>
        </li>
        <li className="p-2 flex items-center">
          <i className="bx bx-bell text-2xl"></i>
        </li>
        <li className="p-2 flex items-center">
          <div className="w-full flex relative p-2 cursor-pointer">
            <div className="text-right mr-2 cursor-pointer">
              <img
                src="../../images/avatar.jpg"
                className="w-9 h-9 rounded-full"
                alt=""
              />
            </div>
            <div className="flex items-center">
              <p className="font-bold text-sm">Trà Tấn Hưởng</p>
            </div>
            <i
              onClick={() => setShow(!show)}
              className="fas fa-caret-down absolute top-1/3 -right-3 cursor-pointer"
            ></i>
          </div>
        </li>
      </ul>
      {show && <ModalHeaderRight />}
    </div>
  );
}

export default HeaderRight;
