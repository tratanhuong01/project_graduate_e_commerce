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
    let unmounted = false;

    async function fetch() {
      const result = await api(
        `bills?type=${data.type}&idUser=${user.id}&offset=${0}&limit=${5}`,
        "GET",
        null
      );
      if (unmounted) return;
      setBills(result.data);
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
    <div className="w-full dark:text-white">
      <BreadcrumbsItem to={`${PAGE_PROFILE_USER}/${PROFILE_BILL}`}>
        Đơn hàng
      </BreadcrumbsItem>
      <StatusBill
        data={data}
        status={status}
        setData={setData}
        setBills={setBills}
      />
      <InputSearchBill />
      {bills ? (
        bills.map((bill, index) => {
          return <ItemBill bill={bill} key={index} setBills={setBills} />;
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
