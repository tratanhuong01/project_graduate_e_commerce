import React from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import NewsDetailLeft from "../../components/NewsDetail/NewsDetailLeft/NewsDetailLeft";
import NewsDetailRight from "../../components/NewsDetail/NewsDetailRight/NewsDetailRight";

function MainNewsDetail(props) {
  //
  const { newsDetail } = props;
  //
  return (
    <div className="w-full">
      <div className="w-full">
        <LevelUrl />
        <hr className="my-2"></hr>
        <div className="xl:w-4/5 w-full mx-auto p-4 flex flex-col lg:flex-row">
          <NewsDetailLeft newsDetail={newsDetail} />
          <NewsDetailRight />
        </div>
      </div>
    </div>
  );
}

export default MainNewsDetail;
