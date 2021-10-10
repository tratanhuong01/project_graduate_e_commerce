import React, { useEffect } from "react";
import ItemTechnicalData from "./ItemTechnicalData/ItemTechnicalData";

function TechnicalData(props) {
  //
  const { attributes } = props;
  useEffect(() => {}, [attributes]);
  //
  return (
    <div
      className={`${"w-2/3"} mx-auto overflow-y-auto scrollbar-css h-full max-h-full`}
    >
      {attributes &&
        attributes.map((attribute, index) => {
          return <ItemTechnicalData key={index} attribute={attribute} />;
        })}
    </div>
  );
}

export default TechnicalData;
