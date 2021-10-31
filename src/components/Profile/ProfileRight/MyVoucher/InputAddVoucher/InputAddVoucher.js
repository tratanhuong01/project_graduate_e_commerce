import React, { useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../../../Utils/api";
import * as voucherApi from "../../../../../api/voucherApi";
function InputAddVoucher({ setVouchers }) {
  //
  const { user, headers } = useSelector((state) => {
    return {
      user: state.user,
      headers: state.headers,
    };
  });
  const [errorCode, setErrorCode] = useState(null);
  const [code, setCode] = useState("");
  const handleSubmit = async () => {
    setCode("");
    const result_1 = await api(
      `discountCodeUsers/validAdd/${code}/${user.id}`,
      "GET",
      null,
      headers
    );
    let result_2 = await api(
      `discountCodes/check/valid/?code=${code}`,
      "GET",
      null,
      headers
    );
    if (result_1.data || !result_2.data) {
      setErrorCode("Mã giảm giá không hợp lệ hoặc đã sử dụng !!!");
    } else {
      if (result_2.data.amount > 0) {
        await api(
          `discountCodeUsers`,
          "POST",
          {
            id: null,
            userDiscountCode: user,
            discountCode: result_2.data,
            isUsed: 0,
          },
          headers
        );
        result_2.data.amount -= 1;
        await api(`discountCodes`, "PUT", result_2.data, headers);
        const vouchers = await voucherApi.getDiscountCodeByIdUser(
          user.id,
          0,
          0,
          headers
        );
        setVouchers(vouchers.data);
        setErrorCode(null);
      } else setErrorCode("Mã giảm giá đã hết !!!");
    }
  };
  //
  return (
    <div className="w-full flex flex-wrap items-center justify-center ">
      <div className="w-3/4 p-2 flex items-center justify-center">
        <span className="dark:text-gray-300">Mã giảm giá</span>
        <input
          type="text"
          placeholder="Mã giảm giá"
          className="w-2/3 focus:border-blue-500 border-2 border-solid border-gray-200 rounded-sm  
          mx-2 p-2.5 dark:bg-dark-third dark:text-white dark:border-dark-third shadow-lg"
          value={code}
          onChange={(event) => {
            setErrorCode(null);
            setCode(event.target.value);
          }}
        />
        <button
          onClick={handleSubmit}
          className={`font-semibold p-2.5 border-2 border-solid px-5 rounded-sm 
          ${
            code.length >= 1
              ? "bg-organce border-organce text-white"
              : "bg-gray-200 border-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          disabled={code.length >= 1 ? false : true}
        >
          Lưu
        </button>
      </div>
      {errorCode && (
        <p className="w-full text-center my-1 font-semibold text-red-500">
          {errorCode}
        </p>
      )}
    </div>
  );
}

export default InputAddVoucher;
