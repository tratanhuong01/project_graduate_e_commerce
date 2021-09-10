import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressPayment from "./AddressPayment/AddressPayment";
import * as ordersAction from "../../../../actions/order/index";

function FormInfoPayment(props) {
  //
  const { address } = props;
  const { user, orders } = useSelector((state) => {
    return {
      orders: state.orders,
      user: state.user,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {}, [orders, user]);
  //
  return (
    <form action="" method="post" className="w-full dark:text-white">
      <input
        type="text"
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        placeholder="Họ và tên"
        value={orders.infoPayment.fullName}
        onChange={(event) =>
          dispatch(ordersAction.updateAddressPayment(event.target.value, 5))
        }
      />
      <input
        type="text"
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        placeholder="Số điện thoại"
        value={orders.infoPayment.phone}
        onChange={(event) =>
          dispatch(ordersAction.updateAddressPayment(event.target.value, 6))
        }
      />
      <input
        type="text"
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        placeholder="Chi tiết địa chỉ"
        value={orders.infoPayment.address}
        onChange={(event) =>
          dispatch(ordersAction.updateAddressPayment(event.target.value, 3))
        }
      />
      <AddressPayment address={address} />
      <textarea
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 resize-none h-20 dark:bg-dark-third dark:border-dark-third"
        placeholder="Ghi chú (tùy chọn).."
        onChange={(event) => {
          if (event.target.value.length > 300)
            alert("Không được quá 300 kí tự");
          else
            dispatch(ordersAction.updateAddressPayment(event.target.value, 4));
        }}
        defaultValue={orders.infoPayment.note}
      ></textarea>
    </form>
  );
}

export default FormInfoPayment;
