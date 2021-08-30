import React from "react";

function FooterFilterProduct(props) {
  return (
    <div className="w-full flex">
      <div className="w-2/3 flex items-center">
        <ul className="w-full flex">
          <li className="pr-3 font-semibold mr-3">23 điện thoại</li>
          <li className="pr-3 mr-3 flex items-center">
            <input type="checkbox" className="transform scale-150 mr-2" />
            <span>Khuyến mãi</span>
          </li>
          <li className="pr-3 mr-3 flex items-center">
            <input type="checkbox" className="transform scale-150 mr-2" />
            <span>Khuyến mãi</span>
          </li>
        </ul>
      </div>
      <div className="w-1/3 flex justify-end items-center">
        <select className="py-1 pr-4 pl-1 rounded-lg border-2 border-solid border-gray-300">
          <option>Sắp xếp</option>
        </select>
      </div>
    </div>
  );
}

export default FooterFilterProduct;
