import React, { useEffect, useState } from "react";
import InputSearchBill from "./InputSearchBill/InputSearchBill";
import ItemBill from "./ItemBill/ItemBill";
import StatusBill from "./StatusBill/StatusBill";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { PAGE_PROFILE_USER, PROFILE_BILL } from "../../../../constants/Config";
import api from "../../../../Utils/api";
import { useSelector } from "react-redux";

function MyBill(props) {
  //
  const user = useSelector((state) => state.user);
  const [bills, setBills] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(
        `bills?type=${0}&idUser=${user.id}&offset=${0}&limit=${5}`,
        "GET",
        null
      );
      if (unmounted) return;
      setBills(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="w-full dark:text-white">
      <BreadcrumbsItem to={`${PAGE_PROFILE_USER}/${PROFILE_BILL}`}>
        Đơn hàng
      </BreadcrumbsItem>
      <StatusBill />
      <InputSearchBill />
      {bills ? (
        bills.map((bill, index) => {
          return <ItemBill bill={bill} key={index} />;
        })
      ) : (
        <div className="w-full h-32 flex items-center justify-center">
          <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
        </div>
      )}
    </div>
  );
}

export default MyBill;
