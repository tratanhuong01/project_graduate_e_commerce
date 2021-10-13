import React from "react";
import { useDispatch } from "react-redux";
import * as cartsAction from "../../../actions/cart/index";

function TitleCart(props) {
  //
  const { carts } = props;
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full bg-white hidden md:flex dark:bg-dark-second">
      <div
        className="w-10 flex justify-center border-2 border-solid border-gray-100 dark:border-dark-third 
        p-3 relative"
      >
        <input
          type="checkbox"
          className="transform scale-125 absolute top-1/3 left-2"
          onChange={(event) =>
            dispatch(
              cartsAction.loadCartMain(
                event.target.checked ? [...carts.list] : []
              )
            )
          }
          checked={carts.list.length === carts.main.length && carts.list.length}
          disabled={carts.list.length === 0 && true}
        />
      </div>
      <div
        className="w-2/12 flex justify-center border-2 border-solid border-gray-100  dark:border-dark-third
        p-3"
      >
        Hình ảnh
      </div>
      <div className="w-7/12 flex justify-center">
        <div
          className="w-2/4 flex justify-center border-2 border-solid border-gray-100  dark:border-dark-third
        p-3"
        >
          Tên sản phẩm
        </div>
        <div
          className="w-1/4 flex justify-center border-2 border-solid border-gray-100  dark:border-dark-third
        p-3"
        >
          Đơn giá
        </div>
        <div
          className="w-1/4 flex justify-center border-2 border-solid border-gray-100  dark:border-dark-third
        p-3"
        >
          Số lượng
        </div>
      </div>
      <div className="w-3/12 flex justify-center">
        <div
          className="w-2/3 flex justify-center border-2 border-solid border-gray-100  dark:border-dark-third
        p-3"
        >
          Tổng tiền
        </div>
        <div
          className="w-1/3 flex justify-center border-2 border-solid border-gray-100  dark:border-dark-third
        p-3"
        >
          Xóa
        </div>
      </div>
    </div>
  );
}

export default TitleCart;
