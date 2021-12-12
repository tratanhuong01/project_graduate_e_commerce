import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as profilesAction from "../../../../../actions/profile/index";
import * as Config from "../../../../../constants/Config";

function ItemNotify(props) {
  //
  const dispatch = useDispatch();
  const history = useHistory();
  const { notify } = props;
  //
  return (
    <div
      onClick={() => {
        history.push(`${`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_BILL}`}`);
        dispatch(profilesAction.updateIdBillProfile(notify.data));
      }}
      className={`w-full my-2 p-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-third`}
    >
      <div className="w-3/4 flex items-center">
        <img
          src={notify.image}
          alt=""
          className="w-20 h-20 p-1 object-contain rounded-lg"
        />
        <div className="flex text-gray-600 flex-col pl-4 dark:text-white">
          <p className="font-semibold text-xm text-green-500 mb-1">
            {notify.nameNotify}
          </p>
          <p className="font-semibold mb-1 text-sm">{notify.description}</p>
          <p className="font-semibold text-xs"> {notify.timeCreated}</p>
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-end">
        <button
          className="border-2 border-solid border-gray-300 font-semibold dark:text-white  
          text-gray-600 px-4 py-1.5 text-sm hover:border-organce hover:text-organce"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}

export default ItemNotify;
