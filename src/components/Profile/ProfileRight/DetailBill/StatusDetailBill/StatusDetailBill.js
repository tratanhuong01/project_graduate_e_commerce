import React from "react";
import ItemStatusDetailBill from "./ItemStatusDetailBill/ItemStatusDetailBill";

function StatusDetailBill(props) {
  return (
    <div className="w-full my-5 flex relative">
      <ItemStatusDetailBill
        left={false}
        right={true}
        label={""}
        statusLine={true}
        icon={""}
      />
      <ItemStatusDetailBill
        left={true}
        right={true}
        label={""}
        statusLine={true}
        icon={""}
      />
      <ItemStatusDetailBill
        left={true}
        right={true}
        label={""}
        statusLine={true}
        icon={""}
      />
      <ItemStatusDetailBill
        left={true}
        right={true}
        label={""}
        statusLine={true}
        icon={""}
      />
      <ItemStatusDetailBill
        left={true}
        right={false}
        label={""}
        statusLine={true}
        icon={""}
      />
    </div>
  );
}

export default StatusDetailBill;
