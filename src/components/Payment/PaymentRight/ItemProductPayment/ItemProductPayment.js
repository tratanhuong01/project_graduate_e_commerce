import React from "react";
import { Link } from "react-router-dom";

function ItemProductPayment(props) {
  //
  const { item } = props;
  //
  return (
    <div className="w-full flex my-5">
      <div className="w-1/12 flex justify-center">
        <span className="flex items-center">
          <input
            type="checkbox"
            className="transform scale-125"
            onChange={() => ""}
          />
        </span>
      </div>
      <div className="w-11/12 flex">
        <div className="w-1/5 p-1 relative">
          <img src={item.image.src} className="w-full object-cover" alt="" />
          <div
            className="w-6 h-6 rounded-full bg-organce text-white font-semibold 
          absolute -top-1 -right-1 flex justify-center "
          >
            <span className="flex items-center">{item.amount}</span>
          </div>
        </div>
        <div className="w-4/5 pl-4 flex">
          <div className="w-3/4 flex">
            <div className="flex flex-wrap items-center">
              <div>
                <p className="w-full mb-2">
                  <Link to={`/detail-product/${item.slug}`}>
                    {item.nameLineProduct}
                  </Link>
                </p>
                {item.color && (
                  <p className="text-gray-700">
                    Màu : {item.color.description}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-1/4 flex">
            <div className="flex items-center ">
              <p className="text-organce">
                {new Intl.NumberFormat("ban", "id").format(
                  item.priceOutput * ((100 - item.sale) / 100)
                )}{" "}
                <u>đ</u>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemProductPayment;
