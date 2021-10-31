import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as profilesAction from "../../../../../actions/profile/index";
import ItemVoucher from "../ItemVoucher/ItemVoucher";
import * as voucherApi from "../../../../../api/voucherApi";
import NotVoucher from "../NotVoucher/NotVoucher";

function HistoryVoucher(props) {
  //
  const dispatch = useDispatch();
  const { headers, user } = useSelector((state) => {
    return {
      user: state.user,
      headers: state.headers,
    };
  });
  const [data, setData] = useState({
    isUsed: 0,
    type: 1,
  });
  const [vouchers, setVouchers] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await voucherApi.getDiscountCodeByIdUser(
        user.id,
        data.isUsed,
        data.type,
        headers
      );
      if (unmounted) return;
      setVouchers(result.data);
    }
    const timeOut = setTimeout(() => {
      fetch();
    }, 500);
    return () => {
      unmounted = true;
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  //
  return (
    <div className="w-full">
      <div className="font-semibold mb-3 w-full flex justify-between dark:text-gray-300">
        <div
          onClick={() => dispatch(profilesAction.returnProfile())}
          className="flex items-center cursor-pointer"
        >
          <span className="bx bx-left-arrow-alt mr-2 text-xl"></span>
          <span className="text-xl">TRỞ LẠI</span>
        </div>
        <span>Lịch sử voucher</span>
      </div>
      <div className="my-3 py-3 pl-2">
        <button
          onClick={() => {
            setVouchers(null);
            setData({
              isUsed: 0,
              type: 1,
            });
          }}
          className={`px-3 py-1.5 border-b-2 border-solid font-semibold 
          ${
            data.type === 1
              ? "border-organce text-organce"
              : "border-white text-gray-600  dark:text-gray-300 dark:border-dark-second"
          }`}
        >
          Hết hiệu lực
        </button>
        <button
          onClick={() => {
            setVouchers(null);
            setData({
              isUsed: 1,
              type: 3,
            });
          }}
          className={`px-3 py-1.5 border-b-2 border-solid font-semibold mx-5 
          ${
            data.type === 3
              ? "border-organce text-organce"
              : "border-white text-gray-600  dark:text-gray-300 dark:border-dark-second"
          }`}
        >
          Đã sử dụng
        </button>
      </div>
      {vouchers ? (
        vouchers.length > 0 ? (
          <div className="w-full flex flex-wrap">
            {vouchers.map((voucher, index) => {
              return (
                <ItemVoucher disabled={true} voucher={voucher} key={index} />
              );
            })}
          </div>
        ) : (
          <NotVoucher />
        )
      ) : (
        <div className="w-full h-80 flex items-center justify-center">
          <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
        </div>
      )}
    </div>
  );
}

export default HistoryVoucher;
