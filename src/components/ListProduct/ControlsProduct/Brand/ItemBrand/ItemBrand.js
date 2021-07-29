import React from "react";

function ItemBrand(props) {
  const { brand, item } = props;
  return (
    <li className="my-2">
      <input
        type="radio"
        name="brand"
        value={item}
        className="mr-3"
        onChange={(event) =>
          props.filterProductBrand(props.product, event.target.value)
        }
        checked={item === brand ? true : false}
      />
      <label className="hover:text-organce cursor-pointer font-semibold">
        {item}
      </label>
    </li>
  );
}

export default ItemBrand;
