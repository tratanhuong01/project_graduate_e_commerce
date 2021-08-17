import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Rule from "../../containers/General/Rule";
import ReciveInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import ItemProductSearch from "../../components/General/ItemProduct/ItemProductSearch";
import NotifyNumberProductSearch from "../../components/Search/NotifyNumberProductSearch";
import MainCategory from "../../components/Index/CategoryIndex/MainCategory/MainCategory";

function MainSearch(props) {
  //
  const { subClassMenu } = props;
  const [menu, setMenu] = useState(false);

  //
  return (
    <div className="w-full">
      <Header subClassMenu={subClassMenu} menu={menu} setMenu={setMenu} />
      <MainCategory menu={menu} setMenu={setMenu} />

      <div className="w-full bg-gray-100">
        <div className="xl:w-4/5 w-full mx-auto p-4">
          <NotifyNumberProductSearch />
          <div className="w-full flex flex-wrap">
            <ItemProductSearch />
          </div>
        </div>
        <Rule />
        <ReciveInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainSearch;
