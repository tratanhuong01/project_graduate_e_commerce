import React, { useState } from "react";
import Header from "../../components/Header/Header";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import Rule from "../../containers/General/Rule";
import ReciveInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import ContentContact from "./ContentContact";
import MainCategory from "../../components/Index/CategoryIndex/MainCategory/MainCategory";

function MainContact(props) {
  //
  const { subClassMenu } = props;
  const [menu, setMenu] = useState(false);

  //
  return (
    <div className="w-full">
      <Header subClassMenu={subClassMenu} menu={menu} setMenu={setMenu} />
      <MainCategory menu={menu} setMenu={setMenu} />
      <div className="w-full bg-gray-100">
        <LevelUrl />
        <ContentContact />
        <hr className="my-2"></hr>
        <div className="w-full xl:w-4/5 mx-auto p-4">
          <div className="w-full mx-auto mt-5 mb-2"></div>
        </div>
        <Rule />
        <ReciveInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainContact;
