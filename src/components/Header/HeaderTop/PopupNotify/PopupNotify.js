import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import api from "../../../../Utils/api";
import ItemPopupNotify from "./ItemPopupNotify/ItemPopupNotify";
import * as Config from "../../../../constants/Config";
function PopupNotify(props) {
  //
  const { setAmount } = props;
  const [notifies, setNotifies] = useState(null);
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
        `notifies?idUser=${user.id}&limit=5&offset=0`,
        "GET",
        null,
        headers
      );
      if (unmounted) return;
      setNotifies(result.data);
      setAmount(result.data.length);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div
      style={{ width: 380 }}
      className="rounded-sm absolute mt-10 mx-5 right-0  z-main animate__animated animate__zoomIn"
      id="notify__popup"
    >
      <div
        className="rounded-sm mt-36 z-main border-2 border-solid 
      border-gray-200 bg-white relative arrow__popup"
        style={{
          boxShadow: "0 2px 20px rgb(0 0 0 / 50%)",
        }}
      >
        {notifies ? (
          <>
            {" "}
            <div className="w-full relative z-50">
              {notifies.map((notify, index) => {
                return <ItemPopupNotify key={index} notify={notify} />;
              })}
            </div>
            <div className="flex items-center justify-center my-3">
              <Link
                to={`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_NOTIFY}`}
                className="text-blue-500 text-font-semibold"
              >
                Xem tất cả
              </Link>
            </div>{" "}
          </>
        ) : (
          <div className="w-full p-3 flex items-center justify-center h-80">
            <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopupNotify;
