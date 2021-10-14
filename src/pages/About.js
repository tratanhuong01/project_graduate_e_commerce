import React, { useEffect, useState } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useSelector } from "react-redux";
import LevelUrl from "../components/General/LevelUrl/LevelUrl";
import { PAGE_ABOUT } from "../constants/Config";
import useResetPage from "../hook/useResetPage";
import api from "../Utils/api";

function About(props) {
  //
  const [about, setAbout] = useState(null);
  const headers = useSelector((state) => state.headers);
  useResetPage("Giới thiệu");
  useEffect(() => {
    //
    window.scrollTo(0, 0);
    let unmounted = false;
    async function fetch() {
      try {
        const result = await api(`configWebsites/type/0`, "GET", null, headers);
        if (unmounted) return;
        setAbout(result.data);
      } catch (error) {
        throw error;
      }
    }
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
              __html: about && JSON.parse(about.content).data,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default About;
