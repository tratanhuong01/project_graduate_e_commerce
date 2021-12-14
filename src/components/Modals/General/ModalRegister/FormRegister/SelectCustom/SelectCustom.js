import React, { useState } from "react";
import ItemSelectCustom from "./ItemSelectCustom/ItemSelectCustom";

function SelectCustom(props) {
  //
  const [modal, setModal] = useState(false);
  const { array, setData, data, label, setEmailOrPhone, emailOrPhone } = props;
  const [icon, setIcon] = useState(array[0].icon);
  const showData = array.map((item, index) => {
    return data === item.data ? (
      ""
    ) : (
      <ItemSelectCustom
        item={item}
        key={index}
        setData={setData}
        setIcon={setIcon}
        setModal={setModal}
        modal={modal}
      />
    );
  });
  //
  return (
    <>
      {label && (
        <div className="w-full relative">
          <label className="w-full text-gray-800 dark:text-white px-2 text-xm font-semibold">
            {label}
          </label>
          <div className="flex items-center mt-1 absolute bottom-0 right-0">
            <span className="mr-1 font-semibold">Gửi mã</span>
            <input type="radio" className="mx-1" name="selectEmailOrPhone"
              value={"Email"} onChange={(e) => setEmailOrPhone(e.target.value)}
              checked={emailOrPhone === "Email"} /> Email
            <input type="radio" className="mx-2" name="selectEmailOrPhone"
              value={"Phone"} onChange={(e) => setEmailOrPhone(e.target.value)}
              checked={emailOrPhone === "Phone"} /> Số điện thoại
          </div>
        </div>
      )}
      <div
        className={`w-full p-2.5 my-3 border-2 border-solid ${icon && " pl-10 "
          } mt-2 relative dark:bg-dark-third dark:border-dark-third rounded-lg border-gray-300 cursor-pointer bg-gray-100 font-semibold`}
      >
        <p onClick={() => setModal(!modal)} className="items-center">
          {data}
        </p>
        <i className="bx bx-chevron-down absolute right-3 top-4"></i>
        {icon && <i className={`${icon} absolute left-3 text-xl top-2`}></i>}
        {modal && (
          <div className="w-full bg-white border-2 border-solid border-gray-200 p-1 font-bold absolute top-full left-0 shadow-lg z-50 dark:bg-dark-second dark:border-dark-third z-main">
            {showData}
          </div>
        )}
      </div>
    </>
  );
}

export default SelectCustom;
