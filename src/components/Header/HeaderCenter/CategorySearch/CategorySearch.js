import React, { useState } from "react";
import ItemCategorySearch from "./ItemCategorySearch/ItemCategorySearch";

function CategorySearch(props) {
  //
  const { setData, data, categorys } = props;
  const [show, setShow] = useState(false);
  //
  return (
    <div
      onClick={() => setShow(!show)}
      className="w-52 lg:w-48 py-2.5 px-1 border-solid border-gray-200 border-l-2 border-r-2 flex font-semibold justify-center items-center relative cursor-pointer  dark:text-gray-300"
    >
      <div className="text-sm">{data.name}</div>
      <span className="bx bx-chevron-down ml-3"></span>
      {show ? (
        <div className="w-full absolute top-full left-0 bg-white dark:bg-dark-third z-50">
          <div
            onClick={() =>
              setData({
                name: "Tất cả danh mục",
                id: "",
              })
            }
            className="w-full text-sm p-2 border-solid border-gray-200 border-b-2 flex font-semibold justify-center items-center cursor-pointer hover:bg-gray-100 dark:border-dark-second 
            dark:hover:bg-dark-second"
          >
            Tất cả danh mục
          </div>
          {categorys.map((category, index) => {
            return (
              <ItemCategorySearch
                category={category}
                key={index}
                setData={setData}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CategorySearch;