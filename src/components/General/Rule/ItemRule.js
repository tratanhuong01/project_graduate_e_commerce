import React from "react";

function ItemRule(props) {
  //
  const { classNameOfTagDiv, classNameOfTagI, Content } = props;
  //
  return (
    <div className={classNameOfTagDiv}>
      <span className="flex items-center text-xm font-semibold">
        <i className={classNameOfTagI}></i>
        {Content}
      </span>
    </div>
  );
}

export default ItemRule;
