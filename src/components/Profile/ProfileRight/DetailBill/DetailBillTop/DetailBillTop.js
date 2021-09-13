import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as profilesAction from "../../../../../actions/profile/index";
import StatusBill from "../../MyBill/ItemBill/StatusBill";

function DetailBillTop(props) {
  //
  const dispatch = useDispatch();
  const { bill } = props;
  useEffect(() => {}, [bill]);
  //
  return (
    <div className="w-full flex mb-3 items-center">
      <div
        className="w-1/3 cursor-pointer text-gray-600 flex items-center 
      dark:text-white"
      >
        <div
          onClick={() => dispatch(profilesAction.returnProfile())}
          className="flex items-center"
        >
          <span className="bx bx-left-arrow-alt mr-2 text-xl"></span>
          <span className="text-xl">TRỞ LẠI</span>
        </div>
      </div>
      <div className="w-2/3 flex justify-end items-center ">
        <span className="mr-3 font-semibold dark:text-white">
          ID ĐƠN HÀNG. {bill ? bill.bill.id : "..."} &nbsp;&nbsp;&nbsp;|
        </span>

        {bill ? <StatusBill status={bill.bill.status} /> : ""}
      </div>
    </div>
  );
}

export default DetailBillTop;
