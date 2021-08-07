import { ErrorMessage } from "formik";
import React, { Component } from "react";

class Select extends Component {
  render() {
    //
    const { handleChange, field, form } = this.props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    //
    return (
      <>
        <select
          name={name}
          onChange={handleChange}
          className={`w-full p-2 text-sm mr-5 flex bg-white cursor-pointer relative 
        ${
          showError ? "border-red-500" : "border-gray-200"
        } border-2 border-solid px-1 rounded-lg`}
        >
          <option value={""}>Chọn cách xưng hô với quý khách</option>
          <option value={"Anh"}>Anh</option>
          <option value={"Chị"}>Chị</option>
        </select>
        {showError && (
          <p className="m-1 text-red-500 font-semibold">
            <ErrorMessage name={name} />
          </p>
        )}
      </>
    );
  }
}

export default Select;
