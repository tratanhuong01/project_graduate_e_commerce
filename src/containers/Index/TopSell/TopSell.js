import React from "react";
import ImageChildTopSell from "../../../components/Index/TopSell/ImageChildTopSell";
import ImageTopSell from "../../../components/Index/TopSell/ImageTopSell";
import InfoTopSell from "../../../components/Index/TopSell/InfoTopSell";

function TopSell(props) {
  return (
    <>
      <div className="xl:w-3/4 md:w-11/12 w-full mx-auto md:flex flex-col md:flex-row">
        <>
          <ImageTopSell />
          <InfoTopSell />
        </>
      </div>
      <ImageChildTopSell />
    </>
  );
}

export default TopSell;
