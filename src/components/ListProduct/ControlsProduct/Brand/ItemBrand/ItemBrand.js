import React from "react";

function ItemBrand(props) {
  return (
    <li className="my-2">
      <input type="radio" name="brand" className="mr-3" />
      <label className="hover:text-organce cursor-pointer font-semibold">
        Apple
      </label>
    </li>
  );
}

export default ItemBrand;
