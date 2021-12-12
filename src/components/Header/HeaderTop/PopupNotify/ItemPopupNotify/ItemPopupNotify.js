import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Config from "../../../../../constants/Config";
import * as profilesAction from "../../../../../actions/profile/index";

function ItemPopupNotify(props) {
  //
  const { notify } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  //
  return (
    <div
      onClick={async () => {
        await history.push(`${`${Config.PAGE_PROFILE_USER}/${Config.PROFILE_BILL}`}`);
        await dispatch(profilesAction.updateIdBillProfile(notify.data));
      }}
      className={`w-full p-2 py-4 flex items-center cursor-pointer hover:bg-gray-100 dark:bg-dark-second 
      dark:hover:bg-dark-third`}>
      <img src={notify.image} alt="" className="w-16 h-16 rounded-lg" />
      <div className="pl-5 font-semibold item___notify">
        <p className="font-semibold mb-2">{notify.nameNotify}</p>
        <span className="mb-1 text-xs item___notify___span">
          {notify.description}
        </span>
      </div>
    </div>
  );
}

export default ItemPopupNotify;
