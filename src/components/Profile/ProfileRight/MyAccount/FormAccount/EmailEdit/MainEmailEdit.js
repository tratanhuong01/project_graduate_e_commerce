import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { EmailEditContext } from '../../../../../../contexts/EmailEditContext/EmailEditContext';
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

export default function MainEmailEdit(props) {
    //
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    })

    const { emailEdit: { verify, emailNew, code, errorEmail, loadingSendCode }, emailEditDispatch,
        emailEditActions } = useContext(EmailEditContext);
    //
    return (
        <>
            <div className="w-1/4 flex self-center justify-end">Email</div>
            <div className="w-3/4 ml-6 flex flex-wrap items-center">
                {user.email && !verify ? (
                    <>
                        <span className="">{user.email}</span>
                        {!code && loadingSendCode ? <i className="fas ml-5 fa-circle-notch fa-spin text-xl text-organce"></i> : (
                            <SendCode onClick={() => emailEditDispatch(emailEditActions.sendCodeEmail(
                                user.email, user, headers, emailEditDispatch
                            ))} />
                        )}
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            onChange={(event) => {
                                emailEditDispatch(emailEditActions.updateItem(
                                    "emailNew", event.target.value
                                ));
                                if (!StringUtils.validateEmail(event.target.value))
                                    emailEditDispatch(emailEditActions.updateItem("errorEmail", "Email không đúng định dạng !!"));
                                else
                                    emailEditDispatch(emailEditActions.updateItem("errorEmail", ""));
                            }}
                            className="w-3/4 lg:w-1/2 p-2 border border-solid border-gray-300 dark:border-dark-third 
                            dark:bg-dark-third"
                            placeholder={`Email`}
                            value={emailNew}
                        />
                        {loadingSendCode ? <i className="fas fa-circle-notch fa-spin ml-3 text-xl text-organce"></i> :
                            <SendCode onClick={() =>
                                emailEditDispatch(emailEditActions.checkEmailIssetRequest(emailNew, user, headers, emailEditDispatch))}
                            />
                        }
                        {errorEmail && (
                            <p className="w-full font-semibold text-red-500 mt-3">
                                {errorEmail}
                            </p>
                        )}
                    </>
                )}
            </div>
        </>
    )
}
