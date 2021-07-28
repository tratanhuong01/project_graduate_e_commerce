import React, { Component } from "react";
import HeaderNormal from "../../components/Header/HeaderNormal/HeaderNormal";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import Rule from "../../containers/General/Rule";
import ReciveInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import News from "../Index/News";
import ItemChildNews from "../../components/News/ItemChildNews/ItemChildNews";
import InfoNews from "../../components/News/InfoNews/InfoNews";
class MainNews extends Component {
  render() {
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
          <News />
          <div className="xl:w-4/5 w-full flex flex-col sm:flex-row mx-auto px-4">
            <ItemChildNews />
            <ItemChildNews />
          </div>
          <div className="xl:w-4/5 w-full flex flex-col sm:flex-row mx-auto px-4">
            <ItemChildNews />
            <ItemChildNews />
          </div>
          <Rule />
          <ReciveInfo />
          <EndFooter />
        </div>
      </div>
    );
  }
}

export default MainNews;
