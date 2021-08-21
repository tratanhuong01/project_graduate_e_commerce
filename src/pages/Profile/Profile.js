import React, { useEffect } from "react";
import MainProfile from "../../containers/Profile/MainProfile";

function Profile(props) {
  //
  const { slug } = props.match.match.params;
  useEffect(() => {
    //
    document.title = "Tài khoản của tôi";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return <MainProfile slug={slug} />;
}

export default Profile;
