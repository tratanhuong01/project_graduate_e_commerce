import { FastField, Form, Formik } from "formik";
import React, { Component } from "react";
import InputField from "../../../General/InputField/InputField";
import * as Yup from "yup";
import TextAreaField from "../../../General/TextAreaField/TextAreaField";
import ImageRate from "../../../DetailProduct/ProductView/RateComment/ImageRate/ImageRate";

class FormSendRate extends Component {
  onSendRate = (data) => {
    console.log({ ...data, star: this.props.indexStar });
  };
  render() {
    const validationSchema = Yup.object().shape({
      fullName: Yup.string().required("Họ tên không được để trống!!"),
      email: Yup.string()
        .required("Email không được để trống!!")
        .email("Email không đúng định dạng"),
      content: Yup.string().required("Nội dung không được để trống!!"),
    });
    return (
      <Formik
        initialValues={{ fullName: "", email: "", content: "" }}
        validationSchema={validationSchema}
        onSubmit={this.onSendRate}
      >
        {(formikProps) => {
          const { values, handleChange, handleBlur } = formikProps;
          return (
            <Form className="w-full px-8 my-3">
              <FastField
                label="Họ tên của bạn"
                type="text"
                name="fullName"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Nhập họ tên của bạn"
                icon="bx bx-user"
                value={values.fullName}
                handleChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
                isset={null}
              />
              <FastField
                label="Email của bạn"
                type="email"
                name="email"
                className="w-full rounded-full p-2.5 border-2 border-solid pl-10 mt-2"
                placeHolder="Nhập email của bạn"
                icon="bx bx-user"
                value={values.email}
                handleChange={handleChange}
                onBlur={handleBlur}
                component={InputField}
                isset={null}
              />
              <FastField
                label="Nội dung"
                name="content"
                className="w-full rounded-lg p-2.5 border-2 border-solid h-32 resize-none mt-2"
                placeHolder="Nhập nội dung"
                value={values.content}
                handleChange={handleChange}
                onBlur={handleBlur}
                component={TextAreaField}
                isset={null}
              />
              <ImageRate />
              <div className="w-full mb-8 mt-4 flex justify-center items-center">
                <button
                  type="submit"
                  className="px-10 py-2.5 rounded-full bg-organce text-white 
                font-semibold"
                >
                  Gửi đánh giá
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default FormSendRate;
