import { FastField, Form, Formik } from "formik";
import React, { Component } from "react";
import InputField from "../../../../General/InputField/InputField";
import * as Yup from "yup";
import CreateAddress from "./CreateAddress/CreateAddress";
import TypeAddress from "./TypeAddress/TypeAddress";
import FooterFormAddress from "./FooterFormAddress/FooterFormAddress";
import WarningFormAddress from "./WarningFormAddress/WarningFormAddress";

class FormAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    const validationSchema = Yup.object().shape({
      fullName: Yup.string().required("Họ tên không được để trống!!"),
      numberPhone: Yup.string().required("Số điện thoại không được để trống!!"),
    });
    const { returnProfile } = this.props;
    return (
      <Formik
        initialValues={{ fullName: "", numberPhone: "" }}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {(formikProps) => {
          const { values, handleChange, handleBlur } = formikProps;
          return (
            <Form>
              <div className="w-full flex">
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
              </div>
              <div className="w-full my-1 px-2 relative">
                <div
                  onClick={() =>
                    this.setState({
                      show: !this.state.show,
                    })
                  }
                  className="w-full p-2.5 border-2 border-solid border-gray-300 
                text-gray-400 rounded-lg cursor-pointer"
                >
                  Tỉnh/thành phố, Quận/huyện , Phường/xã
                </div>
                <span
                  className="bx bx-chevron-down absolute top-3 text-gray-600 
                right-5 text-2xl"
                ></span>
                <div className="w-4 h-4 rounded-full bg-gray-500 text-white flex justify-center items-center text-sm  absolute top-4 right-11 cursor-pointer">
                  <i className="bx bx-x"></i>
                </div>
                {this.state.show && <CreateAddress />}
              </div>
              <div className="w-full my-4 px-2 relative z-10">
                <input
                  type="text"
                  className="w-full p-2.5 border-2 border-solid border-gray-300 
                  text-gray-800 rounded-lg"
                  placeholder="Địa chỉ cụ thể.."
                />
              </div>
              <WarningFormAddress />
              <TypeAddress />
              <hr className="mt-5" />
              <FooterFormAddress returnProfile={returnProfile} />
            </Form>
          );
        }}
      </Formik>
    );
  }
}
export default FormAddress;
