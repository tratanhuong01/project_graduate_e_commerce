import { FastField, Form, Formik } from "formik";
import React, { Component } from "react";
import InputField from "../../../General/InputField/InputField";
import TextAreaField from "../../../General/TextAreaField/TextAreaField";
import * as Yup from "yup";
class FormCommentNews extends Component {
  sendComment = () => {};
  render() {
    const validationSchema = Yup.object().shape({
      fullName: Yup.string().required("Họ tên không được để trống!!"),
      email: Yup.string()
        .required("Email không được để trống!!")
        .email("Email không đúng định dạng !!"),
      content: Yup.string().required("Nội dung không được để trống !!"),
    });

    return (
      <Formik
        initialValues={{ fullName: "", email: "", content: "" }}
        validationSchema={validationSchema}
        onSubmit={this.sendComment}
      >
        {(formikProps) => {
          const { values, handleChange, handleBlur } = formikProps;
          return (
            <Form>
              <div className="w-full my-2">
                <div className="w-full flex">
                  <div className="w-1/2 mr-4">
                    <FastField
                      label="Họ tên * "
                      type="text"
                      name="fullName"
                      className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                      placeHolder="Họ tên"
                      icon="bx bx-user-circle"
                      value={values.fullName}
                      handleChange={handleChange}
                      onBlur={handleBlur}
                      component={InputField}
                      isset={null}
                    />
                  </div>
                  <div className="w-1/2">
                    <FastField
                      label="Email *"
                      type="text"
                      name="email"
                      className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                      placeHolder="Email..."
                      icon="bx bx-mail-send"
                      value={values.email}
                      handleChange={handleChange}
                      onBlur={handleBlur}
                      component={InputField}
                      isset={null}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <FastField
                    label="Nội dung *"
                    name="content"
                    className="w-full rounded-lg resize-none h-32 p-2.5 border-2 border-solid mt-2"
                    placeHolder="Nhập nội dung...."
                    icon="bx bx-user-circle"
                    value={values.content}
                    handleChange={handleChange}
                    onBlur={handleBlur}
                    component={TextAreaField}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full p-2.5 rounded-full bg-organce text-white 
                font-semibold"
              >
                Bình luận
              </button>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default FormCommentNews;
