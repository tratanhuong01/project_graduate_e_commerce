import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonSendRate from "./ButtonSendRate/ButtonSendRate";
import DetailRateComment from "./DetailRateComment/DetailRateComment";
import InfoRateComment from "./InfoRateComment/InfoRateComment";
import * as reviewProductsAction from "../../../../actions/reviewProduct/index";

function RateComment(props) {
  //
  const dispatch = useDispatch();
  const { products, slug } = props;
  const { reviewProduct, socket, headers } = useSelector((state) => {
    return {
      reviewProduct: state.reviewProduct,
      socket: state.socket,
      headers: state.headers,
    };
  });
  const { reviews, reviewAll, active, index } = reviewProduct;
  useEffect(() => {
    //
    dispatch(
      reviewProductsAction.loadReviewProductRequest({ products, headers })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, slug]);
  useEffect(() => {
    //
    socket.on(`reviewProduct.${products.id}`, () => {
      dispatch(
        reviewProductsAction.loadReviewProductRequest({ products, headers })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, slug]);
  //
  return reviews && reviewAll ? (
    <div className="w-full">
      {reviewAll.sumAll === 0 ? (
        <div className="w-full py-3 px-2.5 text-sm text-center bg-gray-100 dark:bg-dark-third pt-8">
          <p>
            Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu
            tiên đánh giá cho sản phẩm này
          </p>
          <ButtonSendRate products={products} />
        </div>
      ) : (
        <>
          <InfoRateComment
            products={products}
            reviewAll={reviewAll}
            reviews={reviews}
            active={active}
          />
          <DetailRateComment
            reviewAll={reviewAll}
            reviews={reviews}
            products={products}
            index={index}
          />
        </>
      )}
    </div>
  ) : (
    ""
  );
}

export default RateComment;
