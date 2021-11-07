import React from "react";
import GoogleLogin from "react-google-login";
import api from "../../../../../Utils/api";
import * as usersAction from "../../../../../actions/user/index";
import { useDispatch } from "react-redux";
import { CLOSE_MODAL } from "../../../../../constants/ActionTypes";
import axios from "axios";

function LoginWith(props) {
  const dispatch = useDispatch();

  const responseGoogle = async (response) => {
    const result = await api(
      `checkEmailHave`,
      "POST",
      response.profileObj.email,
      { "Content-Type": "application/json" }
    );
    if (result.data) {
      dispatch(usersAction.loginAccount(result.data));
      dispatch(usersAction.updateHeaders(result.data.token));
      dispatch({ type: CLOSE_MODAL });
    } else {
      const info = await axios({
        method: "GET",
        url: `https://people.googleapis.com/v1/people/${response.googleId}?personFields=photos,emailAddresses,birthdays,genders,names&access_token=${response.accessToken}`,
        data: null,
      });
      if (info.data.resourceName) {
        const data = {
          id: null,
          userRole: {
            id: "CUSTOMER",
            nameRole: "Khách hàng",
            typeRole: 0,
            timeCreated: "10-04-2021 08:05:05",
          },
          firstName: info.data.names ? info.data.names[0].familyName : "",
          lastName: info.data.names ? info.data.names[0].givenName : "",
          birthday:
            info.data.birthday && info.data.birthday.length > 0
              ? `${info.data.birthdays[0].date.year}-${info.data.birthdays[0].date.month}-${info.data.birthdays[0].date.day} 00:00:00`
              : null,
          avatar: info.data.photos ? info.data.photos[0].url : null,
          sex: info.data.genders ? info.data.genders[0].formattedValue : null,
          email: info.data.emailAddresses
            ? info.data.emailAddresses[0].value
            : null,
          phone: null,
          password: null,
          codeEmail: null,
          codePhone: null,
          isVerifyEmail: 1,
          isVerifyPhone: 0,
          type: 2,
          timeCreated: null,
          status: 0,
          isRegister: 1,
          token: response.accessToken,
          googleId: response.googleId,
          facebookId: null,
        };
        dispatch(usersAction.registerAccount({ user: data }, true));
      }
    }
  };

  return (
    <>
      <hr />
      <div className="w-full flex justify-center mt-3">
        <div className="flex items-center">
          <span className="text-xl font-semibold mr-4 dark:text-gray-300">
            Hoặc đăng nhập với
          </span>
          <label htmlFor="ButtonFacebookLogin">
            <i className="bx bxl-facebook-circle text-blue-500 text-5xl mr-3 cursor-pointer"></i>
          </label>
          <GoogleLogin
            scope="https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/userinfo.profile"
            render={(renderProps) => (
              <i
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="bx bxl-google-plus-circle text-red-500 text-5xl mr-3 cursor-pointer"
              ></i>
            )}
            cookiePolicy={"single_host_origin"}
            clientId="522063106502-q5tc57sqpo628naeae5689nhgk28uptq.apps.googleusercontent.com"
            onSuccess={responseGoogle}
          />
        </div>
      </div>
    </>
  );
}

export default LoginWith;
