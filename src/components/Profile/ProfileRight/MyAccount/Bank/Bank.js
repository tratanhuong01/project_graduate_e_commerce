import React, { useEffect, useState } from "react";
import ItemBank from "./ItemBank/ItemBank";
import * as modalsAction from "../../../../../actions/modal/index";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../Utils/api";

function Bank(props) {
  //
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [banks, setBanks] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(`banks/${user.id}`, "GET", null);
      if (unmounted) return;
      setBanks(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return banks ? (
    <div className="w-full">
      <div className="w-full flex text-gray-600 mb-5 dark:text-white">
        <div className="w-1/2 flex items-center font-semibold text-xl lg:text-2xl">
          Tài khoản ngân hàng của tôi
        </div>
        <div className="w-1/2 justify-end flex">
          <button
            onClick={() => dispatch(modalsAction.openModalAddBank())}
            className="p-2.5 flex items-center text-white font-semibold 
          bg-organce"
          >
            <span className="bx bx-plus text-2xl mr-1"></span>
            <span className="text-sm">Thêm tài khoản ngân hàng</span>
          </button>
        </div>
      </div>
      {banks.length > 0 ? (
        banks.map((bank, index) => {
          return <ItemBank bank={bank} key={index} />;
        })
      ) : (
        <div
          className="w-full h-80 flex items-center justify-center text-xl 
        text-gray-600 hidden"
        >
          Bạn chưa thêm bất kì thẻ nào
        </div>
      )}
    </div>
  ) : (
    <div className="w-full relative">
      <i
        className="fas fa-circle-notch fa-spin text-5xl text-organce absolute top-32 left-1/2 transform 
    -translate-x-1/2"
      ></i>
    </div>
  );
}

export default Bank;
