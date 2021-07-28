import React, { Component } from "react";

class LoginWith extends Component {
  render() {
    return (
      <>
        <hr />
        <div className="w-full flex justify-center mt-3">
          <div className="flex items-center">
            <span className="text-xl font-semibold mr-4 ">
              Hoặc đăng nhập với{" "}
            </span>
            <i className="bx bxl-facebook-circle text-blue-500 text-5xl mr-3 cursor-pointer"></i>
            <i className="bx bxl-google-plus-circle text-red-500 text-5xl mr-3 cursor-pointer"></i>
          </div>
        </div>
      </>
    );
  }
}

export default LoginWith;
