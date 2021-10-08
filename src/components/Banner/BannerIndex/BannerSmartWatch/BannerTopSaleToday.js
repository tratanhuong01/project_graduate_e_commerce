import React from "react";

function BannerTopSaleToday(props) {
  //
  const { banner, position } = props;
  //
  return (
    <div className="w-1/2 lg:block hidden px-2">
      <img
        src={position === "left" ? banner.imageLeft : banner.imageRight}
        className="w-full p-2 object-contain"
        alt=""
        style={{ maxHeight: 400 }}
      />
    </div>
  );
}

export default BannerTopSaleToday;
