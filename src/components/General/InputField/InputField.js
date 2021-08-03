import { ErrorMessage } from "formik";
import React, { Component } from "react";

class InputField extends Component {
  render() {
    const {
      setDefaultSendCode,
      emailOrPhone,
      setDataIsset,
      handleChange,
      isset,
      placeHolder,
      id,
      className,
      type,
      icon,
      label,
      field,
      value,
      form,
    } = this.props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const radio = () => {
      if (label === "Email" || label === "Số điện thoại")
        return (
          <div className="flex">
            <input
              type="radio"
              name="emailOrPhone"
              checked={emailOrPhone}
              onChange={() => {
                setDefaultSendCode(label);
              }}
              className="mx-4 mt-2 flex items-center"
            />
          </div>
        );

      return "";
    };
    return (
      <>
        <label className="w-full text-gray-800 px-2 text-xm font-semibold flex">
          {label}
          {radio()}
        </label>
        <div className="w-full relative">
          <input
            type={type}
            {...field}
            name={name}
            id={id}
            className={
              className +
              `${
                showError || isset !== null
                  ? " border-red-500"
                  : " border-gray-300"
              }`
            }
            invalid={typeof showError === "undefined" ? "false" : "true"}
            placeholder={placeHolder}
            value={value}
            onChange={(event) => {
              handleChange(event);
              if (typeof setDataIsset !== "undefined") setDataIsset();
            }}
          />
          <i
            className={
              `${icon} absolute top-5 left-2 text-2xl ` +
              `${
                showError || isset !== null ? " text-red-500" : " text-gray-800"
              }`
            }
          ></i>
        </div>
        <p className="m-2 text-red-500 font-semibold">
          {showError || isset === null ? <ErrorMessage name={name} /> : isset}
        </p>
      </>
    );
  }
}

export default InputField;
