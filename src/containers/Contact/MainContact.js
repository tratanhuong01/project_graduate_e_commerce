import React from "react";
import HeaderNormal from "../../components/Header/HeaderNormal/HeaderNormal";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import Rule from "../../containers/General/Rule";
import ReciveInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import ContentContact from "./ContentContact";

function MainContact(props) {
  //
  //
  return (
    <div className="w-full">
      <div className="w-full relative text-white md:text-black">
        <HeaderNormal />
      </div>
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
