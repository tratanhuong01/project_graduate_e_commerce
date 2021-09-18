import React, { useState } from "react";
import InputFieldFC from "../../../../../General/InputField/InputFieldFC";

function NameAndPhone(props) {
  const { register, errors, setValue } = props;
  const [show, setShow] = useState(false);
  return (
    <div className="w-full flex relative">
      <InputFieldFC
        register={register}
        showError={errors["fullName"]}
        onChange={() => ""}
        label="Họ tên"
        type="text"
        name="fullName"
        className="w-full rounded-lg p-2.5 border-2 border-solid pl-3 mt-2"
        placeHolder="Nhập họ tên"
        double={true}
      />

      <InputFieldFC
        register={register}
        showError={errors["fullName"]}
        onChange={() => ""}
        label="Số điện thoại"
        type="text"
        name="phone"
        onClick={() => setShow(!show)}
        className="w-full rounded-lg p-2.5 border-2 border-solid pl-3 mt-2"
        placeHolder="Nhập số điện thoại..."
        double={true}
      />
      {show && (
        <div className="w-1/2 absolute mt-14 right-0 px-2 z-50 rounded-lg p-1">
          <div className="w-full border-2 border-solid bg-white border-gray-300">
            <div
              onClick={() => {
                setValue("phone", "0354114665");
                setShow(false);
              }}
              className="w-full flex items-center py-1 px-2 text-gray-600  
              font-semibold"
            >
              <span className="mr-0.5">(+84) 354114665</span>
              <span
                className="py-2 px-4 rounded-lg border-organce border-solid border-2 
                text-organce font-semibold text-xs ml-8"
              >
                Sử dụng
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NameAndPhone;
