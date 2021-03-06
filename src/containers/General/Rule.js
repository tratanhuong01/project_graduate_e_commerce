import React from "react";
import ItemRule from "../../components/General/Rule/ItemRule";

function Rule(props) {
  //
  //
  return (
    <div className="xl:w-4/5 w-full mx-auto p-4 flex-col md:flex md:flex-row dark:text-white">
      <ItemRule
        classNameOfTagDiv={"w-full md:w-1/4 my-2 justify-center flex  md:flex"}
        classNameOfTagI={"bx bxs-check-shield text-5xl text-green-500 mr-3"}
        Content={"Sản phẩm chính hãng"}
      />
      <ItemRule
        classNameOfTagDiv={"w-full md:w-1/4 my-2 justify-center flex  md:flex"}
        classNameOfTagI={"bx bx-target-lock text-5xl text-gray-500 mr-3"}
        Content={"Giao hàng tận nơi"}
      />
      <ItemRule
        classNameOfTagDiv={"w-full md:w-1/4 my-2 justify-center flex  md:flex"}
        classNameOfTagI={"bx bxs-gift text-5xl text-red-600 mr-3"}
        Content={"Thanh toán tại nhà"}
      />
      <ItemRule
        classNameOfTagDiv={"w-full md:w-1/4 my-2 justify-center flex md:flex"}
        classNameOfTagI={"bx bxs-meteor text-5xl text-yellow-500 mr-3"}
        Content={"Bảo hành chính hãng"}
      />
    </div>
  );
}

export default Rule;
