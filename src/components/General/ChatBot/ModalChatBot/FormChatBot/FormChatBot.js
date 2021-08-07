import { FastField, Form, Formik } from "formik";
import React, { Component } from "react";
import Input from "../Input/Input";
import LabelChatBot from "./LabelChatBot/LabelChatBot";
import RuleFormChatBot from "./RuleFormChatBot/RuleFormChatBot";
import Select from "./Select/Select";
import * as Config from "../../../../../constants/Config";
import * as Yup from "yup";

class FormChatBot extends Component {
  onSubmitFormLogin = () => {
    console.log("oke");
  };
  render() {
    const validationSchema = Yup.object().shape({
      nickName: Yup.string().required("Vui lòng chọn cách xưng hô !!"),
      nameCustomer: Yup.string().required("Tên không được để trống !!"),
      numberCustomer: Yup.string()
        .matches(
          Config.REGEX_NUMBER_PHONE,
          "Số điện thoại không đúng định dạng !!"
        )
        .required("Số điện thoại không được để trống !!"),
      check: Yup.boolean().oneOf([true], "Bạn phải đồng ý điều khoản trên !!"),
    });
    return (
      <Formik
        initialValues={{
          nickName: "",
          nameCustomer: "",
          numberCustomer: "",
          check: false,
        }}
        validationSchema={validationSchema}
        onSubmit={this.onSubmitFormLogin}
      >
        {(formikProps) => {
          const { values, handleChange, handleBlur } = formikProps;
          return (
            <Form>
              <LabelChatBot name={"Có thể xưng hô với quý khách là:*"} />
              <FastField
                name="nickName"
                value={values.nickName}
                handleChange={handleChange}
                onBlur={handleBlur}
                component={Select}
              />
              <LabelChatBot name={"Tên của quý khách là*"} />
              <FastField
                type="text"
                className="w-full p-2 text-sm mr-5 flex bg-white relative 
                 border-2 border-solid px-2 rounded-full"
                placeholder="Nhập tên của quý khách ..."
                name="nameCustomer"
                value={values.nameCustomer}
                handleChange={handleChange}
                onBlur={handleBlur}
                component={Input}
              />
              <LabelChatBot name={"Số điện thoại của quý khách là*"} />
              <FastField
                type="text"
                className="w-full p-2 text-sm mr-5 flex bg-white relative 
                 border-2 border-solid px-2 rounded-full"
                placeholder="Số điện thoại của quý khách ..."
                name="numberCustomer"
                value={values.numberCustomer}
                handleChange={handleChange}
                onBlur={handleBlur}
                component={Input}
              />
              <FastField
                name="check"
                handleChange={handleChange}
                onBlur={handleBlur}
                component={RuleFormChatBot}
              />
              <div className="flex justify-center w-full py-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-organce text-white font-semibold"
                >
                  Bắt đầu chat
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default FormChatBot;
