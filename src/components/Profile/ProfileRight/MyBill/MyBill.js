import React, { useEffect, useState } from "react";
import InputSearchBill from "./InputSearchBill/InputSearchBill";
import ItemBill from "./ItemBill/ItemBill";
import StatusBill from "./StatusBill/StatusBill";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { PAGE_PROFILE_USER, PROFILE_BILL } from "../../../../constants/Config";
import * as billsAction from "../../../../actions/bill/index";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../General/Pagination/Pagination";
import { SET_LOADING_BILL_USER } from "../../../../constants/ActionTypes";
import NotBill from "../DetailBill/NotBill/NotBill";

function MyBill(props) {
  //
  const { bills, user } = useSelector((state) => {
    return {
      user: state.user,
      bills: state.bills,
    };
  });
  const dispatch = useDispatch();
  const status = [
    { type: -2, name: "Tất cả" },
    { type: 0, name: "Chờ xác nhận" },
    { type: 1, name: "Chờ lấy hàng" },
    { type: 2, name: "Đang giao" },
    { type: 3, name: "Đã giao" },
    { type: -1, name: "Đã hủy" },
  ];
  const [data, setData] = useState(status[0]);
  useEffect(() => {
    //
    window.scrollTo(0, 0);
    dispatch(billsAction.setLoadingBillUser(true));
    const timeOut = setTimeout(() => {
      dispatch(
        billsAction.loadBillsUserRequest({
          user,
          type: data.type,
          index: 0,
        })
      );
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  //
  return (
    <div className="w-full dark:text-white">
      <BreadcrumbsItem to={`${PAGE_PROFILE_USER}/${PROFILE_BILL}`}>
        Đơn hàng
      </BreadcrumbsItem>
      <StatusBill data={data} status={status} setData={setData} />
      {data.type === -2 && <InputSearchBill data={data} />}
      {bills.loading ? (
        <div className="w-full h-32 flex items-center justify-center">
          <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
        </div>
      ) : bills.listCurrent.length <= 0 ? (
        <NotBill />
      ) : (
        <>
          {bills.listCurrent.map((bill, index) => {
            return <ItemBill bill={bill} key={index} data={data} />;
          })}
          {bills.list.length > 0 && (
            <div className="w-full flex justify-center my-5">
              <Pagination
                index={bills.index}
                length={bills.list.length}
                dispatch={(index) => {
                  window.scrollTo(0, 150);
                  dispatch({ type: SET_LOADING_BILL_USER, status: true });
                  const timeOut = setTimeout(() => {
                    dispatch(
                      billsAction.loadBillsUserByIndexRequest({
                        user,
                        type: data.type,
                        index,
                      })
                    );
                  }, 500);
                  return () => {
                    clearTimeout(timeOut);
                  };
                }}
                limit={5}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default MyBill;
