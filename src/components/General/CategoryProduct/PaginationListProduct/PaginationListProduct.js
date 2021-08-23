import React from "react";
import ItemPaginationListProduct from "./ItemPaginationListProduct/ItemPaginationListProduct";

function PaginationListProduct(props) {
  //
  const { products, active, setActive, idCategoryProduct } = props;
  let arrayNew = [];
  for (let index = 0; index < Math.ceil(products.length / 4); index++) {
    arrayNew.push(index);
  }
  //
  return (
    <div className="w-full justify-center hidden lg:flex">
      <ul className="flex items-center jusitfy-center dark:text-white">
        {arrayNew.map((item, index) => {
          return (
            <ItemPaginationListProduct
              active={active}
              key={index}
              setActive={setActive}
              index={index}
              idCategoryProduct={idCategoryProduct}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default PaginationListProduct;
