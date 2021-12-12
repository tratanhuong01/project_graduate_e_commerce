import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useSelector } from "react-redux";
import LevelUrl from "../components/General/LevelUrl/LevelUrl";
import { PAGE_ABOUT } from "../constants/Config";
import useInfoWebsite from "../hook/useInfoWebsite";
import useResetPage from "../hook/useResetPage";

function About(props) {
  //
  const headers = useSelector((state) => state.headers);
  useResetPage("Giới thiệu");
  const about = useInfoWebsite(0, headers);
  //
  return (
    <>
      <div className="w-full dark:bg-dark-second dark:text-white">
        <BreadcrumbsItem glyph="" to={PAGE_ABOUT}>
          Giới thiệu
        </BreadcrumbsItem>
        <LevelUrl />
        <p className="text-3xl font-bold text-center py-12">Giới thiệu</p>
        <hr className="my-2"></hr>
        <div className="w-full xl:w-4/5 mx-auto p-4">
          <div
            className="w-full mx-auto mt-5 mb-2 post"
            dangerouslySetInnerHTML={{
              __html: about,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default About;
