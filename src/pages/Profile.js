import React, { useEffect, useState } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import LevelUrl from "../components/General/LevelUrl/LevelUrl";
import ProfileLeft from "../components/Profile/ProfileLeft/ProfileLeft";
import ProfileRight from "../components/Profile/ProfileRight/ProfileRight";
import { PAGE_PROFILE_USER, PAGE_LOGIN } from "../constants/Config";
import useResetPage from "../hook/useResetPage";

function Profile(props) {
  //
  const user = useSelector((state) => state.user);
  const { slug } = props.match.match.params;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
    //
  }, []);
  useResetPage("Tài khoản của tôi");
  useEffect(() => {}, [user]);
  //
  return !user && !localStorage.getItem("userToken") ? (
    <Redirect to={PAGE_LOGIN}></Redirect>
  ) : (
    <>
      <BreadcrumbsItem to={PAGE_PROFILE_USER}>
        Thông tin cá nhân
      </BreadcrumbsItem>
      <LevelUrl />
      <div className="w-full xl:w-4/5 flex-col md:flex-row mx-auto px-3 my-2 flex">
        {user && !loading ? (
          <>
            <ProfileLeft slug={slug} />
            <ProfileRight slug={slug} />
          </>
        ) : (
          <div className="w-full p-3 items-center justify-center h-80 flex">
            <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
