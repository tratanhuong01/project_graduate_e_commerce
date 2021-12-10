import { createContext, useReducer } from "react";
import * as actions from "./Action";
import AppReducer from "./AppReducer";

const initialState = {
    code: "",
    emailOrPhoneNew: "",
    loadingSendCode: false,
    errorEmailOrPhone: "",
    errorCode: "",
    codeInput: "",
    verify: false,
};

export const EmailOrPhoneEditContext = createContext(initialState);

export const EmailOrPhoneEditProvider = (props) => {
    //
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //
    return (
        <EmailOrPhoneEditContext.Provider value={{
            emailOrPhoneEdit: state,
            emailOrPhoneEditDispatch: (action) => dispatch(action),
            emailOrPhoneEditActions: actions
        }} >
            {props.children}
        </EmailOrPhoneEditContext.Provider >
    );
}
