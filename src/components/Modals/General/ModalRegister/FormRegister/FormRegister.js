import { FastField, Form, Formik } from "formik";
import { connect } from "react-redux";
import React, { Component } from "react";
import InputField from "../../../../../components/General/InputField/InputField";
import EndFormRegister from "../EndFormRegister/EndFormRegister";
import * as Config from "../../../../../constants/Config";
import * as Yup from "yup";
import * as usersAction from "../../../../../actions/user/index";
import SelectCustom from "./SelectCustom/SelectCustom";
import api from "../../../../../Utils/api";
class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSex: "Nam",
      validEmail: null,
      validPhone: null,
      emailOrPhone: "Email",
    };
  }
  onSubmitRegister = async (data) => {
    let formDataEmail = new FormData();
    formDataEmail.append("email", data.email);
    const email = await api("users/email", "POST", formDataEmail);
    let formDataPhone = new FormData();
    formDataPhone.append("phone", data.phone);
    const phone = await api("users/phone", "POST", formDataPhone);
    if (email.data.length > 0 && phone.data.length > 0) {
      this.setState({
        validEmail: "Email đã được sử dung !!",
        validPhone: "Số điện thoại đã được sử dụng !!",
      });
    } else if (email.data.length > 0 || phone.data.length > 0) {
      if (email.data.length > 0)
        this.setState({
          validEmail: "Email đã được sử dung !!",
        });
      else
        this.setState({
          validPhone: "Số điện thoại đã được sử dụng !!",
        });
    } else {
      let userRegister = { ...data };
      userRegister.sex = this.state.dataSex;
      this.props.registerAccount({
        user: userRegister,
        emailOrPhone: this.state.emailOrPhone,
      });
    }
  };
  render() {
    const { dataSex, validEmail, validPhone, emailOrPhone } = this.state;
    const arraySex = [
      { data: "Nam", icon: "bx bx-male-sign" },
      { data: "Nữ", icon: "bx bx-female-sign" },
      { data: "Khác", icon: "bx bxs-user-pin" },
    ];
    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required("Họ không được để trống !!"),
      lastName: Yup.string().required("Tên không được để trống !!"),
      email: Yup.string()
        .required("Email không được để trống !!")
        .email("Email không đúng định dạng !!"),
      phone: Yup.string()
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
          id: "",
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          sex: dataSex,
          birthday: "",
          password: "",
          type: 0,
          codeEmail: "",
          codePhone: "",
          isVerifyEmail: 0,
          isVerifyPhone: 0,
          timeCreated: "",
        }}
        validationSchema={validationSchema}
        onSubmit={this.onSubmitRegister}
      >
        {(formikProps) => {
          const { values, handleChange, handleBlur } = formikProps;
          return (
            <Form>
              <FastField
                isset={null}
                label="Họ"
                type="text"
                name="firstName"
                className="w-full rounded-lg p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Họ"
                icon="bx bx-user-circle"
                value={values.fullName}
                handleChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <FastField
                isset={null}
                label="Tên"
                type="text"
                name="lastName"
                className="w-full rounded-lg p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Tên"
                icon="bx bx-user-circle"
                value={values.fullName}
                handleChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <FastField
                label="Email"
                type="email"
                name="email"
                className="w-full rounded-lg p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Email"
                icon="bx bx-mail-send"
                value={values.email}
                handleChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
                setDataIsset={() =>
                  this.setState({
                    validEmail: null,
                  })
                }
                isset={validEmail}
                emailOrPhone={emailOrPhone === "Email" ? true : false}
                setDefaultSendCode={(data) => {
                  this.setState({
                    emailOrPhone: data,
                  });
                }}
              />
              <FastField
                label="Số điện thoại"
                type="text"
                name="phone"
                className="w-full rounded-lg p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Số điện thoại"
                icon="bx bx-phone-call"
                value={values.numberPhone}
                handleChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
                setDataIsset={() =>
                  this.setState({
                    validPhone: null,
                  })
                }
                isset={validPhone}
                emailOrPhone={emailOrPhone === "Số điện thoại" ? true : false}
                setDefaultSendCode={(data) => {
                  this.setState({
                    emailOrPhone: data,
                  });
                }}
              />
              <SelectCustom
                label="Giới tính"
                array={arraySex}
                data={dataSex}
                setData={(data) =>
                  this.setState({
                    dataSex: data,
                  })
                }
              />
              <FastField
                isset={null}
                label="Ngày sinh"
                type="date"
                name="birthday"
                className="w-full rounded-lg p-2.5 border-2 border-solid pl-10 mt-2"
                icon="bx bx-calendar-alt"
                value={values.birthday}
                handleChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <FastField
                isset={null}
                label="Mật khẩu"
                type="password"
                name="password"
                className="w-full rounded-lg p-2.5 border-2 border-solid pl-10 mt-2"
                icon="bx bx-lock-open"
                value={values.password}
                placeHolder="Mật khẩu"
                handleChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <EndFormRegister />
            </Form>
          );
        }}
      </Formik>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    registerAccount: (data) => {
      dispatch(usersAction.registerAccount(data));
    },
  };
};
export default connect(null, mapDispatchToProps)(FormRegister);
