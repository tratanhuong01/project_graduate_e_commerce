import React from "react";
import Second from "../../containers/Second";
import MainIndex from "../../containers/Index/MainIndex";

function Index(props) {
  //
  //
  return (
    <>
      <MainIndex />
      <Second isPopup={true} />
    </>
  );
}

export default Index;
