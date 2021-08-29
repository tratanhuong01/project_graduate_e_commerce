import React, { useEffect, useState } from "react";
import api from "../../../../Utils/api";
import DetailRateComment from "./DetailRateComment/DetailRateComment";
import InfoRateComment from "./InfoRateComment/InfoRateComment";

function RateComment(props) {
  //
  const { products } = props;
  const [reviews, setReviews] = useState(null);
  const [reviewAll, setReviewAll] = useState(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result_1 = await api(`reviewProductsAll/${products.idProduct}`);
      const result_2 = await api(`reviewProducts/${products.idProduct}/0/5`);
      if (unmounted) return;
      setReviewAll(result_1.data);
      setReviews(result_2.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    reviews &&
    reviewAll && (
      <div className="w-full">
        <InfoRateComment
          products={products}
          reviewAll={reviewAll}
          reviews={reviews}
        />
        <DetailRateComment
          reviewAll={reviewAll}
          reviews={reviews}
          index={index}
          setIndex={setIndex}
          setReviews={setReviews}
          products={products}
        />
      </div>
    )
  );
}

export default RateComment;
