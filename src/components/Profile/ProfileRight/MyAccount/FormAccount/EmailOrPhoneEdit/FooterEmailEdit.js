import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as profilesAction from "../../../../../../actions/profile/index";
import { EmailOrPhoneEditContext } from '../../../../../../contexts/EmailOrPhoneEditContext/EmailOrPhoneEditContext';
import api from '../../../../../../Utils/api';
import * as StringUtils from "../../../../../../Utils/StringUtils";
import * as usersAction from "../../../../../../actions/user/index";

export default function FooterEmailOrPhoneEdit(props) {
    //
    const { updateEmailOrPhone } = props;
    const { headers, user } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    const dispatch = useDispatch();
    const { emailOrPhoneEdit: { verify, code, codeInput, emailOrPhoneNew }, emailOrPhoneEditDispatch, emailOrPhoneEditActions }
        = useContext(EmailOrPhoneEditContext);
    //
    return (
        <div className="w-full flex my-5 pl-6">
            <div className="w-1/4"></div>
            <div className="flex">
                <button
                    disabled={code && codeInput ? false : true}
                    onClick={async () => {
                        if (codeInput !== `${code}`)
                            emailOrPhoneEditDispatch(emailOrPhoneEditActions.updateItem("errorCode", "Mã xác nhận không chính xác !!"));
                        else {
                            emailOrPhoneEditDispatch(emailOrPhoneEditActions.updateItem("errorCode", ""));
                            emailOrPhoneEditDispatch(emailOrPhoneEditActions.updateItem("codeInput", ""));
                            emailOrPhoneEditDispatch(emailOrPhoneEditActions.updateItem("verify",
                                user[`isVerify${props.emailOrPhone}`] === 0 ? false : true));
                            emailOrPhoneEditDispatch(emailOrPhoneEditActions.updateItem("code", ""));
                            if (verify) {
                                if (StringUtils.validateEmail(emailOrPhoneNew) || StringUtils.validatePhone(emailOrPhoneNew))
                                    updateEmailOrPhone(emailOrPhoneNew, user, headers, props.emailOrPhone);
                                else {
                                    const errorMain = () => {
                                        if (!StringUtils.validateEmail(emailOrPhoneNew) && !StringUtils.validatePhone(emailOrPhoneNew))
                                            return "Email hoặc số điện thoại";
                                        else if (!StringUtils.validatePhone(emailOrPhoneNew))
                                            return "Số điện thoại không đúng định dạng"
                                        else if (StringUtils.validateEmail(emailOrPhoneNew))
                                            return "Email không đúng định dạng"
                                        return "";
                                    }
                                    emailOrPhoneEditDispatch(emailOrPhoneEditActions.updateItem("errorEmailOrPhone",
                                        `${errorMain()} không đúng định dạng !!`));
                                }
                            }
                            else {
                                if (user[`isVerify${props.emailOrPhone}`] === 0) {
                                    let clone = { ...user };
                                    clone[`isVerify${props.emailOrPhone}`] = 1;
                                    await api("users", "PUT", clone, headers);
                                    dispatch(usersAction.loadUserRequest(headers));
                                }
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
