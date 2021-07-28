import { FastField, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
import * as Yup from "yup";
import InputField from "../../InputField/InputField";
import EndFormLogin from "./EndFormLogin/EndFormLogin";
class FormLogin extends Component {
  checkIssetAccount = (users, data) => {
    var user = null;
    users.forEach((element) => {
      if (
        (element.email === data.emailOrPhone ||
          element.numberPhone === data.emailOrPhone) &&
        element.password === data.password
      ) {
        user = element;
      } else {
      }
    });
    return user;
  };
  onSubmitFormLogin = (data) => {
    var { users, saveUserLogin, closeModal } = this.props;
    var user = this.checkIssetAccount(users, data);
    if (user === null) {
      alert("Error emailOrPhone or Password");
    } else {
      closeModal();
      saveUserLogin(user);
    }
  };
  openModalRegister = () => {
    this.props.openModalRegister();
  };
  render() {
    const validationSchema = Yup.object().shape({
      emailOrPhone: Yup.string()
        .required("Email hoặc số điện thoại không được để trống!!")
        .email(),
      password: Yup.string().required("Mật khẩu không được để trống!!"),
    });
    return (
      <Formik
        initialValues={{ emailOrPhone: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={this.onSubmitFormLogin}
      >
        {(formikProps) => {
          const { values, handleChange, handleBlur } = formikProps;
          return (
            <Form>
              <FastField
                label="Email hoặc số điện thoại"
                type="text"
                name="emailOrPhone"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Email hoặc số điện thoại"
                icon="bx bx-user-circle"
                value={values.emailOrPhone}
                onChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <FastField
                label="Mật khẩu"
                type="password"
                name="password"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Mật khẩu"
                icon="bx bx-lock-open"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
              />
              <EndFormLogin openModalRegister={this.openModalRegister} />
            </Form>
          );
        }}
      </Formik>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    openModalRegister: () => {
      dispatch(actions.openModalRegister());
    },
    closeModal: () => {
      dispatch(actions.closeModal());
    },
    saveUserLogin: (user) => {
      dispatch(actions.saveUserLogin(user));
      dispatch(actions.checkHaveLogin(user));
      dispatch(actions.getAllCartRequest(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
