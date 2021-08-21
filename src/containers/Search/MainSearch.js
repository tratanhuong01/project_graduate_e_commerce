import React from "react";
import ItemProductSearch from "../../components/General/ItemProduct/ItemProductSearch";
import NotifyNumberProductSearch from "../../components/Search/NotifyNumberProductSearch";

function MainSearch(props) {
  //
  //
  return (
    <div className="w-full bg-gray-100">
      <div className="xl:w-4/5 w-full mx-auto p-4">
        <NotifyNumberProductSearch />
        <div className="w-full flex flex-wrap">
          <ItemProductSearch />
        </div>
      </div>
    </div>
  );
}

export default MainSearch;
