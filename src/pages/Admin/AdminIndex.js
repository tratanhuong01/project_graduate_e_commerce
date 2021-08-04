import React from "react";
import IndexLeft from "../../containers/Admin/Index/MainIndex/IndexLeft/IndexLeft";
import IndexRight from "../../containers/Admin/Index/MainIndex/IndexRight/IndexRight";

function AdminIndex(props) {
  return (
    <div className="w-full flex">
      <IndexLeft />
      <IndexRight />
    </div>
  );
}

export default AdminIndex;
