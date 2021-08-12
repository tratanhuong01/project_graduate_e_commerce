import React from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import Header from "../../components/Header/Header";
import ControlsProduct from "../ListProduct/ControlsProduct";
import ListProduct from "./ListProduct";
import Rule from "../../containers/General/Rule";
import ReciveInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";

function MainListProduct(props) {
  return (
    <div className="w-full">
      <div className="w-full relative text-white md:text-black">
        <Header />
      </div>
      <div className="w-full bg-gray-100">
        <LevelUrl />
        <hr className="my-2"></hr>
        <div className="w-full xl:w-4/5 mx-auto p-4">
          <div className="w-full mx-auto flex mt-5 mb-2">
            <ControlsProduct />
            <ListProduct />
          </div>
        </div>
        <Rule />
        <ReciveInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainListProduct;
