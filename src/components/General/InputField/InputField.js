import { ErrorMessage } from "formik";
import React, { Component } from "react";

class InputField extends Component {
  render() {
    const {
      double,
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
      onClick,
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
              showError || isset !== null
                ? "text-red-500 z-50 dark:bg-dark-second bg-white"
                : "text-gray-800 dark:text-white bg-white"
            } text-xs px-1 absolute top-0 left-3 font-semibold flex`}
          >
            {label}
          </label>
          <input
            type={type}
            {...field}
            name={name}
            id={id}
            onClick={() => (typeof onClick === "undefined" ? "" : onClick())}
            className={
              className +
              ` dark:bg-dark-third dark:text-white ${
                showError || isset !== null
                  ? " text-red-500 border-red-500"
                  : " border-gray-300 dark:border-dark-third focus:border-blue-500"
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
                showError || isset !== null
                  ? " text-red-500"
                  : " text-gray-800 dark:text-white"
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
