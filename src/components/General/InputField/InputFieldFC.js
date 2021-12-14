import React, { useState } from "react";

function InputFieldFC(props) {
  const [showEye, setShowEye] = useState(false);
  const [type, setType] = useState(props.type);
  const {
    specifical,
    double,
    placeHolder,
    className,
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
            className={`${showError
              ? "text-red-500 z-50 dark:bg-dark-second bg-white"
              : "text-gray-800 dark:text-white bg-white dark:bg-dark-second"
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
            ` dark:bg-dark-third dark:text-white ${showError
              ? " text-red-500 border-red-500"
              : " border-gray-300 focus:border-blue-500 focus:shadow-lg"
            }`
          }
          onChange={(e) => {
            if (typeof onChange === "function") onChange(e.target.value);
            if (typeof register === "function") Field.onChange(e);
          }}
          placeholder={placeHolder}
          disabled={disabled}
          autoComplete={autoComplete ? "on" : "off"}
          spellCheck={false}
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
        {props.type === "password" && <i onClick={() => {
          setShowEye(!showEye)
          type === "password" && !showEye ?
            setType("text") :
            setType(props.type);
        }} className={`bx bx-${showEye ? 'hide' : 'show'} absolute ${specifical ? 'top-3.5' : 'top-1.5'} 
        right-2 text-2xl z-10 cursor-pointer`}></i>}
      </div>
    </>
  );
}

export default InputFieldFC;
