import React, { useContext } from 'react'
import { EmailOrPhoneEditContext } from '../../../../../../contexts/EmailOrPhoneEditContext/EmailOrPhoneEditContext';

export default function CodeVerifyInput(props) {
    //
    const { emailOrPhoneEdit: { codeInput, errorCode }, emailOrPhoneEditDispatch, emailOrPhoneEditActions } = useContext(EmailOrPhoneEditContext);
    //  
    return (
        <div className="w-full flex text-gray-600 dark:text-white my-5">
            <div className="w-1/4 flex pt-3 justify-end">Mã xác nhận</div>
            <div className="w-3/4 ml-6 flex flex-wrap items-center">
                <input
                    type="text"
                    onChange={(event) => emailOrPhoneEditDispatch(emailOrPhoneEditActions.updateItem("codeInput", event.target.value))}
                    className="w-3/4 lg:w-1/2 p-2 border border-solid border-gray-300 dark:border-dark-third 
                    dark:bg-dark-third"
                    placeholder="Nhập mã xác nhận...."
                    value={codeInput}
                />
                {errorCode && (
                    <p className="w-full font-semibold text-red-500 mt-3">
                        {errorCode}
                    </p>
                )}
            </div>
        </div>
    )
}
