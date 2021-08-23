import React, { useEffect, useState } from "react";
import TitlePayment from "../../../components/Payment/PaymentLeft/TitlePayment/TitlePayment";
import Logo from "../../../components/Payment/PaymentLeft/Logo/Logo";
import FormInfoPayment from "../../../components/Payment/PaymentLeft/FormInfoPayment/FormInfoPayment";
import InfoTransport from "../../../components/Payment/PaymentLeft/InfoTransport/InfoTransport";
import PaymentMethod from "../../../components/Payment/PaymentLeft/PaymentMethod/PaymentMethod";
import api from "../../../Utils/api";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../../actions/modal/index";

function PaymentLeft(props) {
  //
  const [addresses, setAddresses] = useState(null);
  const [address, setAddress] = useState(null);
  const user = useSelector((state) => state.user);
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(`addresses/${user.id}`, "GET", null);
      if (unmounted) return;
      setAddresses(result.data);
      if (result.data.length > 0) {
        const index = result.data.findIndex((item) => item.isDefault === 1);
        if (index !== -1) setAddress(result.data[index]);
      }
    }
    fetch();
    return () => {
      unmounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full xl:w-2/3 px-4 xl:pr-4 flex justify-end dark:text-white">
      <div className="w-full">
        <Logo />
        <div className="w-full flex flex-col xl:flex-row lg:mt-3">
          <div className="w-full xl:w-1/2 pr-4">
            <TitlePayment />
            <FormInfoPayment address={address} note={note} setNote={setNote} />
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
          </div>
          <div className="w-full xl:w-1/2 xl:pl-4">
            <InfoTransport address={address} note={note} />
            <PaymentMethod />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentLeft;
