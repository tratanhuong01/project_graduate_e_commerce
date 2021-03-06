import React from "react";

function TextAreaFieldFC(props) {
  const { showError, register, placeHolder, className, label, name } = props;
  const Field = register(name);
  return (
    <>
      <label className="w-full text-gray-800 px-2 text-xm font-semibold flex dark:text-gray-300">
        {label}
      </label>
      <div className="w-full relative">
        <textarea
          {...Field}
          name={name}
          className={
            className +
            `${
              showError ? " border-red-500" : " border-gray-300 "
            }  dark:bg-dark-third focus:border-blue-500 focus:shadow-lg`
          }
          placeholder={placeHolder}
          spellCheck={false}
        ></textarea>
      </div>
      <p className="m-2 text-red-500 font-semibold">
        {showError && showError.message}
      </p>
    </>
  );
}

export default TextAreaFieldFC;
