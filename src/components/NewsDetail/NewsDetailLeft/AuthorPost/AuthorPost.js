import React from "react";

function AuthorPost(props) {
  return (
    <div className="w-full flex my-3 p-3 border-2 border-solid border-gray-200 dark:text-white">
      <img
        src="http://www.thetahmid.com/themes/tennews-v1.1/images/author.jpg"
        alt=""
        className="w-32 h-32 rounded-lg items-center flex"
      />
      <div className="flex items-center flex-wrap ml-5">
        <div className="mb-2 font-semibold text-gray-500 dark:text-white">
          AUTHOR :{" "}
          <span className="font-bold text-gray-700  dark:text-white">
            TRÀ HƯỞNG
          </span>
        </div>
        <div className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          doloribus unde molestias laborum delectus adipisci, eos repellat in
          debitis cum impedit numquam, architecto, facilis.
        </div>
        <div className="flex text-gray-500">
          <i className="bx bxl-facebook mr-1.5 hover:text-organce cursor-pointer" />
          <i className="bx bxl-instagram mr-1.5 hover:text-organce cursor-pointer" />
          <i className="bx bxl-youtube mr-1.5 hover:text-organce cursor-pointer" />
          <i className="bx bxl-google-plus mr-1.5 hover:text-organce cursor-pointer" />
          <i className="bx bxl-twitter mr-1.5 hover:text-organce cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default AuthorPost;
