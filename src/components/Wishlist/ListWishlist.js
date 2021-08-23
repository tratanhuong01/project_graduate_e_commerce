import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../General/Pagination/Pagination";
import ItemWishlist from "./ItemWishlist/ItemWishlist";
import TitleWishlist from "./TitleWishlist/TitleWishlist";

function ListWishlist(props) {
  //
  const wishLists = useSelector((state) => state.wishLists);
  //
  return wishLists.length > 0 ? (
    <div className="px-3 w-full xl:w-4/5 mx-auto dark:text-white">
      <TitleWishlist />
      {wishLists.map((wishList, index) => {
        return <ItemWishlist wishList={wishList} key={index} />;
      })}
      <div className="w-full flex justify-center my-2">
        <Pagination />
      </div>
    </div>
  ) : (
    <div className="w-full my-2 text-center py-5 text-gray-600 dark:text-white">
      Hiện tại bạn chưa có sản phẩm yêu thích.
    </div>
  );
}

export default ListWishlist;
