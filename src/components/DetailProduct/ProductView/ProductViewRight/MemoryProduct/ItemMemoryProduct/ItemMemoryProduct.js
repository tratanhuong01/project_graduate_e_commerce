import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../../../../../Utils/api";
import * as productsAction from "../../../../../../actions/product/index";

function ItemMemoryProduct(props) {
  //
  const { memoryData, memoryCurrent, products } = props;
  const { product, headers } = useSelector((state) => {
    return {
      product: state.product,
      headers: state.headers,
    };
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const change = async () => {
    let formData = new FormData();
    formData.append(
      "idColor",
      product.typeDisplay === 0 ? product.view.color.id : product.modal.color.id
    );
    formData.append("idMemory", memoryData.id);
    formData.append("idLineProduct", products.idLineProduct);
    let result = await api(`getSlug`, "POST", formData, headers);
    if (product.typeDisplay === 0) history.push(result.data);
    dispatch(
      productsAction.loadProductChooseRequest(
        result.data,
        product.typeDisplay,
        headers
      )
    );
  };
  //
  return (
    <div
      onClick={() => change()}
      className={` px-4 py-2.5 m-1 flex justify-center border-2 border-solid bg-white dark:bg-dark-second  rounded-full cursor-pointer ${
        memoryData.id === memoryCurrent.id
          ? " text-organce border-orangce "
          : " border-gray-300"
      }`}
    >
      <span className="cursor-pointer text-xm flex items-center font-bold">
        {memoryData.nameMemory}
      </span>
    </div>
  );
}

export default ItemMemoryProduct;
