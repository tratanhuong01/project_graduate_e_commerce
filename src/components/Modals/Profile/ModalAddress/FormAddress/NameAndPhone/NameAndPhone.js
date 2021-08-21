import { FastField } from "formik";
import React, { Component } from "react";
import InputField from "../../../../../General/InputField/InputField";

class NameAndPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPhone: false,
    };
  }
  render() {
    const { values, handleChange, handleBlur, setData } = this.props;
    return (
      <div className="w-full flex relative">
        <FastField
          label="Họ tên"
          type="text"
          name="fullName"
          className="w-full rounded-lg p-2.5 border-2 border-solid pl-3 mt-2"
          placeHolder="Nhập họ tên"
          icon=""
          value={values.fullName}
          handleChange={handleChange}
          onBlur={handleBlur}
          component={InputField}
          isset={null}
          double={true}
        />
        <FastField
          label="Số điện thoại "
          type="text"
          name="numberPhone"
          onClick={() =>
            this.setState({
              showPhone: !this.state.showPhone,
            })
          }
          className="w-full pl-4 rounded-lg p-2.5 border-2 border-solid pl-3 mt-2"
          placeHolder="Nhập số điện thoại..."
          icon=""
          value={values.numberPhone}
          handleChange={handleChange}
          onBlur={handleBlur}
          component={InputField}
          isset={null}
          double={true}
        />
        {this.state.showPhone && (
          <div className="w-1/2 absolute mt-14 right-0 px-2 z-50 rounded-lg p-1">
            <div className="w-full border-2 border-solid bg-white border-gray-300">
              <div
                onClick={() => {
                  setData("numberPhone", "0354114665");
                  this.setState({
                    showPhone: false,
                  });
                }}
                className="w-full flex items-center py-1 px-2 text-gray-600  
                font-semibold"
              >
                <span className="mr-0.5">(+84) 354114665</span>
                <span
                  className="py-2 px-4 rounded-lg border-organce border-solid border-2 
                  text-organce font-semibold text-xs ml-8"
                >
                  Sử dụng
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default NameAndPhone;
