import React from "react";
import MainWishlist from "../../containers/Wishlist/MainWishlist";
import useResetPage from "../../hook/useResetPage";
function Wishlist(props) {
  //
  useResetPage("Yêu thích");
  //
  return <MainWishlist />;
}

export default Wishlist;
