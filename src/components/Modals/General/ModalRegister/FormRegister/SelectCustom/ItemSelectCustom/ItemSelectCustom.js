import React from "react";

function ItemSelectCustom(props) {
  //
  const { item, modal, setModal, setIcon, setData } = props;
  //
  return (
    <div
      onClick={() => {
        setData(item.data);
        setModal(!modal);
        setIcon(item.icon);
      }}
      className="p-2.5 w-full hover:bg-gray-200 cursor-pointer"
    >
      {item.data}
    </div>
  );
}

export default ItemSelectCustom;
