import React, { useState } from "react";
import ItemPaginationListProduct from "./ItemPaginationListProduct/ItemPaginationListProduct";

function PaginationListProduct(props) {
  //
  const { products } = props;
  const [active, setActive] = useState(0);
  let arrayNew = [];
  for (let index = 0; index < Math.ceil(products.length / 4); index++) {
    arrayNew.push(index);
  }
  //
  return (
    <div className="w-full flex justify-center">
      <ul className="flex items-center jusitfy-center">
        {arrayNew.map((item, index) => {
          return (
            <ItemPaginationListProduct
              active={active}
              key={index}
              setActive={setActive}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default PaginationListProduct;
