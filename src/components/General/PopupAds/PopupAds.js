import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../actions/modal/index";
import api from "../../../Utils/api";

function PopupAds(props) {
  //
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      const result = await api(`getPopupAdsNew`, 'GET', null);
      if (unmounted) return;
      setPopup(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    }
    //
  }, []);
  //
  return (
    <div
      className="w-11/12 xl:w-1/4 p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-lg z-50 animate__animated animate__fadeIn"
    >
      <div className="w-full relative px-2 py-4">
        <span
          onClick={() => dispatch(modalsAction.closeModal())}
          className="rounded-full py-0.5 pb-1.5 px-2.5 font-bold text-xl bg-gray-300 cursor-pointer
          hover:bg-gray-500 hover:text-white flex justify-center items-center absolute top-3 right-0"
        >
          &times;
        </span>
        {popup ? <img
          src={popup.image}
          alt=""
          className="w-full h-120 object-contain cursor-pointer"
        />
          : <div className="h-120 w-full"></div>}
        {/* <img
          src="https://cf.shopee.vn/file/a9825e88bb54c824feb6def6e57bd0c4_xxhdpi"
          alt=""
          className="w-full h-120 object-contain cursor-pointer"
        /> */}
      </div>
    </div>
  );
}

export default PopupAds;
