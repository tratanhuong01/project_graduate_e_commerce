import React, { useEffect } from "react";
import MainNews from "../../containers/News/MainNews";

function News(props) {
  //

  useEffect(() => {
    //
    document.title = "Tin tức";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return <MainNews />;
}

export default News;
