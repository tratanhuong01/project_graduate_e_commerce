import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartsAction from "../../../actions/cart/index";

function Right(props) {
  //
  const states = useSelector((state) => {
    return {
      product: state.product,
      user: state.user,
    };
  });
  const { product, user } = states;
  const dispatch = useDispatch();
  //
  return (
    <div className="w-1/2 flex justify-end">
      <div className="flex items-center">
        <button
          onClick={() =>
            dispatch(
              cartsAction.addCartRequest({
                user: user,
                amount: 1,
                idProduct:
                  product.typeDisplay === 0
                    ? product.view.idProduct
                    : product.modal.idProduct,
              })
            )
          }
          type="button"
          className="px-10 py-3.5 rounded-full shadow-lg bg-organce 
            font-semibold text-sm font-semibold flex items-center text-white border-2 
            border-solid border-2 border-gray-100 ml-10 * hover:border-orangce flex 
            items-center"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default Right;
