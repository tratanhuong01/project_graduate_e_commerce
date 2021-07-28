import { ErrorMessage } from "formik";
import React, { Component } from "react";

class InputField extends Component {
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
    this.props.onChange(name, value);
  };
  render() {
    const {
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
        <label className="w-full text-gray-800 px-2 text-xm font-semibold">
          {label}
        </label>
        <div className="w-full relative">
          <input
            type={type}
            {...field}
            name={name}
            id={id}
            className={
              className +
              `${showError ? " border-red-500" : " border-gray-300"}`
            }
            invalid={typeof showError === "undefined" ? "false" : "true"}
            placeholder={placeHolder}
            value={value}
          />
          <i
            className={
              `${icon} absolute top-5 left-2 text-2xl ` +
              `${showError ? " text-red-500" : " text-gray-800"}`
            }
          ></i>
        </div>
        <p className="m-2 text-red-500 font-bold">
          {<ErrorMessage name={name} />}
        </p>
      </>
    );
  }
}

export default InputField;
