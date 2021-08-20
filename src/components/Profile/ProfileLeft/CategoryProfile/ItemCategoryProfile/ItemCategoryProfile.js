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
        className="w-1/3 md:w-full my-2 py-2 flex items-center justify-center md:justify-start 
        relative"
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
        <div className="w-80 absolute md:relative bg-white top-10 md:top-auto left-2 hidden">
          {active && <ChildCategoryProfile match={match} />}
        </div>
      </div>
      <div className="w-full hidden md:block">
        {active && <ChildCategoryProfile match={match} />}
      </div>
    </>
  );
}

export default ItemCategoryProfile;
