import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OutOfStock from "../../components/Payment/OutOfStock/OutOfStock";
import PaymentLeft from "./PaymentLeft/PaymentLeft";
import PaymentRight from "./PaymentRight/PaymentRight";
import * as ordersAction from "../../actions/order/index";
import Loading from "../../components/General/Loading/Loading";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as ValidForm from "./ValidForm";
import * as profileApi from "../../api/profileApi";

function MainPayment(props) {
  //
  const [addresses, setAddresses] = useState(null);
  const [address, setAddress] = useState(null);
  const { user, orders } = useSelector((state) => {
    return {
      user: state.user,
      orders: state.orders,
    };
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ValidForm.validationSchema),
    shouldUnregister: false,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await profileApi.getAddressByIdUser(user.id);
      if (unmounted) return;
      setAddresses(result.data);
      if (result.data.length > 0) {
        const index = result.data.findIndex((item) => item.isDefault === 1);
        if (index !== -1) setAddress(result.data[index]);
        dispatch(ordersAction.loadInfoAddressPayment(result.data[index]));
      }
    }
    if (user) fetch();
    else dispatch(ordersAction.loadInfoAddressPayment(null));
    dispatch(ordersAction.checkOrderIsOutOfStockRequest(orders.list));
    return () => {
      unmounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  useEffect(() => {
    if (user && orders.infoPayment.ward)
      dispatch(
        ordersAction.calcalatorFeeRequest({
          districtTo: JSON.parse(orders.infoPayment.district).DistrictID,
          WardCode: JSON.parse(orders.infoPayment.ward).WardCode,
          mode: 0,
        })
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, orders.infoPayment.ward, address]);
  useEffect(() => {}, [orders.loading]);
  //
  return orders.loading ? (
    <Loading />
  ) : (
    <form
      onSubmit={handleSubmit(() =>
        dispatch(ordersAction.addOrderRequest({ ...orders, user }))
      )}
      className="px-4 w-full xl:w-11/12 flex flex-col-reverse xl:flex-row mx-auto"
    >
      {orders.outOfStock ? (
        <OutOfStock />
      ) : (
        <PaymentLeft
          user={user}
          errors={errors}
          register={register}
          setValue={setValue}
          addresses={addresses}
          address={address}
          setAddress={setAddress}
          setAddresses={setAddresses}
        />
      )}
      <PaymentRight />
    </form>
  );
}

export default MainPayment;
