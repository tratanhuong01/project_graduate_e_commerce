import React, { useState } from "react";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import Header from "../../components/Header/Header";
import MainCategory from "../../components/Index/CategoryIndex/MainCategory/MainCategory";
import ProfileLeft from "../../components/Profile/ProfileLeft/ProfileLeft";
import ProfileRight from "../../components/Profile/ProfileRight/ProfileRight";
import useCategoryList from "../../hook/useCategoryList";
import Rule from "../General/Rule";

function MainProfile(props) {
  //
  const { subClassMenu, match } = props;
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
        <div className="w-full xl:w-4/5 flex-col md:flex-row mx-auto px-3 my-2 flex">
          <ProfileLeft match={match} />
          <ProfileRight match={match} />
        </div>
        <Rule />
        <ReciviceInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainProfile;
