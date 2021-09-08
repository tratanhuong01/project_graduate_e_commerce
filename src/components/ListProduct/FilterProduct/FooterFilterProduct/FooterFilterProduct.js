import React from "react";
import { useSelector } from "react-redux";

function FooterFilterProduct(props) {
  //
  const listProduct = useSelector((state) => state.listProduct);
  //
  return (
    <div className="w-full flex">
      <div className="w-2/3 flex items-center">
        <ul className="w-full flex">
          <li className="pr-3 font-semibold mr-3">
            {listProduct.products ? listProduct.products.length : "..."} điện
            thoại
          </li>
          <li className="pr-3 mr-3 flex items-center">
            <input type="checkbox" className="transform scale-150 mr-2" />
            <span>Mới</span>
          </li>
          <li className="pr-3 mr-3 flex items-center">
            <input type="checkbox" className="transform scale-150 mr-2" />
            <span>Cũ</span>
          </li>
          <li className="pr-3 mr-3 flex items-center">
            <input type="checkbox" className="transform scale-150 mr-2" />
            <span>Trả góp 0%</span>
          </li>
        </ul>
      </div>
      <div className="w-1/3 flex justify-end items-center">
        <select className="py-1 pr-4 pl-1 rounded-sm border-2 border-solid border-gray-300">
          <option>Mới nhất</option>
          <option>Bán chạy</option>
          <option>Khuyến mãi</option>
          <option>Giá từ thấp đến cao</option>
          <option>Giá từ cao đến thấp</option>
          <option>Theo lượt đánh giá</option>
        </select>
      </div>
    </div>
  );
}

export default FooterFilterProduct;
