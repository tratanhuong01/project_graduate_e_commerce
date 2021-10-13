import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LevelUrl from "../components/General/LevelUrl/LevelUrl";
import ListWishlist from "../components/Wishlist/ListWishlist";
import { PAGE_WISHLIST } from "../constants/Config";
import useResetPage from "../hook/useResetPage";
function Wishlist(props) {
  //
  useResetPage("Yêu thích");
  //
  return (
    <div className="w-full">
      <BreadcrumbsItem to={PAGE_WISHLIST}>Sản phẩm yêu thích</BreadcrumbsItem>
      <LevelUrl />
      <ListWishlist />
    </div>
  );
}

export default Wishlist;
