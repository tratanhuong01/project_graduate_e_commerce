import React from "react";

function InputFieldFC(props) {
  const {
    double,
    placeHolder,
    className,
    type,
    icon,
    label,
    disabled,
    register,
    name,
    showError,
    onChange,
    autoComplete,
  } = props;
  const Field = register(name, { required: true });
  return (
    <>
      <div className={`${double ? "w-1/2 mx-2 relative" : "w-full relative"}`}>
        {label && (
          <label
            className={`${
              showError
                ? "text-red-500 z-50 dark:bg-dark-second bg-white"
                : "text-gray-800 dark:text-white bg-white"
            } text-xs px-1 absolute top-0 left-3 font-semibold flex`}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          {...Field}
          name={name}
          className={
            className +
            ` dark:bg-dark-third dark:text-white ${
              showError
                ? " text-red-500 border-red-500"
                : " border-gray-300 dark:border-dark-third focus:border-blue-500"
            }`
          }
          onChange={(e) => {
            onChange(e.target.value);
            if (typeof register === "function") Field.onChange(e);
          }}
          placeholder={placeHolder}
          disabled={disabled}
          autoComplete={autoComplete ? "on" : "off"}
          spellCheck={true}
        />
        <i
          className={
            `${icon} absolute top-4 left-2 text-2xl ` +
            `${showError ? " text-red-500" : " text-gray-800 dark:text-white"}`
          }
        ></i>
        <p className="my-2 text-sm w-full text-red-500 font-semibold">
          {showError && showError.message}
        </p>
      </div>
    </>
  );
}

export default InputFieldFC;
