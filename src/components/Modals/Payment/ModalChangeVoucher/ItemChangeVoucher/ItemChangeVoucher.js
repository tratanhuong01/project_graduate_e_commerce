import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemVoucher from "../../../../Profile/ProfileRight/MyVoucher/ItemVoucher/ItemVoucher";
import * as ordersAction from "../../../../../actions/order/index";
import * as modalsAction from "../../../../../actions/modal/index";
function ItemChangeVoucher(props) {
  //
  const { voucher } = props;
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full flex items-center py-5 border-b-2 border-solid border-gray-200 relative  dark:text-white text-gray-600">
      <div className="w-1/12 flex items-center justify-center">
        <input
          type="radio"
          name="address"
          className="transform scale-150 "
          onChange={(event) => {
            dispatch(ordersAction.updateVoucherOrders(voucher));
            dispatch(modalsAction.closeModal());
          }}
          checked={
            orders.voucher && voucher.id === orders.voucher.id ? true : false
          }
        />
      </div>
      <div className="w-11/12 flex">
        <ItemVoucher voucher={voucher} full={true} />
      </div>
    </div>
  );
}

export default ItemChangeVoucher;
