import React from "react";
import AvatarUser from "./AvatarUser/AvatarUser";
import CategoryProfile from "./CategoryProfile/CategoryProfile";

function ProfileLeft(props) {
  return (
    <div className="w-1/4">
      <AvatarUser />
      <CategoryProfile />
    </div>
  );
}

export default ProfileLeft;
