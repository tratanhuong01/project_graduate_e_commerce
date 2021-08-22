import { ErrorMessage } from "formik";
import React, { Component } from "react";

class TextAreaField extends Component {
  render() {
    const {
      handleChange,
      placeHolder,
      id,
      className,
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
        <label className="w-full text-gray-800 px-2 text-xm font-semibold flex">
          {label}
        </label>
        <div className="w-full relative">
          <textarea
            {...field}
            name={name}
            id={id}
            className={
              className +
              `${
                showError
                  ? " border-red-500"
                  : " border-gray-300 dark:bg-dark-third dark:border-dark-third"
              }`
            }
            invalid={typeof showError === "undefined" ? "false" : "true"}
            placeholder={placeHolder}
            value={value}
            onChange={(event) => {
              handleChange(event);
            }}
          ></textarea>
        </div>
        <p className="m-2 text-red-500 font-semibold">
          {showError && <ErrorMessage name={name} />}
        </p>
      </>
    );
  }
}

export default TextAreaField;
