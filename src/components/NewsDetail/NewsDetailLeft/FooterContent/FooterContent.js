import React from "react";
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";

function FooterContent(props) {
  return (
    <div className="w-full flex items-center my-6">
      <FacebookShareButton
        url={window.location.href}
        quote={"Share with facebook"}
      >
        <div
          className=" px-2 py-1.5 text-white flex mr-3 cursor-pointer hover:bg-organce-important"
          style={{ backgroundColor: "#3b5998" }}
        >
          <span className="bx bxl-facebook-circle mr-2 text-2xl flex"></span>
          <span className="flex items-center text-sm font-semibold">
            Facebook
          </span>
        </div>
      </FacebookShareButton>
      <TwitterShareButton
        url={window.location.href}
        quote={"Share with twitter"}>
        <div
          className=" px-2 py-1.5 text-white flex mr-3 cursor-pointer hover:bg-organce-important"
          style={{ backgroundColor: "#1da1f2" }}
        >
          <span className="bx bxl-twitter mr-2 text-2xl flex"></span>
          <span className="flex items-center text-sm">Twitter</span>
        </div>
      </TwitterShareButton>
      <EmailShareButton
        url={window.location.href}
        quote={"Share with twitter"}>
        <div
          className=" px-2 py-1.5 text-white flex mr-3 cursor-pointer hover:bg-organce-important"
          style={{ backgroundColor: "#d34836" }}
        >
          <span className="bx bxl-google-plus mr-2 text-2xl flex"></span>
          <span className="flex items-center text-sm font-semibold">
            Google plus
          </span>
        </div>
      </EmailShareButton>
    </div>
  );
}

export default FooterContent;
