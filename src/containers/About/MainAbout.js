import React, { useEffect, useState } from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { PAGE_ABOUT } from "../../constants/Config";
import api from "../../Utils/api";
import { useSelector } from "react-redux";

function MainAbout(props) {
  //
  const [about, setAbout] = useState(null);
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(`configWebsites/type/0`, "GET", null, headers);
      if (unmounted) return;
      setAbout(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
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
  );
}

export default MainAbout;
