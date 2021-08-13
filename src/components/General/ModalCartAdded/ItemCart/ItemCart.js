import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as cartsAction from "../../../../actions/cart/index";
import * as Config from "../../../../constants/Config";

function ItemCart(props) {
  //
  const { cart } = props;
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  const dispatch = useDispatch();
  //
  return (
    <>
      <div className="w-full py-2 flex">
        <div className="w-1/3">
          <img src={cart.image.src} className="w-full" alt="" />
        </div>
        <div className="w-2/3 pl-4 relative">
          <Link
            to={`${Config.PAGE_DETAIL_PRODUCT}/${cart.slug}`}
            className="mb-2  hover:text-organce font-semibold"
          >
            {cart.nameLineProduct}
          </Link>
          {cart.color && <p className="mb-2">Màu : {cart.color.description}</p>}
          <p className="text-organce mb-2">
            {new Intl.NumberFormat(["ban", "id"]).format(
              cart.priceOutput * ((100 - cart.sale) / 100)
            )}{" "}
            <u className="mr-2">đ</u>x{cart.amount}
          </p>
          <span
            onClick={() =>
              dispatch(
                cartsAction.deleteCartRequest({
                  user: user,
                  idCart: cart.idCart,
                })
              )
            }
            className="text-2xl font-semibold hover:text-organce 
            absolute right-2 bottom-2"
          >
            &times;
          </span>
        </div>
      </div>
      <hr className="my-2"></hr>
    </>
  );
}

export default ItemCart;
