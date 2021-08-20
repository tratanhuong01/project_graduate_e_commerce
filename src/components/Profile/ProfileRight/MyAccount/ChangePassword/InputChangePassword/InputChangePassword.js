import React from "react";

function InputChangePassword(props) {
  return (
    <div className="flex items-center py-3">
      <input
        type="password"
        className="w-2/3 lg:w-1/2 p-2 border border-solid border-gray-300"
        placeholder=""
      />
    </div>
  );
}

export default InputChangePassword;
