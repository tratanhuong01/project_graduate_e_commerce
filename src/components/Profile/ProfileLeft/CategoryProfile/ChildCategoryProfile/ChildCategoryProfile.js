import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import * as Config from "../../../../../constants/Config";

function ChildCategoryProfile(props) {
  //
  const category = [
    {
      name: "Hồ sơ",
      to: Config.PROFILE_INFO,
      exact: true,
    },
    {
      name: "Ngân hàng",
      to: Config.PROFILE_BANK,
      exact: true,
    },
    {
      name: "Địa chỉ",
      to: Config.PROFILE_ADDRESS,
      exact: true,
    },
    {
      name: "Đổi mật khẩu",
      to: Config.PROFILE_CHANGE_PASSWORD,
      exact: true,
    },
  ];
  const { match } = props;
  const index = category.findIndex(
    (item) => item.to === match.match.params.slugProfile
  );
  useEffect(() => {}, [match]);
  //
  return (
    index >= 0 && (
      <div className="w-full pl-9">
        {category.map((item, index) => {
          return (
            <Route key={index}>
              <div className="w-full my-2 py-2 flex items-center">
                <Link
                  to={`${Config.PAGE_PROFILE_USER}/${item.to}`}
                  className={`font-semibold ${
                    match.match.params.slugProfile === item.to
                      ? "text-organce"
                      : "hover:text-organce"
                  } cursor-pointer`}
                >
                  {item.name}
                </Link>
              </div>
            </Route>
          );
        })}
      </div>
    )
  );
}

export default ChildCategoryProfile;
