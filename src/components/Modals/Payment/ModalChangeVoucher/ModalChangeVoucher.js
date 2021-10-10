import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ModalWrapper from "../../../../containers/ModalWrapper";
import api from "../../../../Utils/api";
import ItemChangeVoucher from "./ItemChangeVoucher/ItemChangeVoucher";

function ModalChangeVoucher(props) {
  //
  const [vouchers, setVouchers] = useState([]);
  const { user, headers } = useSelector((state) => {
    return {
      user: state.user,
      headers: state.headers,
    };
  });
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(
        `discountCodeUsers?idUser=${user.id}&isUsed=0&type=${0}`,
        "GET",
        null,
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
  }, []);
  //
  return (
    <ModalWrapper
      title={"Chọn voucher"}
      className="w-11/12 xl:w-5/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-lg z-50 animate__animated animate__fadeIn bg-white dark:bg-dark-main"
      styleChildren={{ maxHeight: "58vh", height: "58vh" }}
    >
      <div className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-css">
        {vouchers.map((voucher, index) => {
          return <ItemChangeVoucher voucher={voucher} key={index} />;
        })}
        {vouchers.map((voucher, index) => {
          return <ItemChangeVoucher voucher={voucher} key={index} />;
        })}
        {vouchers.map((voucher, index) => {
          return <ItemChangeVoucher voucher={voucher} key={index} />;
        })}
        {vouchers.map((voucher, index) => {
          return <ItemChangeVoucher voucher={voucher} key={index} />;
        })}
      </div>
    </ModalWrapper>
  );
}

export default ModalChangeVoucher;
