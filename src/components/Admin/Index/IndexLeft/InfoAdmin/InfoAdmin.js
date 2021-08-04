import React, { useState } from "react";

function InfoAdmin(props) {
  //
  //
  return (
    <div className="w-full p-3">
      <div className="w-full flex relative p-2 border-solid border-gray-300">
        <div className="w-1/4 text-right mr-2">
          <img
            src="../../images/avatar.jpg"
            className="w-12 h-12 rounded-full"
            alt=""
          />
        </div>
        <div className="w-3/4">
          <p className="font-bold">Trà Tấn Hưởng</p>
          <p>Quản trị viên</p>
        </div>
      </div>
    </div>
  );
}

export default InfoAdmin;
