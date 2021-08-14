import React from "react";
import AuthorPost from "../AuthorPost/AuthorPost";
import FooterContent from "../FooterContent/FooterContent";
import HeaderContent from "../HeaderContent/HeaderContent";

function ContentNewsDetail(props) {
  //
  const { newsDetail } = props;
  //
  return (
    <div className="w-full ">
      <HeaderContent newsDetail={newsDetail} />
      <div
        className="my-5 post w-full"
        dangerouslySetInnerHTML={{ __html: newsDetail.content }}
      ></div>
      <FooterContent />
      <AuthorPost />
    </div>
  );
}

export default ContentNewsDetail;
