import React from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";

function MainAbout(props) {
  //

  //
  return (
    <div className="w-full bg-gray-100">
      <p className="text-3xl font-bold text-center py-12">Giới thiệu</p>
      <LevelUrl />
      <hr className="my-2"></hr>
      <div className="w-full xl:w-4/5 mx-auto p-4">
        <div className="w-full mx-auto mt-5 mb-2"></div>
      </div>
    </div>
  );
}

export default MainAbout;
