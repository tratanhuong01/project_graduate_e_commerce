import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ordersAction from "../../../../actions/order/index";
import * as modalsAction from "../../../../actions/modal/index";
import api from "../../../../Utils/api";
import ItemVoucher from "../../../Profile/ProfileRight/MyVoucher/ItemVoucher/ItemVoucher";

function ApplyCode(props) {
  //
  const dispatch = useDispatch();
  const { user, orders } = useSelector((state) => {
    return {
      user: state.user,
      orders: state.orders,
    };
  });
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const appleCode = async () => {
    const valid = await api(
      `discountCodes/check/valid/?code=${code}`,
      "GET",
      null
    );
    const isUsed = await api(
      `discountCodes/check/isUsed/?code=${code}&idUser=${user.id}&isUsed=1`,
      "GET",
      null
    );

    if (valid.data === "")
      setError("Mã giảm giá không hợp lệ hoặc đã được sử dụng !");
    else {
      if (isUsed.data)
        setError("Mã giảm giá không hợp lệ hoặc đã được sử dụng !");
      else {
        setError(null);
        dispatch(
          ordersAction.updateVoucherOrders({ discountCode: valid.data })
        );
      }
    }
    setLoading(false);
  };
  useEffect(() => {}, [user, orders]);
  //
  return (
    <>
      <div className={`py-2 w-full `}>
        {orders.voucher === null ? (
          <>
            <div className="w-full flex mb-3">
              <input
                type="text"
                className="w-3/4 mt-2 p-3 rounded-l-lg border-2 border-solid 
              border-gray-100 dark:bg-dark-third dark:border-dark-third"
                placeholder="Nhập mã ưu đãi (Nếu có)..."
                onChange={(event) => setCode(event.target.value)}
                value={code}
              />
              <button
                onClick={async () => {
                  setLoading(true);
                  const timeOut = setTimeout(() => {
                    appleCode();
                  }, 500);
                  return () => {
                    clearTimeout(timeOut);
                  };
                }}
                type="button"
                className="w-1/4 p-2.5 mt-2 rounded-r-lg bg-organce text-white 
                font-semibold  border-2 border-solid border-organce shadow-lg"
                disabled={loading}
              >
                Áp dụng
              </button>
            </div>
            {error && (
              <p className="text-red-500 font-semibold my-1">{error}</p>
            )}
          </>
        ) : (
          <div className="w-full relative">
            <span
              onClick={() =>
                dispatch(ordersAction.updateVoucherOrders(null, true))
              }
              className="w-5 h-5 rounded-full text-xl flex items-center cursor-pointer z-50 
              justify-center absolute -top-2 -right-2 hover:bg-gray-200 bg-gray-50"
            >
              &times;
            </span>
            <ItemVoucher voucher={orders.voucher} full={true} />
          </div>
        )}
        <p
          onClick={() => dispatch(modalsAction.openModalChangeVoucher())}
          className="text-right text-blue-500 cursor-pointer mt-5 "
        >
          Chọn một voucher khác
        </p>
      </div>
    </>
  );
}

export default ApplyCode;
