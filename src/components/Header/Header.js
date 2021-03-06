import React, { useEffect, useState } from "react";
import useCategoryList from "../../hook/useCategoryList";
import MainCategory from "../Index/CategoryIndex/MainCategory/MainCategory";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderTop from "./HeaderTop/HeaderTop";
import Menu from "./Menu/Menu";
import MenuCategory from "./Menu/MenuCategory/MenuCategory";

function Header(props) {
  //
  const [menu, setMenu] = useState(false);
  const categorys = useCategoryList();
  const [subClassMenu, setSubClassMenu] = useState(false);
  useEffect(() => {
    //
    const eventScroll = (e) => {
      if (window.scrollY > 130)
        if (subClassMenu) return;
        else setSubClassMenu(true);
      else setSubClassMenu(false);
    }
    window.addEventListener("scroll", eventScroll);
    return () => {
      window.removeEventListener("scroll", eventScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <HeaderTop />
      <div
        className={`w-full bg-white dark:bg-dark-second lg:sticky top-0 z-50 relative ${subClassMenu ? "shadow-lg" : ""
          }`}
      >
        <div className="xl:w-4/5 w-full mx-auto flex text-gray-800">
          <div className="w-1/5 md:hidden flex items-center ml-3">
            <div
              onClick={() => setMenu(!menu)}
              className="w-12 h-12 rounded-full bg-white dark:bg-dark-second flex justify-center 
              items-center dark:text-gray-300"
            >
              <i className="bx bx-list-ul cursor-pointer text-4xl flex"></i>
            </div>
          </div>
          <HeaderLeft />
          {subClassMenu && (
            <div
              className={`hidden md:flex md:w-8/12 lg:w-3/5 items-center justify-end menu `}
            >
              <div className="md:w-full md:mx-4 lg:mx-0 lg:w-10/12 flex item-center ">
                <MenuCategory />
              </div>
            </div>
          )}
          {!subClassMenu && <HeaderCenter categorys={categorys} />}

          <HeaderRight />
        </div>
      </div>
      <Menu menu={menu} setMenu={setMenu} categorys={categorys} />
      <MainCategory menu={menu} setMenu={setMenu} categorys={categorys} />
    </>
  );
}

export default Header;
