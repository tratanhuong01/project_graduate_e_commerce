import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../General/Pagination/Pagination";
import ItemWishlist from "./ItemWishlist/ItemWishlist";
import TitleWishlist from "./TitleWishlist/TitleWishlist";

function ListWishlist(props) {
  //
  const states = useSelector((state) => {
    return {
      carts: state.carts,
    };
  });
  const { carts } = states;
  //
  return (
    <div className="px-3 w-full xl:w-4/5 mx-auto dark:text-white">
      <TitleWishlist />
      {carts.map((cart, index) => {
        return <ItemWishlist wishList={cart} key={index} />;
      })}
      <div className="w-full flex justify-center my-2">
        <Pagination />
      </div>
    </div>
  );
}

export default ListWishlist;
