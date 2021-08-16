import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../../constants/Config";

function DescribeChild(props) {
  //
  const { products, typeDisplay } = props;
  //
  return (
    <>
      <div
        className="text-green-700 my-3 font-semibold hover:text-green-500 
      cursor-pointer"
      >
        Tiết kiệm hơn :
        <span className="font-bold mx-1">
          {new Intl.NumberFormat().format(
            products.priceOutput * (products.sale / 100)
          )}
          đ
        </span>
        so với giá niêm yết
      </div>
      <div className="mb-3 flex">
        <p>
          <span
            className="text-gray-700 px-2 border-l-2 border-solid 
            border-gray-500"
          >
            Thương hiệu :
          </span>
          {products.brand.nameBrand}
        </p>
        <p>
          <span
            className="text-gray-700 ml-4 px-2 border-l-2 border-solid 
            border-gray-500"
          >
            Bảo hành :{" "}
          </span>
          12 tháng
        </p>
      </div>
      <p className="my-3 text-organce text-4xl font-semibold">
        {new Intl.NumberFormat(["ban", "id"]).format(
          products.priceOutput * ((100 - products.sale) / 100)
        )}
        <u className="text-xl pl-2 mr-3">đ</u>
        <strike className="text-gray-600 font-semibold text-xl mr-2">
          {new Intl.NumberFormat().format(products.priceOutput)}đ
        </strike>
        <span
          className="bg-red-500 font-semibold text-xs p-1.5 cursor-pointer rounded-r-2xl 
          z-10 text-white pl-2 absolute hover:bg-red-600"
          style={{ transform: "translate(10px,10px)" }}
        >
          Khuyến mãi -{products.sale} %
        </span>
      </p>
      <ul className="text-gray-700 my-2 text-sm">
        <li className="my-2">Kích thước màn hình : 1,2"</li>
        <li className="my-2">Độ phân giải màn hình : 360 x 360 pixels</li>
        <li className="my-2">Luôn hiển thị : có</li>
        {typeDisplay !== 0 && (
          <li className="my-7">
            <Link
              className="bg-organce px-10 py-2.5 rounded-full 
                  text-white font-semibold"
              to={`${Config.PAGE_DETAIL_PRODUCT}/${products.slug}`}
            >
              Xem chi tiết
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}

export default DescribeChild;
