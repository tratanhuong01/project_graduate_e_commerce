import React from "react";
import useResetPage from "../hook/useResetPage";
import MapContact from "../components/Contact/ContentContact/MapContact/MapContact";
import FormContact from "../components/Contact/ContentContact/FormContact/FormContact";
import InfoContact from "../components/Contact/ContentContact/InfoContact/InfoContact";
import { PAGE_CONTACT } from "../constants/Config";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LevelUrl from "../components/General/LevelUrl/LevelUrl";

function Contact(props) {
  //
  useResetPage("Liên hệ");
  //
  return (
    <div className="w-full bg-gray-100 dark:bg-dark-second dark:text-white">
      <BreadcrumbsItem glyph="" to={PAGE_CONTACT}>
        Tin tức
      </BreadcrumbsItem>
      <LevelUrl />
      <div className="xl:w-4/5 w-full mx-auto p-4">
        <MapContact />
        <div className="w-full flex flex-col xl:flex-row my-10">
          <FormContact />
          <InfoContact />
        </div>
      </div>
      <hr className="my-2"></hr>
    </div>
  );
}

export default Contact;
