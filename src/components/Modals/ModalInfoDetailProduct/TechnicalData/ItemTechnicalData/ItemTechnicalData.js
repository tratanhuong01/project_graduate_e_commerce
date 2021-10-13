import React from "react";

function ItemTechnicalData(props) {
  //
  const { attribute } = props;
  //
  return (
    <div className="w-full mx-auto border-l-2 border-r-2 border-solid border-gray-200 text-gray-700 dark:text-gray-300 dark:border-dark-third">
      <div className="w-full text-xm p-3 bg-gray-100 font-bold flex items-center dark:bg-dark-second">
        {attribute.groupAttribute.nameGroupAttribute}
      </div>
      {attribute.attributeProductList.map((item, index) => {
        return (
          <div
            className="w-full flex border-b-2 border-solid border-gray-200"
            key={index}
          >
            <div className="w-1/3 p-2.5 flex items-center font-semibold">
              {item.attributeProduct.nameAttribute}
            </div>
            <div
              className={`w-2/3 p-2.5 flex items-center ${
                item.valueAttributeProduct.split("@").length === 1
                  ? "text-gray-800 dark:text-gray-300"
                  : "text-blue-500"
              }`}
            >
              <ul
                className={
                  item.valueAttributeProduct.split("@").length === 1 ? "" : ""
                }
              >
                {item.valueAttributeProduct.split("@").map((data, index) => {
                  return (
                    <li className="my-0.5 flex items-center" key={index}>
                      {item.valueAttributeProduct.split("@").length === 1 ? (
                        ""
                      ) : (
                        <i className="mr-1">-</i>
                      )}
                      {data}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemTechnicalData;
