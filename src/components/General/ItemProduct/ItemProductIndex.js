import React, { useState } from "react";
import Sale from "./Sale/Sale";
import ImageMain from "./Image/ImageMain/ImageMain";
import OptionAndView from "./OptionAndView/OptionAndView";
import ArrowUp from "./TypeProduct/ArrowDown/ArrowDown";
import ArrowDown from "./TypeProduct/ArrowDown/ArrowDown";
import ItemTypeProduct from "./TypeProduct/ItemTypeProduct/ItemTypeProduct";
import * as Config from "../../../constants/Config";
import { Link } from "react-router-dom";

function ItemProductIndex(props) {
  //
  const { product } = props;
  const [numberIndex, setNumberIndex] = useState(-1);
  const showImages = product.UrlImage.map((item, index) => {
    return (
      <ItemTypeProduct
        key={index}
        image={item}
        index={index}
        onMouseEnters={(url) => setImageMain(url)}
        onMouseLeaves={() => {
          setImageMain(null);
          setNumberIndex(-1);
        }}
        numberIndex={numberIndex}
      />
    );
  });
  const [imageMain, setImageMain] = useState(product.UrlImage[0].Url);
  const [imageChange, setImageChange] = useState(null);
  //
  return (
    <>
      <div className="w-1/2 p-2 relative z-10">
        {product.Price.Sale === 0 ? "" : <Sale sale={product.Price.Sale} />}
        <div className="w-full relative h-64 mx-auto product ">
          <ImageMain URL={imageChange === null ? imageMain : imageChange} />
          <OptionAndView product={product} />
        </div>
        <div className="w-full mx-auto p-1 flex">
          <ArrowUp />
          <ul className="w-11/12 flex justify-center">{showImages}</ul>
          <ArrowDown />
        </div>
        <p
          className="p-2 hover:text-organce text-center cursor-pointer 
                    text-xm h-16 flex justify-center"
        >
          <span className="flex items-center font-semibold">
            <Link to={`${Config.PAGE_DETAIL_PRODUCT}/` + product.Path}>
              {product.NameProduct}
            </Link>
          </span>
        </p>
        <p
          className="p-2 pt-0 text-organce text-center cursor-pointer 
                    text-xm"
        >
          {new Intl.NumberFormat().format(
            product.Price.Price * ((100 - product.Price.Sale) / 100)
          )}
          <u>đ</u>&nbsp;
          <strike className="ml-3 text-gray-500">
            {new Intl.NumberFormat().format(product.Price.Price)} <u>đ</u>
          </strike>
        </p>
      </div>
    </>
  );
}

export default ItemProductIndex;
