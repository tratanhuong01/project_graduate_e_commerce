import React, { useEffect } from "react";
import ItemTechnicalData from "./ItemTechnicalData/ItemTechnicalData";

function TechnicalData(props) {
  //
  const { attributes } = props;
  useEffect(() => { }, [attributes]);
  //
  return (
    <div
      className={`w-full px-1 h-full max-h-full lg:w-2/3 mx-auto overflow-y-auto scrollbar-css `}
    >
      {attributes &&
        attributes.map((attribute, index) => {
          return <ItemTechnicalData key={index} attribute={attribute} />;
        })}
    </div >
  );
}

export default TechnicalData;
