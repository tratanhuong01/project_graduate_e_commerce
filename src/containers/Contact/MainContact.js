import React, { useEffect } from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ContentContact from "./ContentContact/ContentContact";

function MainContact(props) {
  //
  useEffect(() => {}, []);
  //
  return (
    <div className="w-full bg-gray-100">
      <LevelUrl />
      <ContentContact />
      <hr className="my-2"></hr>
      <div className="w-full xl:w-4/5 mx-auto p-4">
        <div className="w-full mx-auto mt-5 mb-2"></div>
      </div>
    </div>
  );
}

export default MainContact;
