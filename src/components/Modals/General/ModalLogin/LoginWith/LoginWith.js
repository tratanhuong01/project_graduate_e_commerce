import React from "react";
// import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

function LoginWith(props) {
  // const responseFacebook = (response) => {
  //   console.log(response);
  // };

  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <>
      <hr />
      <div className="w-full flex justify-center mt-3">
        <div className="flex items-center">
          <span className="text-xl font-semibold mr-4 ">
            Hoặc đăng nhập với{" "}
          </span>
          {/* <FacebookLogin
            className=""
            appId="" //APP ID NOT CREATED YET
            fields="name,email,picture"
            callback={responseFacebook}
          /> */}

          <i className="bx bxl-facebook-circle text-blue-500 text-5xl mr-3 cursor-pointer"></i>
          <label htmlFor="google-login">
            <i className="bx bxl-google-plus-circle text-red-500 text-5xl mr-3 cursor-pointer"></i>
          </label>
        </div>
      </div>
      <GoogleLogin
        clientId="522063106502-q5tc57sqpo628naeae5689nhgk28uptq.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="Đăng nhập với google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </>
  );
}

export default LoginWith;
