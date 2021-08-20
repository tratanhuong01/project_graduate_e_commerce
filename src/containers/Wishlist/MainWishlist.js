import React, { useState } from "react";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import Header from "../../components/Header/Header";
import MainCategory from "../../components/Index/CategoryIndex/MainCategory/MainCategory";
import ListWishlist from "../../components/Wishlist/ListWishlist";
import useCategoryList from "../../hook/useCategoryList";
import Rule from "../General/Rule";

function MainWishlist(props) {
  //
  const { subClassMenu } = props;
  const [menu, setMenu] = useState(false);
  const categorys = useCategoryList();
  //
  return (
    <div className="w-full">
      <Header
        setMenu={setMenu}
        menu={menu}
        subClassMenu={subClassMenu}
        categorys={categorys}
      />
      <MainCategory menu={menu} setMenu={setMenu} categorys={categorys} />

      <div className="w-full">
        <LevelUrl />
        <ListWishlist />
        <Rule />
        <ReciviceInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainWishlist;
