import React, { useState } from "react";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import Header from "../../components/Header/Header";
import MainCategory from "../../components/Index/CategoryIndex/MainCategory/MainCategory";
import NewsDetailLeft from "../../components/NewsDetail/NewsDetailLeft/NewsDetailLeft";
import NewsDetailRight from "../../components/NewsDetail/NewsDetailRight/NewsDetailRight";
import useCategoryList from "../../hook/useCategoryList";
import Rule from "../General/Rule";

function MainNewsDetail(props) {
  //
  const { newsDetail, subClassMenu } = props;
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

      <div className="w-full">
        <LevelUrl />
        <hr className="my-2"></hr>
        <div className="xl:w-4/5 w-full mx-auto p-4 flex flex-col lg:flex-row">
          <NewsDetailLeft newsDetail={newsDetail} />
          <NewsDetailRight />
        </div>
        <Rule />
        <ReciviceInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainNewsDetail;
