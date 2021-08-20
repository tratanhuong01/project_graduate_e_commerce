import React, { useState } from "react";
import Header from "../../components/Header/Header";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import Rule from "../../containers/General/Rule";
import ReciveInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import MainCategory from "../../components/Index/CategoryIndex/MainCategory/MainCategory";
import useCategoryList from "../../hook/useCategoryList";
function MainAbout(props) {
  //
  const { subClassMenu } = props;
  const [menu, setMenu] = useState(false);
  const categorys = useCategoryList();

  //
  return (
    <div className="w-full">
      <Header
        subClassMenu={subClassMenu}
        menu={menu}
        setMenu={setMenu}
        categorys={categorys}
      />
      <MainCategory menu={menu} setMenu={setMenu} categorys={categorys} />

      <div className="w-full bg-gray-100">
        <p className="text-3xl font-bold text-center py-12">Giới thiệu</p>
        <LevelUrl />
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

export default MainAbout;
