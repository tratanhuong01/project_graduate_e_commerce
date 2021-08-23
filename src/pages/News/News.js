import React from "react";
import MainNews from "../../containers/News/MainNews";
import useResetPage from "../../hook/useResetPage";

function News(props) {
  //
  useResetPage("Tin tức");
  //
  return <MainNews />;
}

export default News;
