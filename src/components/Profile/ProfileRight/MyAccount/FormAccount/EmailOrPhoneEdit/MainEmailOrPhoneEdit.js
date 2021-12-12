import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { EmailOrPhoneEditContext } from '../../../../../../contexts/EmailOrPhoneEditContext/EmailOrPhoneEditContext';
import * as StringUtils from "../../../../../../Utils/StringUtils";

function SendCode({ onClick }) {
    return (
        <span
            onClick={() => typeof onClick === "function" && onClick()}
            className="ml-3 text-blue-500 font-semibold cursor-pointer"
        >
            Gửi mã
        </span>
    );
}

export default function MainEmailOrPhoneEdit(props) {
    //
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    const { emailOrPhoneEdit: { verify, emailOrPhoneNew, code, errorEmailOrPhone, loadingSendCode },
        emailOrPhoneEditDispatch, emailOrPhoneEditActions } = useContext(EmailOrPhoneEditContext);
    //
    return (
        <>
            <div className="w-1/4 flex self-center justify-end">{props.emailOrPhone === "Email" ? "Email" : "Số điện thoại"}</div>
            <div className="w-3/4 ml-6 flex flex-wrap items-center">
                {user[props.emailOrPhone.toLowerCase()] && !verify ? (
                    <>
                        <span className="">{user[props.emailOrPhone.toLowerCase()]}</span>
                        {!code && loadingSendCode ? <i className="fas ml-5 fa-circle-notch fa-spin text-xl text-organce"></i> : (
                            <>
                                <SendCode onClick={() => {
                                    emailOrPhoneEditDispatch(emailOrPhoneEditActions.sendCodeEmailOrPhone(
                                        props.data, user, headers, emailOrPhoneEditDispatch, props.emailOrPhone
                                    ))
                                }} />
                                {user[`isVerify${props.emailOrPhone}`] === 0 && <span className="p-1.5 ml-3 rounded-full text-sm font-semibold text-white 
                                bg-red-500">Chưa xác nhận</span>}
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            onChange={(event) => {
                                emailOrPhoneEditDispatch(emailOrPhoneEditActions.updateItem(
                                    "emailOrPhoneNew", event.target.value
                                ));
                                if (!StringUtils.validateEmail(event.target.value) && !StringUtils.validatePhone(event.target.value))
                                    emailOrPhoneEditDispatch(emailOrPhoneEditActions.updateItem("errorEmailOrPhone",
                                        "Email không đúng định dạng !!"));
                                else
                                    emailOrPhoneEditDispatch(emailOrPhoneEditActions.updateItem("errorEmailOrPhone", ""));
                            }}
                            className="w-3/4 lg:w-1/2 p-2 border border-solid border-gray-300 dark:border-dark-third 
                            dark:bg-dark-third"
                            placeholder={props.emailOrPhone === "Email" ? "Email" : "Số điện thoại"}
                            value={emailOrPhoneNew}
                        />
                        {loadingSendCode ? <i className="fas fa-circle-notch fa-spin ml-3 text-xl text-organce"></i> :
                            <>
                                <SendCode onClick={() => {
                                    if (!StringUtils.validateEmail(emailOrPhoneNew) && !StringUtils.validatePhone(emailOrPhoneNew)) {
                                        emailOrPhoneEditDispatch(emailOrPhoneEditActions.updateItem("errorEmailOrPhone",
                                            "Email không đúng định dạng !!"));
                                    }
                                    else {
                                        if (user[`isVerify${props.emailOrPhone}`] === 0 && !user[`${props.emailOrPhone.toLowerCase()}`]) {
                                            emailOrPhoneEditDispatch(emailOrPhoneEditActions.checkEmailOrPhoneIssetRequest(
                                                emailOrPhoneNew, user, headers,
                                                emailOrPhoneEditDispatch, props.emailOrPhone
                                            ))
                                        }
                                        else {
                                            emailOrPhoneEditDispatch(emailOrPhoneEditActions.sendCodeEmailOrPhone(
                                                props.data, user, headers, emailOrPhoneEditDispatch, props.emailOrPhone
                                            ))
                                        }
                                    }
                                }}
                                />
                                {user[`isVerify${props.emailOrPhone}`] === 0 && <span className="p-1.5 ml-3 rounded-full text-sm font-semibold text-white 
                                bg-red-500">Chưa xác nhận</span>}
                            </>
                        }
                        {errorEmailOrPhone && (
                            <p className="w-full font-semibold text-red-500 mt-3">
                                {errorEmailOrPhone}
                            </p>
                        )}
                    </>
                )}
            </div>
        </>
    )
}
