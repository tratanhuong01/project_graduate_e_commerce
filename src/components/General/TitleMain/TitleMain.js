import React from "react";

function TitleMain(props) {
  //
  const { Content } = props;
  //
  return (
    <p
      className="p-8 font-bold text-4xl text-center 
        hover:text-organce cursor-pointer"
    >
      {Content}
    </p>
  );
}

export default TitleMain;
