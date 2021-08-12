import React from "react";
import ModalSearch from "../../../../../containers/General/ModalSearch/ModalSearch";

function Right(props) {
  return (
    <li className="flex px-4 py-6 relative toggel__hover__cart_show">
      <i className="bx bx-search-alt-2 text-3xl flex items-center cursor-pointer"></i>
      <ModalSearch />
    </li>
  );
}

export default Right;
