import React from "react";

function RuleFormChatBot(props) {
  //
  const { name, register, showError } = props;
  //
  return (
    <>
      <div className="w-full p-2 my-1">
        <input
          {...register(name)}
          type="checkbox"
          name={name}
          className="mr-2"
        />
        Bằng việc chọn Bắt đầu chat, quý khách đã đồng ý với các{" "}
        <span className="text-blue-500">điều khoản </span>
        của <span className="text-blue-500">hsmart.com</span>
      </div>
      {showError && (
        <p className="m-1 text-red-500 font-semibold">{showError.message}</p>
      )}
    </>
  );
}

export default RuleFormChatBot;
