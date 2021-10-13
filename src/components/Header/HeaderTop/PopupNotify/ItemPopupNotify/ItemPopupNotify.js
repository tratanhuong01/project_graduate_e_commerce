import React from "react";

function ItemPopupNotify(props) {
  //
  const { notify } = props;
  //
  return (
    <div className="w-full p-2 py-4 hover:bg-gray-200 dark:bg-dark-second dark:hover:bg-dark-third flex items-center cursor-pointer">
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
