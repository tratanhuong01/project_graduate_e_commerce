import React from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ListWishlist from "../../components/Wishlist/ListWishlist";
import { PAGE_WISHLIST } from "../../constants/Config";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

function MainWishlist(props) {
  return (
    <div className="w-full">
      <BreadcrumbsItem to={PAGE_WISHLIST}>Sản phẩm yêu thích</BreadcrumbsItem>
      <LevelUrl />
      <ListWishlist />
    </div>
  );
}

export default MainWishlist;
