import React from "react";
import Sale from "./Sale/Sale";
import ImageMain from "./Image/ImageMain/ImageMain";
import OptionAndView from "./OptionAndView/OptionAndView";
import CostAndLink from "./TypeProduct/CostAndLink/CostAndLink";

function ItemProductIndex(props) {
  //
  const { product } = props;
  //
  return (
    <>
      <div className="w-1/2 p-2 relative z-40">
        {product.sale > 0 && <Sale sale={product.sale} />}
        <div className="w-full relative md:h-80 xl:h-64 mx-auto item__category ">
          <ImageMain image={product.image} />
          <OptionAndView product={product} />
          <span
            className="bx bxs-gift text-4xl text-organce cursor-pointer 
          absolute z-50 bottom-1 right-0"
          ></span>
          <span
            className="px-2 py-1.5 rounded-full text-xs bg-organce text-white 
          font-semibold absolute bottom-1 left-2 cursor-pointer"
          >
            <i className="fas fa-fire text-yellow-300 mr-2"></i>Giảm{" "}
            {new Intl.NumberFormat().format(
              product.priceOutput * (product.sale / 100)
            )}
            đ
          </span>
        </div>
        <CostAndLink product={product} />
      </div>
    </>
  );
}

export default ItemProductIndex;
