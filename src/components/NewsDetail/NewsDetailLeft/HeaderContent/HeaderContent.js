import React from "react";

function HeaderContent(props) {
  //
  const { newsDetail } = props;
  //
  return (
    <div className="w-full my-2">
      <p className="text-2xl font-semibold text-gray-800">{newsDetail.title}</p>
      <div className="w-full my-2 text-gray-600 flex items-center">
        <span className="bx bx-user mr-2 text-sm"></span>
        <span className="mr-3 hover:text-organce cursor-pointer text-sm">
          {`${newsDetail.userNews.firstName} ${newsDetail.userNews.lastName}`}
        </span>
        <span className="bx bx-calendar mr-2 text-sm"></span>
        <span className="mr-3 hover:text-organce cursor-pointer text-sm">
          {newsDetail.timeCreated}
        </span>
        <span className="bx bx-comment-detail mr-2 text-sm"></span>
        <span className="mr-3 hover:text-organce cursor-pointer text-sm">
          (03 bình luận)
        </span>
      </div>
    </div>
  );
}

export default HeaderContent;
