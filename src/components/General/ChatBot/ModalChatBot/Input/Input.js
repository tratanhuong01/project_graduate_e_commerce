import { ErrorMessage } from "formik";
import React, { Component } from "react";

class Input extends Component {
  render() {
    //
    const { type, className, placeholder, field, form, handleChange, value } =
      this.props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    //
    return (
      <div className="w-full">
        <input
          type={type}
          className={`${className}  ${
            showError ? "border-red-500" : "border-gray-300"
          }`}
          placeholder={placeholder}
          onChange={handleChange}
          name={name}
          value={value}
        />
        {showError && (
          <p className="m-1 text-red-500 font-semibold">
            <ErrorMessage name={name} />
          </p>
        )}
      </div>
    );
  }
}

export default Input;
