import React from "react";
import { useSelector } from "react-redux";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import FilterProduct from "../../components/ListProduct/FilterProduct/FilterProduct";
// import ControlsProduct from "../ListProduct/ControlsProduct/ControlsProduct";
import ListProduct from "./ListProduct/ListProduct";
import { NotFound } from "http-errors";
function MainListProduct(props) {
  //
  // const [show, setShow] = useState(false);
  const listProduct = useSelector((state) => state.listProduct);
  const { slug } = props;
  //
  return (
    <div className="w-full dark:bg-dark-second dark:text-gray-300">
      <LevelUrl />
      <hr className="w-full xl:w-4/5  mx-auto my-2"></hr>
      <div className="w-full xl:w-4/5 mx-auto p-4">
        {listProduct.products === "" ? (
          <NotFound />
        ) : (
          <div className="w-full mx-auto mb-2">
            <FilterProduct slug={slug} />
            {/* <ControlsProduct setShow={setShow} show={show} /> */}
            <ListProduct listProduct={listProduct} />
          </div>
        )}
      </div>
      {/* {!show && (
        <div
          onClick={() => setShow(!show)}
          className="cursor-pointer mt-10 right-1 
          transform -translate-y-1/2 z-50 absolute lg:hidden"
          style={{ top: "16%" }}
        >
          <span className="bx bxs-category text-organce text-5xl "></span>
        </div>
      )} */}
    </div>
  );
}

export default MainListProduct;
