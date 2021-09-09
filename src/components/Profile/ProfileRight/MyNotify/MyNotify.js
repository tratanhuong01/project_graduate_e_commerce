import React from "react";
import ItemNotify from "./ItemNotify/ItemNotify";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import {
  PAGE_PROFILE_USER,
  PROFILE_NOTIFY,
} from "../../../../constants/Config";
function MyNotify(props) {
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
      <ItemNotify />
      <ItemNotify />
      <ItemNotify />
    </div>
  );
}

export default MyNotify;
