import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../../../../../Utils/api";
import * as productsAction from "../../../../../../actions/product/index";

function ItemColorProduct(props) {
  //
  const { color, image, imageData, products } = props;
  const states = useSelector((state) => {
    return {
      product: state.product,
    };
  });
  const { product } = states;
  const dispatch = useDispatch();
  const history = useHistory();
  const change = async () => {
    let formData = new FormData();
    formData.append("idColor", color.id);
    formData.append(
      "idMemory",
      products.memory !== null
        ? ` ${
            product.typeDisplay === 0
              ? product.view.memory.id
              : product.modal.memory.id
          }`
        : ""
    );
    formData.append("idLineProduct", products.idLineProduct);
    let result = await api(`getSlug`, "POST", formData);
    if (product.typeDisplay === 0) history.push(result.data);
    if (result.data)
      await dispatch(productsAction.loadProductChooseRequest(result.data));
  };
  //
  return (
    <div className="w-14 h-14 p-2 relative image-color flex-shrink-0">
      <div
        className="px-4 py-2 bg-organce font-semibold absolute -top-12 
        left-0 text-white text-sm w-28 text-center color z-50 shadow-xl-organce"
      >
        {color.description}
      </div>

      <img
        onClick={() => change()}
        src={image.src}
        className={`w-10 h-10 border-2 border-solid cursor-pointer object-cover image-color 
        ${
          imageData.id === image.id
            ? "border-organce"
            : "border-gray-300 hover:border-organce"
        }`}
        alt=""
      />
    </div>
  );
}

export default ItemColorProduct;
