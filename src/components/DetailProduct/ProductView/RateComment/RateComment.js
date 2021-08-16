import React from "react";
import DetailRateComment from "./DetailRateComment/DetailRateComment";
import InfoRateComment from "./InfoRateComment/InfoRateComment";

function RateComment(props) {
  //
  const { products } = props;
  //
  return (
    <div className="w-full">
      <InfoRateComment products={products} />
      <DetailRateComment />
    </div>
  );
}

export default RateComment;
