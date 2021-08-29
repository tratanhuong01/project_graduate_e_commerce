import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../../../actions/modal/index";
function ButtonSendRate(props) {
  //
  const dispatch = useDispatch();
  const { products } = props;
  //
  return (
    <button
      onClick={() => dispatch(modalsAction.openModalSendRate(products))}
      className="px-6 py-2.5 rounded-full bg-organce text-white font-semibold 
          my-5 text-sm mx-auto"
    >
      Gửi đánh giá của bạn
    </button>
  );
}

export default ButtonSendRate;
