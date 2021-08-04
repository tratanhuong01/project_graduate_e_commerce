import React from "react";
import ItemNewUserRegister from "./ItemNewUserRegister/ItemNewUserRegister";

function NewUserRegister(props) {
  return (
    <div className="w-1/3 p-1 bg-white mr-2">
      <p className="font-bold text-xm font-bold my-2 pl-3">
        Người dùng đăng kí mới
      </p>
      <ul className="w-full flex flex-wrap">
        <ItemNewUserRegister />
        <ItemNewUserRegister />
        <ItemNewUserRegister />
        <ItemNewUserRegister />
      </ul>
    </div>
  );
}

export default NewUserRegister;
