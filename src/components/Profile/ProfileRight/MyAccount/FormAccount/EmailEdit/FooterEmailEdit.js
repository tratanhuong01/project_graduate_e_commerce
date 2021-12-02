import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as profilesAction from "../../../../../../actions/profile/index";
import { EmailEditContext } from '../../../../../../contexts/EmailEditContext/EmailEditContext';
import * as StringUtils from "../../../../../../Utils/StringUtils";

export default function FooterEmailEdit(props) {
    //
    const { updateEmail } = props;
    const { headers, user } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    const dispatch = useDispatch();
    const { emailEdit: { verify, code, codeInput, emailNew }, emailEditDispatch, emailEditActions }
        = useContext(EmailEditContext);
    //
    return (
        <div className="w-full flex my-5 pl-6">
            <div className="w-1/4"></div>
            <div className="flex">
                <button
                    disabled={code && codeInput ? false : true}
                    onClick={() => {
                        console.log(typeof codeInput, typeof code);
                        if (codeInput !== `${code}`)
                            emailEditDispatch(emailEditActions.updateItem("errorCode", "Mã xác nhận không chính xác !!"));
                        else {
                            emailEditDispatch(emailEditActions.updateItem("errorCode", ""));
                            emailEditDispatch(emailEditActions.updateItem("codeInput", ""));
                            emailEditDispatch(emailEditActions.updateItem("verify", true));
                            emailEditDispatch(emailEditActions.updateItem("code", ""));
                            if (verify) {
                                if (StringUtils.validateEmail(emailNew))
                                    updateEmail(emailNew, user, headers);
                                else
                                    emailEditDispatch(emailEditActions.updateItem("errorEmail", "Email không đúng định dạng !!"));

                            }
                        }
                    }}
                    className={`${code && codeInput
                        ? "bg-organce"
                        : "bg-gray-700 cursor-not-allowed"
                        } px-6 py-2 my-3 text-white font-semibold`}
                >
                    Xác nhận
                </button>
                <button
                    onClick={() => dispatch(profilesAction.returnProfile())}
                    className="bg-white  px-6 py-2 my-3 text-gray-600  font-semibold border-2 border-solid 
                    border-gray-300 ml-5"
                >
                    Trở về
                </button>
            </div>
        </div>
    )
}
