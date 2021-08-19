import React from "react";
import AvatarUser from "./AvatarUser/AvatarUser";
import CategoryProfile from "./CategoryProfile/CategoryProfile";

function ProfileLeft(props) {
  //
  const { match } = props;
  //
  return (
    <div className="w-1/4">
      <AvatarUser />
      <CategoryProfile match={match} />
    </div>
  );
}

export default ProfileLeft;
