import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";
import useInfoWebsite from "../../../../hook/useInfoWebsite";
function Logo(props) {
  //
  const info = useInfoWebsite(1);
  //
  return (
    <Link
      to={Config.PAGE_INDEX}
      className="mb-3 font-semibold text-organce my-4"
    >
      <img src={info} alt="" className="w-48" />
    </Link>
  );
}

export default Logo;
