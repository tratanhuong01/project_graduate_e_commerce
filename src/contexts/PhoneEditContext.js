import React from "react";

const PhoneEditContext = React.createContext({
  verify: false,
  isCorrect: false,
  errorMessage: null,
  errorPhone: null,
  password: "",
  numberPhone: "",
});

export default PhoneEditContext;
