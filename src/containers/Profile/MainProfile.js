import React from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ProfileLeft from "../../components/Profile/ProfileLeft/ProfileLeft";
import ProfileRight from "../../components/Profile/ProfileRight/ProfileRight";

function MainProfile(props) {
  //
  const { slug } = props;
  //
  return (
    <div className="w-full">
      <div className="w-full">
        <LevelUrl />
        <div className="w-full xl:w-4/5 flex-col md:flex-row mx-auto px-3 my-2 flex">
          <ProfileLeft slug={slug} />
          <ProfileRight slug={slug} />
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
