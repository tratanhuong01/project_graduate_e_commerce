import { FastField, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import api from "../../../../../Utils/api";
import InputField from "../../../../General/InputField/InputField";
import EndFormLogin from "./EndFormLogin/EndFormLogin";
import * as modalsAction from "../../../../../actions/modal/index";
import * as usersAction from "../../../../../actions/user/index";

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    };
  }

  onSubmitFormLogin = async (data) => {
    const { closeModal, loginAccount } = this.props;
    const user = await api("checkLogin", "POST", data);
    if (user.data === null || user.data === "") {
      this.setState({
        message: "Thông tin đăng nhập không chính xác!!",
      });
    } else {
      closeModal();
      loginAccount(user.data);
    }
  };
  render() {
    const validationSchema = Yup.object().shape({
      emailOrPhone: Yup.string().required(
        "Email hoặc số điện thoại không được để trống!!"
      ),
      password: Yup.string().required("Mật khẩu không được để trống!!"),
    });
    const { message } = this.state;
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
                handleChange={handleChange}
                setDataIsset={() =>
                  this.setState({
                    message: null,
                  })
                }
                onBlur={handleBlur}
                component={InputField}
                isset={null}
              />
              <FastField
                label="Mật khẩu"
                type="password"
                name="password"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Mật khẩu"
                icon="bx bx-lock-open"
                value={values.password}
                handleChange={handleChange}
                setDataIsset={() =>
                  this.setState({
                    message: null,
                  })
                }
                onBlur={handleBlur}
                component={InputField}
                isset={null}
              />
              <ul className="w-full my-2 mx-4">
                <li className="w-full text-red-500 font-semibold">{message}</li>
              </ul>
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
    loginAccount: (user) => {
      dispatch(usersAction.loginAccount(user));
    },
    closeModal: () => {
      dispatch(modalsAction.closeModal());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
