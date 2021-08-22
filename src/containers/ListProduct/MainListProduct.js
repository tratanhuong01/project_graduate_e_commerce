import React, { useState } from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ControlsProduct from "../ListProduct/ControlsProduct/ControlsProduct";
import ListProduct from "./ListProduct/ListProduct";

function MainListProduct(props) {
  //
  const [show, setShow] = useState(false);
  //
  return (
    <div className="w-full bg-gray-100 dark:bg-dark-second dark:text-gray-300">
      <LevelUrl />
      <hr className="my-2"></hr>
      <div className="w-full xl:w-4/5 mx-auto p-4">
        <div className="w-full mx-auto flex mt-5 mb-2">
          <ControlsProduct setShow={setShow} show={show} />
          <ListProduct />
        </div>
      </div>
      {!show && (
        <div
          onClick={() => setShow(!show)}
          className="cursor-pointer mt-10 right-1 
          transform -translate-y-1/2 z-50 absolute lg:hidden"
          style={{ top: "16%" }}
        >
          <span className="bx bxs-category text-organce text-5xl "></span>
        </div>
      )}
    </div>
  );
}

export default MainListProduct;
