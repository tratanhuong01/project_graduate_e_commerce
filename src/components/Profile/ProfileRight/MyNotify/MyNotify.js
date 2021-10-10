import React, { useEffect, useState } from "react";
import ItemNotify from "./ItemNotify/ItemNotify";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import {
  PAGE_PROFILE_USER,
  PROFILE_NOTIFY,
} from "../../../../constants/Config";
import { useSelector } from "react-redux";
import api from "../../../../Utils/api";

function MyNotify(props) {
  //
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
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="w-full">
      <BreadcrumbsItem to={`${PAGE_PROFILE_USER}/${PROFILE_NOTIFY}`}>
        Thông báo
      </BreadcrumbsItem>
      <div className="w-full flex text-gray-600 dark:text-white justify-end">
        <button
          className="p-1 text-white font-semibold 
          bg-organce"
        >
          <span className="text-sm">Đánh dấu tất cả là đã đọc</span>
        </button>
      </div>
      <hr className="my-3" />
      {notifies ? (
        notifies.map((notify, index) => (
          <ItemNotify key={index} notify={notify} />
        ))
      ) : (
        <div className="w-full p-3 flex items-center justify-center h-80">
          <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
        </div>
      )}
    </div>
  );
}

export default MyNotify;
