import { createContext, useReducer } from "react";
import * as actions from "./Action";
import AppReducer from "./AppReducer";

const initialState = {
    code: "",
    emailNew: "",
    loadingSendCode: false,
    errorEmail: "",
    errorCode: "",
    codeInput: "",
    verify: false,
};

export const EmailEditContext = createContext(initialState);

export const EmailEditProvider = (props) => {
    //
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //
    return (
        <EmailEditContext.Provider value={
            {
                emailEdit: state,
                emailEditDispatch: (action) => dispatch(action),
                emailEditActions: actions
            }
        }>
            {props.children}
        </EmailEditContext.Provider>
    );
}
