import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressPayment from "./AddressPayment/AddressPayment";
import * as ordersAction from "../../../../actions/order/index";
import InputFieldFC from "../../../General/InputField/InputFieldFC";
import SelectCustom from "../../../General/SelectCustom/SelectCustom";

function FormInfoPayment(props) {
  //
  const { address, register, errors, setValue } = props;
  const { user, orders } = useSelector((state) => {
    return {
      orders: state.orders,
      user: state.user,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    //
    setValue("fullName", orders.infoPayment.fullName);
    setValue("phone", orders.infoPayment.phone);
    setValue("address", orders.infoPayment.address);
    setValue("email", orders.infoPayment.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders, user]);
  //
  return (
    <div className="w-full dark:text-white">
      <InputFieldFC
        type="text"
        className="w-full p-2.5 rounded-lg border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        name="fullName"
        register={register}
        showError={errors["fullName"]}
        placeHolder="Nhập họ và tên"
        onChange={(item) =>
          dispatch(ordersAction.updateAddressPayment(item, 5))
        }
      />
      <InputFieldFC
        type="text"
        className="w-full p-2.5 rounded-lg border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        name="phone"
        register={register}
        showError={errors["phone"]}
        placeHolder="Nhập số điện thoại"
        onChange={(item) =>
          dispatch(ordersAction.updateAddressPayment(item, 6))
        }
      />
      <InputFieldFC
        type="text"
        className="w-full p-2.5 rounded-lg border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        name="email"
        register={register}
        showError={errors["email"]}
        placeHolder="Nhập email"
        onChange={(item) =>
          dispatch(ordersAction.updateAddressPayment(item, 7))
        }
      />
      <InputFieldFC
        type="text"
        className="w-full p-2.5 rounded-lg border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        name="address"
        register={register}
        showError={errors["address"]}
        placeHolder="Nhập chi tiết địa chỉ"
        onChange={(item) =>
          dispatch(ordersAction.updateAddressPayment(item, 3))
        }
      />
      <AddressPayment address={address} />
      <SelectCustom
        list={orders.service}
        className={
          "w-full rounded-lg p-2.5 border-2 border-solid border-gray-200 dark:border-dark-third relative"
        }
        attribute={"short_name"}
        placeHolder={"Dịch vụ vận chuyển"}
        table={"dịch vụ vận chuyển"}
        setData={(item) => {
          console.log(item);
          dispatch(
            ordersAction.calcalatorFeeRequestTwo({
              service: item,
              districtTo: JSON.parse(orders.infoPayment.district).DistrictID,
              WardCode: JSON.parse(orders.infoPayment.ward).WardCode,
            })
          );
        }}
        dataProps={
          orders.serviceChoose
            ? orders.serviceChoose.short_name === "Đi bộ"
              ? "Đường bộ"
              : "Đường hàng không"
            : null
        }
      />
      <textarea
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:border-dark-third resize-none h-20 dark:bg-dark-third dark:border-dark-third"
        placeholder="Ghi chú (tùy chọn).."
        onChange={(event) => {
          if (event.target.value.length > 300)
            alert("Không được quá 300 kí tự");
          else
            dispatch(ordersAction.updateAddressPayment(event.target.value, 4));
        }}
        defaultValue={orders.infoPayment.note}
      ></textarea>
    </div>
  );
}

export default FormInfoPayment;
