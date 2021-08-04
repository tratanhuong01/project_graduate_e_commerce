import React from "react";
import ItemReplyCurrent from "./ItemReplyCurrent/ItemReplyCurrent";

function ReplyCurrent(props) {
  return (
    <div className="w-1/3 p-1 bg-white mr-2">
      <p class="font-bold text-xm font-bold my-2 pl-3">Phản hồi gần đây</p>
      <ul class="w-full flex flex-wrap">
        <ItemReplyCurrent />
        <ItemReplyCurrent />
        <ItemReplyCurrent />
        <ItemReplyCurrent />
      </ul>
    </div>
  );
}

export default ReplyCurrent;
