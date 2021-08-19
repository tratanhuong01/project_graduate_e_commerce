import React, { useState } from "react";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import Header from "../../components/Header/Header";
import MainCategory from "../../components/Index/CategoryIndex/MainCategory/MainCategory";
import ProfileLeft from "../../components/Profile/ProfileLeft/ProfileLeft";
import ProfileRight from "../../components/Profile/ProfileRight/ProfileRight";
import Rule from "../General/Rule";

function MainProfile(props) {
  //
  const { subClassMenu, match } = props;
  const [menu, setMenu] = useState(false);
  //
  return (
    <div className="w-full">
      <Header setMenu={setMenu} menu={menu} subClassMenu={subClassMenu} />
      <MainCategory menu={menu} setMenu={setMenu} />

      <div className="w-full">
        <LevelUrl />
        <div className="w-full xl:w-4/5 mx-auto px-3 my-2 flex">
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
