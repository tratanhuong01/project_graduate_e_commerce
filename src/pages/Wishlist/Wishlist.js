import React, { useEffect } from "react";
import MainWishlist from "../../containers/Wishlist/MainWishlist";
function Wishlist(props) {
  //
  useEffect(() => {
    //
    document.title = "Yêu thích";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return <MainWishlist />;
}

export default Wishlist;
