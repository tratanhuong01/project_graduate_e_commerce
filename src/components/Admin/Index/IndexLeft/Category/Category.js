import React, { useState } from "react";
import ItemCategory from "./ItemCategory/ItemCategory";
import * as Types from "../../../../../constants/admin/ActionTypes";
function Category(props) {
  const category = [
    {
      id: 0,
      name: "Tổng quan",
      icon: "bx bx-home-circle",
      type: "dashboard",
      child: [],
    },
    {
      id: 2,
      name: "Khách hàng",
      icon: "bx bx-user",
      child: [
        {
          id: 0,
          name: "Khách hàng",
          type: "customer",
          label: "Quản lí khách hàng",
        },
        {
          id: 1,
          name: "Nhà cung cấp",
          type: "manufacture",
          label: "Quản lí nhà cung cấp",
        },
      ],
    },
    {
      id: 3,
      name: "Đơn hàng",
      icon: "bx bx-detail",
      type: "bill",
      child: [],
    },
    {
      id: 4,
      name: "Sản phẩm",
      icon: "bx bxl-product-hunt",
      child: [
        {
          id: 0,
          name: "Danh sách sản phẩm",
        },
        {
          id: 1,
          name: "Danh mục sản phẩm",
        },
        {
          id: 2,
          name: "Nhóm sản phẩm",
        },
        {
          id: 3,
          name: "Dòng sản phẩm",
        },
      ],
    },
    {
      id: 5,
      name: "Khuyến mãi",
      icon: "bx bx-gift",
      type: "sale",
      child: [],
    },
    {
      id: 6,
      name: "Thiết lập",
      icon: "fas fa-cog",
      type: "config",
      child: [],
    },
    {
      id: 7,
      name: "Danh mục",
      icon: "bx bxs-category-alt",
      child: [
        {
          id: 0,
          name: "Màu sắc",
        },
        {
          id: 1,
          name: "Kích thước",
        },
        {
          id: 2,
          name: "Thương hiệu",
        },
      ],
    },
    {
      id: 8,
      name: "Bài viết",
      icon: "bx bx-pen",
      type: "news",
      child: [],
    },
    {
      id: 9,
      name: "Liên hệ",
      icon: "bx bx-current-location",
      type: "contact",
      child: [],
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
      <ul className="w-full py-1 px-3">{showCategorys}</ul>
    </div>
  );
}

export default Category;
