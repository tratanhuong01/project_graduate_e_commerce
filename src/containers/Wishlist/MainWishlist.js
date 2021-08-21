import React from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ListWishlist from "../../components/Wishlist/ListWishlist";

function MainWishlist(props) {
  return (
    <div className="w-full">
      <LevelUrl />
      <ListWishlist />
    </div>
  );
}

export default MainWishlist;
