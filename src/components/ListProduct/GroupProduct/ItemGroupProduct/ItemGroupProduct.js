import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { PAGE_PRODUCT } from "../../../../constants/Config";

function ItemGroupProduct(props) {
  //
  const { groupProduct } = props;
  const listProduct = useSelector((state) => state.listProduct);
  const history = useHistory();
  //
  return (
    <div className="px-2 mx-2 flex flex-wrap justify-center w-32">
      <div
        onClick={() =>
          history.push(
            `${PAGE_PRODUCT}/${listProduct.slug}/${groupProduct.slugGroupProduct}`
          )
        }
        className="w-16 h-16 bg-gray-100 flex justify-center items-center rounded-full border-2 border-solid hover:border-organce cursor-pointer shadow-lg dark:bg-dark-second dark:border-dark-third"
      >
        <img
          src="https://cdn.tgdd.vn/Category/60/icon-op-lung-100x100-60x60.png"
          alt=""
          className="w-14 h-14 rounded-full "
        />
      </div>
      <p
        onClick={() =>
          history.push(
            `${PAGE_PRODUCT}/${listProduct.slug}/${groupProduct.slugGroupProduct}`
          )
        }
        className="text-gray-600 font-semibold text-sm my-2 cursor-pointer hover:text-organce hover:font-bold w-full max-w-full overflow-hidden whitespace-nowrap inline-block text-center overflow-ellipsis dark:text-gray-300"
      >
        {groupProduct.nameGroupProduct}
      </p>
    </div>
  );
}

export default ItemGroupProduct;
