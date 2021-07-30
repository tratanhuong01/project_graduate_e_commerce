import React from "react";

function ItemPrice(props) {
  return (
    <li className="my-2">
      <input type="radio" name="price" className="mr-3" />
      <label className="hover:text-organce cursor-pointer font-semibold">
        Từ 123 <u>đ</u> đến 456 <u>đ</u>
      </label>
    </li>
  );
}

export default ItemPrice;
