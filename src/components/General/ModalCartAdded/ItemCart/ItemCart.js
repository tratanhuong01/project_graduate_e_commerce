import React from "react";

function ItemCart(props) {
  return (
    <>
      <div className="w-full py-2 flex">
        <div className="w-1/3">
          <img src={"url"} className="w-full" alt="" />
        </div>
        <div className="w-2/3 pl-4 relative">
          <p className="mb-2">{"item.product.NameProduct"}</p>
          <p className="mb-2">Màu : {"item.cart.Color"}</p>
          <p className="text-organce mb-2">
            {new Intl.NumberFormat(["ban", "id"]).format(12345678)}{" "}
            <u className="mr-2">đ</u>x{7}
          </p>
          <span
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
