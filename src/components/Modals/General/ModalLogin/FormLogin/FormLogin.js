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
    const {
      closeModal,
      loginAccount,
      updateHeaders,
      onLoadingModal,
      offLoadingModal,
      openModalForgotPassword,
    } = this.props;
    onLoadingModal();
    const result = await api("checkLoginJWT", "POST", data);
    if (!result.data.token) {
      if (result.data.status === 201) {
        this.setState({
          message: result.data.message,
        });
        openModalForgotPassword(result.data.user, true);
      } else {
        offLoadingModal();
        this.setState({
          message: result.data.message,
        });
      }
    } else {
      closeModal();
      loginAccount(result.data);
      updateHeaders(result.data.token);
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
            <Form className="mt-4">
              <FastField
                label="Email hoặc số điện thoại"
                type="text"
                name="emailOrPhone"
                className="w-full rounded-lg p-2.5 border-2 border-solid pl-10 mt-2"
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
                className="w-full rounded-lg p-2.5 border-2 border-solid pl-10 mt-2"
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
    onLoadingModal: () => {
      dispatch(modalsAction.onLoadingModal());
    },
    offLoadingModal: () => {
      dispatch(modalsAction.offLoadingModal());
    },
    loginAccount: (user) => {
      dispatch(usersAction.loginAccount(user));
    },
    closeModal: () => {
      dispatch(modalsAction.closeModal());
    },
    openModalForgotPassword: (user, verify) => {
      dispatch(modalsAction.openModalForgotPassword(user, verify));
    },
    updateHeaders: (headers) => {
      dispatch(usersAction.updateHeaders(headers));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
