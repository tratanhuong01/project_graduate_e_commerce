import React, { useEffect } from "react";
import ItemTechnicalData from "./ItemTechnicalData/ItemTechnicalData";

function TechnicalData(props) {
  //
  const { attributes } = props;
  useEffect(() => {}, [attributes]);
  //
  return (
    <div
      className={`${"w-2/3"} mx-auto pt-16 overflow-y-auto scrollbar-css`}
      style={{ height: "calc(90vh - 48px)", maxHeight: "calc(90vh - 48px)" }}
    >
      {attributes &&
        attributes.map((attribute, index) => {
          return <ItemTechnicalData key={index} attribute={attribute} />;
        })}
    </div>
  );
}

export default TechnicalData;
