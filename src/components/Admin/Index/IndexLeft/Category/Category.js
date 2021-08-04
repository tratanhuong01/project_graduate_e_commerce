import React, { useState } from "react";
import ItemCategory from "./ItemCategory/ItemCategory";

function Category(props) {
  const category = [
    {
      id: 0,
      name: "Tổng quan",
      icon: "fas fa-home",
    },
    {
      id: 2,
      name: "Khách hàng",
      icon: "fas fa-user",
    },
    {
      id: 3,
      name: "Đơn hàng",
      icon: "bx bx-detail",
    },
    {
      id: 4,
      name: "Sản phẩm",
      icon: "bx bxl-product-hunt",
    },
    {
      id: 5,
      name: "Khuyến mãi",
      icon: "bx bx-gift",
    },
  ];
  const [categoryCurrent, setCategoryCurrent] = useState(0);
  const showCategorys = category.map((item, index) => {
    return (
      <ItemCategory
        item={item}
        key={index}
        id={categoryCurrent}
        setCategoryCurrent={setCategoryCurrent}
      />
    );
  });
  return (
    <div className="w-full">
      <ul className="w-full p-3">{showCategorys}</ul>
    </div>
  );
}

export default Category;
