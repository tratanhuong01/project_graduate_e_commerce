import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../../Utils/api";
import CloseModal from "../../../General/CloseModal/CloseModal";
import ItemChangeVoucher from "./ItemChangeVoucher/ItemChangeVoucher";

function ModalChangeVoucher(props) {
  //
  const [vouchers, setVouchers] = useState([]);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(
        `discountCodeUsers?idUser=${user.id}&isUsed=0&type=${0}`
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
    <div
      className="w-11/12 xl:w-5/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    rounded-lg z-50 animate__animated animate__fadeIn bg-white overflow-y-auto scrollbar-css 
    dark:bg-dark-main"
      style={{ maxHeight: "70vh", height: "70vh" }}
    >
      <div className="w-full sticky pb-2 top-0 z-50 bg-white shadow-lg">
        <div className="w-full py-3 font-semibold text-xl text-center relative">
          Chọn voucher
          <CloseModal />
        </div>
      </div>
      <div className="w-full">
        {vouchers.map((voucher, index) => {
          return <ItemChangeVoucher voucher={voucher} key={index} />;
        })}
      </div>
    </div>
  );
}

export default ModalChangeVoucher;
