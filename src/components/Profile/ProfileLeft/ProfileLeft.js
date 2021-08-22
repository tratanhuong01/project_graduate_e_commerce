import React from "react";
import AvatarUser from "./AvatarUser/AvatarUser";
import CategoryProfile from "./CategoryProfile/CategoryProfile";

function ProfileLeft(props) {
  //
  const { slug } = props;
  //
  return (
    <div className="w-full md:w-1/4 dark:text-white">
      <AvatarUser />
      <CategoryProfile slug={slug} />
    </div>
  );
}

export default ProfileLeft;
