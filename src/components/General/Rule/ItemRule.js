import React from "react";

function ItemRule(props) {
  //
  const { classNameOfTagDiv, classNameOfTagI, Content } = props;
  //
  return (
    <div className={`${classNameOfTagDiv} my-3`}>
      <div className="w-1/3 lg:hidden flex items-center justify-end">
        <i className={classNameOfTagI}></i>
      </div>
      <div className={` hidden lg:flex`}>
        <span className={`${classNameOfTagI}`}></span>
      </div>

      <div className="w-2/3 lg:hidden flex ml-3">
        <span
          className="flex items-center text-sm font-semibold 
        hover:text-organce cursor-pointer"
        >
          {Content}
        </span>
      </div>
      <span
        className={`hidden lg:flex items-center text-sm font-semibold 
        hover:text-organce cursor-pointer`}
      >
        {Content}
      </span>
    </div>
  );
}

export default ItemRule;
