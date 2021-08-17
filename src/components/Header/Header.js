import React from "react";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderTop from "./HeaderTop/HeaderTop";
import Menu from "./Menu/Menu";

function Header(props) {
  //
  const { menu, setMenu } = props;
  //
  return (
    <>
      <HeaderTop />
      <div className="w-full bg-white lg:sticky top-0 z-second relative">
        <div className="xl:w-4/5 w-full mx-auto flex text-gray-800">
          <div className="w-1/5 md:hidden flex items-center ml-3">
            <div
              onClick={() => setMenu(!menu)}
              className="w-12 h-12 rounded-full bg-white flex justify-center 
              items-center "
            >
              <i className="bx bx-list-ul cursor-pointer text-5xl flex"></i>
            </div>
          </div>
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>
      </div>
      <Menu />
    </>
  );
}

export default Header;
