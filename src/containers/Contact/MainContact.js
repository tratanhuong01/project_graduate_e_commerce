import React from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ContentContact from "./ContentContact/ContentContact";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { PAGE_CONTACT } from "../../constants/Config";

function MainContact(props) {
  //
  //
  return (
    <div className="w-full bg-gray-100 dark:bg-dark-second dark:text-white">
      <BreadcrumbsItem glyph="" to={PAGE_CONTACT}>
        Tin tức
      </BreadcrumbsItem>
      <LevelUrl />
      <ContentContact />
      <hr className="my-2"></hr>
      <div className="w-full xl:w-4/5 mx-auto p-4">
        <div className="w-full mx-auto mt-5 mb-2"></div>
      </div>
    </div>
  );
}

export default MainContact;
