import React from "react";
import DetailRateComment from "./DetailRateComment/DetailRateComment";
import InfoRateComment from "./InfoRateComment/InfoRateComment";

function RateComment(props) {
  return (
    <div className="w-full">
      <InfoRateComment />
      <DetailRateComment />
    </div>
  );
}

export default RateComment;
