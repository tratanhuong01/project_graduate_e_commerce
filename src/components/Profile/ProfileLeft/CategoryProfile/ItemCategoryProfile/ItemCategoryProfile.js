import React from "react";
import ChildCategoryProfile from "../ChildCategoryProfile/ChildCategoryProfile";

function ItemCategoryProfile(props) {
  //
  const { label, icon, color, active } = props;
  //
  return (
    <>
      <div className="w-full my-2 py-2 flex items-center">
        <span className={`${icon} ${color} text-2xl flex mr-3`}></span>
        <span className="font-semibold hover:text-organce cursor-pointer">
          {label}
        </span>
      </div>
      {active && <ChildCategoryProfile />}
    </>
  );
}

export default ItemCategoryProfile;
