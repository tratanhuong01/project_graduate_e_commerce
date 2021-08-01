import { FastField, Form, Formik } from "formik";
import { connect } from "react-redux";
import React, { Component } from "react";
import InputField from "../../../../../components/General/InputField/InputField";
import EndFormRegister from "../EndFormRegister/EndFormRegister";
import * as Config from "../../../../../constants/Config";
import * as Yup from "yup";
import * as usersAction from "../../../../../actions/user/index";
class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: false,
      dataSex: "Nam",
      iconSex: "bx bx-male-sign",
    };
  }
  onSubmitRegister = (data) => {
    this.props.registerAccount(data);
  };
  render() {
    const { sex, dataSex, iconSex } = this.state;
    const array = [
      { data: "Nam", icon: "bx bx-male-sign" },
      { data: "Nữ", icon: "bx bx-female-sign" },
      { data: "Khác", icon: "bx bxs-user-pin" },
    ];
    const showData = array.map((item, index) => {
      return dataSex === item.data ? (
        ""
      ) : (
        <div
          key={index}
          onClick={() =>
            this.setState({
              dataSex: item.data,
              sex: false,
              iconSex: item.icon,
            })
          }
          className="p-2.5 w-full hover:bg-gray-200 cursor-pointer"
        >
          {item.data}
        </div>
      );
    });
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
          sex: "Nam",
          birthday: "",
          password: "",
          type: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={this.onSubmitRegister}
      >
        {(formikProps) => {
          const { values, handleChange, handleBlur } = formikProps;
          return (
            <Form>
              <FastField
                label="Họ"
                type="text"
                name="firstName"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Họ"
                icon="bx bx-user-circle"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <FastField
                label="Tên"
                type="text"
                name="lastName"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Tên"
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
                name="phone"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Số điện thoại"
                icon="bx bx-phone-call"
                value={values.numberPhone}
                onChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <label className="w-full text-gray-800 px-2 text-xm font-semibold">
                Giới tính
              </label>

              <div
                className="w-full p-2.5 border-2 border-solid pl-10 mt-2 relative
                rounded-full border-gray-300 cursor-pointer"
              >
                <p
                  onClick={() =>
                    this.setState({
                      sex: !sex,
                    })
                  }
                  className="items-center"
                >
                  {dataSex}
                </p>
                <i className="bx bx-chevron-down absolute right-3 top-4"></i>
                <i className={`${iconSex} absolute left-3 text-xl top-3.5`}></i>
                {sex && (
                  <div
                    className="w-full bg-white border-2 border-solid border-gray-200 p-1 font-bold 
                  absolute top-full left-0 shadow-lg z-50"
                  >
                    {showData}
                  </div>
                )}
              </div>
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
