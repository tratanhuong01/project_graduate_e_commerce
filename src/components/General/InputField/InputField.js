import { ErrorMessage } from "formik";
import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEye: false,
      type: props.type
    }
  }
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
            className={`${showError || isset !== null
              ? "text-red-500 z-50 dark:bg-dark-second bg-white"
              : "text-gray-800 dark:text-white bg-white dark:bg-dark-second"
              } text-xs px-1 absolute top-0 left-3 font-semibold flex z-0`}
          >
            {label}
          </label>
          <input
            type={this.state.type}
            {...field}
            name={name}
            id={id}
            onClick={() => (typeof onClick === "undefined" ? "" : onClick())}
            className={
              className +
              ` dark:bg-dark-third dark:text-white ${showError || isset !== null
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
            autoComplete="on"
          />
          <i
            className={
              `${icon} absolute top-4 left-2 text-2xl ` +
              `${showError || isset !== null
                ? " text-red-500"
                : " text-gray-800 dark:text-white"
              }`
            }
          ></i>
          <p className="m-2 text-xs w-full text-red-500 font-semibold">
            {showError || isset === null ? <ErrorMessage name={name} /> : isset}
          </p>
          {type === "password" && <i onClick={() => {
            this.setState({ showEye: !this.state.showEye })
            this.state.type === "password" && !this.state.showEye ?
              this.setState({ type: "text" }) :
              this.setState({ type: this.props.type });
          }} className={`bx bx-${this.state.showEye ? 'hide' : 'show'} absolute top-3.5 right-2 text-2xl z-10 cursor-pointer`}></i>}
        </div>
      </>
    );
  }
}

export default InputField;
