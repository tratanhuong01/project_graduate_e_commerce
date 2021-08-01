import React from "react";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import HeaderNormal from "../../components/Header/HeaderNormal/HeaderNormal";
import InfoNews from "../../components/News/InfoNews/InfoNews";
import Rule from "../General/Rule";

function MainNewsDetail(props) {
  return (
    <div className="w-full">
      <div className="w-full relative text-white md:text-black">
        <HeaderNormal />
      </div>
      <div className="w-full bg-gray-100">
        <LevelUrl />
        <hr className="my-2"></hr>
        <div className="xl:w-4/5 w-full mx-auto p-4">
          <InfoNews />
        </div>

        <Rule />
        <ReciviceInfo />
        <EndFooter />
      </div>
    </div>
  );
}

export default MainNewsDetail;
