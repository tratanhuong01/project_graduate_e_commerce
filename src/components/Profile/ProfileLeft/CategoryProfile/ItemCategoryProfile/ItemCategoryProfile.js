import React from "react";
import ChildCategoryProfile from "../ChildCategoryProfile/ChildCategoryProfile";

function ItemCategoryProfile(props) {
  //
  const { label, icon, color, active, match, onClick, slug } = props;
  //
  return (
    <>
      <div
        onClick={() => onClick()}
        className="w-full my-2 py-2 flex items-center"
      >
        <span className={`${icon} ${color} text-2xl flex mr-3`}></span>
        <span
          className={`font-semibold ${
            match.match.params.slugProfile === slug
              ? "text-organce"
              : "hover:text-organce"
          } cursor-pointer`}
        >
          {label}
        </span>
      </div>
      {active && <ChildCategoryProfile match={match} />}
    </>
  );
}

export default ItemCategoryProfile;
