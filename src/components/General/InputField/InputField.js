import { ErrorMessage } from "formik";
import React, { Component } from "react";

class InputField extends Component {
  render() {
    const {
      double,
      // setDefaultSendCode,
      // emailOrPhone,
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

    return (
      <>
        <div
          className={`${double ? "w-1/2 mx-2 relative" : "w-full relative"}`}
        >
          <label
            className={`${
              showError || isset !== null ? "text-red-500" : "text-gray-800"
            } text-xs px-1 bg-white absolute top-0 left-3 font-semibold flex`}
          >
            {label}
          </label>
          <input
            type={type}
            {...field}
            name={name}
            id={id}
            className={
              className +
              `${
                showError || isset !== null
                  ? " text-red-500 border-red-500"
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
          <p className="m-2 text-xs w-full text-red-500 font-semibold">
            {showError || isset === null ? <ErrorMessage name={name} /> : isset}
          </p>
        </div>
      </>
    );
  }
}

export default InputField;
