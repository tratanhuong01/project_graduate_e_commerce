import React from "react";
import TitlePayment from "../../../components/Payment/PaymentLeft/TitlePayment/TitlePayment";
import Logo from "../../../components/Payment/PaymentLeft/Logo/Logo";
import FormInfoPayment from "../../../components/Payment/PaymentLeft/FormInfoPayment/FormInfoPayment";
import InfoTransport from "../../../components/Payment/PaymentLeft/InfoTransport/InfoTransport";
import PaymentMethod from "../../../components/Payment/PaymentLeft/PaymentMethod/PaymentMethod";
import * as modalsAction from "../../../actions/modal/index";
import { useDispatch } from "react-redux";

function PaymentLeft(props) {
  //
  const { user, address, setAddress, addresses, register, errors, setValue } =
    props;
  const dispatch = useDispatch();

  return (
    <div className="w-full xl:w-2/3 px-4 xl:pr-4 flex justify-end dark:text-white">
      <div className="w-full">
        <Logo />
        <div className="w-full flex flex-col xl:flex-row lg:mt-3">
          <div className="w-full xl:w-1/2 pr-4">
            <TitlePayment />
            <FormInfoPayment
              register={register}
              errors={errors}
              setValue={setValue}
            />
            {user && (
              <div className="w-full flex my-1 justify-end">
                <span
                  onClick={() => {
                    dispatch(
                      modalsAction.openModalChangeAddressPayment(
                        addresses,
                        address,
                        setAddress
                      )
                    );
                  }}
                  className="px-1 py-1 text-organce font-semibold rounded-lg cursor-pointer"
                >
                  Thay đổi địa chỉ khác
                </span>
              </div>
            )}
          </div>
          <div className="w-full xl:w-1/2 xl:pl-4">
            <InfoTransport address={address} />
            <PaymentMethod />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentLeft;
