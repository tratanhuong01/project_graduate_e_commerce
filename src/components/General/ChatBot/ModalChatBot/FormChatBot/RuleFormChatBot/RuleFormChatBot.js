import { ErrorMessage } from "formik";
import React from "react";

function RuleFormChatBot(props) {
  //
  const { handleChange, field, form } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  //
  return (
    <>
      <div className="w-full p-2 my-1">
        <input
          type="checkbox"
          name={name}
          onChange={handleChange}
          className="mr-2"
        />
        Bằng việc chọn Bắt đầu chat, quý khách đã đồng ý với các{" "}
        <span className="text-blue-500">điều khoản </span>
        của <span className="text-blue-500">xsmart.com</span>
      </div>
      {showError && (
        <p className="m-1 text-red-500 font-semibold">
          <ErrorMessage name={name} />
        </p>
      )}
    </>
  );
}

export default RuleFormChatBot;
