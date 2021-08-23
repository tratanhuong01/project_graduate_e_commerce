import React, { useEffect } from "react";
import MainAbout from "../../containers/About/MainAbout";

function About(props) {
  //
  useEffect(() => {
    //
    window.scrollTo(0, 0);
    document.title = "Giới thiệu";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <MainAbout />
    </>
  );
}

export default About;
