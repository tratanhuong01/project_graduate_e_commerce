import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import ModalWrapper from "../../../containers/ModalWrapper";
import FormSendRate from "./FormSendRate/FormSendRate";

function ModalSendRate(props) {
  //
  const { user, reviewProduct } = useSelector((state) => {
    return {
      user: state.user,
      reviewProduct: state.reviewProduct,
    };
  });
  const [indexStar, setIndexStar] = useState(1);
  const prevStar = useRef(indexStar);
  const arrayDemo = [1, 2, 3, 4, 5];
  const { products } = props;
  //
  return (
    <ModalWrapper
      title="Đánh giá sản phẩm"
      className="w-11/12 xl:w-5/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-lg z-50 animate__animated animate__fadeIn bg-white overflow-y-auto scrollbar-css"
      style={{ maxHeight: "90vh" }}
    >
      <div className="w-full mb-1 flex justify-center flex-col text-center">
        <p className="text-xl font-bold mt-1 mb-3">
          {products.nameLineProduct}
        </p>
      </div>
      <div className="w-full my-1 flex px-9">
        <span className="flex mr-3 items-center">
          Đánh giá của bạn về sản phẩm :{" "}
        </span>
        <>
          {arrayDemo.map((item, index) => {
            return (
              <span
                onClick={() => {
                  setIndexStar(index + 1);
                  prevStar.current = index + 1;
                }}
                onMouseEnter={() => setIndexStar(index + 1)}
                onMouseLeave={() => setIndexStar(prevStar.current)}
                key={index}
                className={`${
                  indexStar > index ? "bx bxs-star" : "bx bx-star"
                } text-yellow-500 mr-0.5 text-3xl cursor-pointer `}
              ></span>
            );
          })}
        </>
      </div>
      <FormSendRate
        indexStar={indexStar}
        products={products}
        reviewProduct={reviewProduct}
        user={user}
      />
    </ModalWrapper>
  );
}

export default ModalSendRate;
