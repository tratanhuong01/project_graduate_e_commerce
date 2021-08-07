import React from "react";

function RuleFormChatBot(props) {
  return (
    <div className="w-full p-2 my-1">
      <input type="checkbox" className="mr-2" />
      Bằng việc chọn Bắt đầu chat, quý khách đã đồng ý với các{" "}
      <span className="text-blue-500">điều khoản </span>
      của <span className="text-blue-500">xsmart.com</span>
    </div>
  );
}

export default RuleFormChatBot;
