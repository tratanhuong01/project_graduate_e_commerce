import { FastField, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
import InputField from "../../InputField/InputField";
import EndFormRegister from "../EndFormRegister/EndFormRegister";
import * as Config from "../../../../constants/Config";
import * as Yup from "yup";
class FormRegister extends Component {
  openModalLogin = () => {
    this.props.openModalLogin();
  };
  onSubmitRegister = (data) => {
    this.props.addUserRequest(data);
    this.props.openModalLogin();
  };
  render() {
    const validationSchema = Yup.object().shape({
      fullName: Yup.string().required("Họ tên không được để trống !!"),
      email: Yup.string()
        .required("Email không được để trống !!")
        .email("Email không đúng định dạng !!"),
      numberPhone: Yup.string()
        .matches(
          Config.REGEX_NUMBER_PHONE,
          "Số điện thoại không đúng định dạng !!"
        )
        .required("Số điện thoại không được để trống !!"),
      birthday: Yup.date().required("Ngày sinh không được để trống !!"),
      password: Yup.string()
        .min(6, "Mật khẩu phải tối đa 6 kí tự !!")
        .required("Mật khẩu không được để trống !!"),
    });
    return (
      <Formik
        initialValues={{
          fullName: "",
          numberPhone: "",
          email: "",
          address: "",
          birthday: "",
          password: "",
          typeAccount: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={this.onSubmitRegister}
      >
        {(formikProps) => {
          const { values, handleChange, handleBlur } = formikProps;
          return (
            <Form>
              <FastField
                label="Họ tên"
                type="text"
                name="fullName"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Họ tên"
                icon="bx bx-user-circle"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <FastField
                label="Email"
                type="email"
                name="email"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Email"
                icon="bx bx-mail-send"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <FastField
                label="Số điện thoại"
                type="text"
                name="numberPhone"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Số điện thoại"
                icon="bx bx-phone-call"
                value={values.numberPhone}
                onChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <FastField
                label="Ngày sinh"
                type="date"
                name="birthday"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                icon="bx bx-calendar-alt"
                value={values.birthday}
                onChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <FastField
                label="Mật khẩu"
                type="password"
                name="password"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                icon="bx bx-lock-open"
                value={values.password}
                placeHolder="Mật khẩu"
                onChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <EndFormRegister openModalLogin={this.openModalLogin} />
            </Form>
          );
        }}
      </Formik>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    openModalLogin: () => {
      dispatch(actions.openModalLogin());
    },
    addUserRequest: (user) => {
      dispatch(actions.addUserRequest(user));
    },
  };
};
export default connect(null, mapDispatchToProps)(FormRegister);
