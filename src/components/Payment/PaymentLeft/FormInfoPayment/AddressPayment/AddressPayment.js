import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectCustom from "../../../../General/SelectCustom/SelectCustom";
import * as ordersAction from "../../../../../actions/order/index";

function AddressPayment(props) {
  //
  const orders = useSelector((state) => state.orders);
  const [cityProvinces, setCityProvinces] = useState([]);
  const [districts, setDistricts] = useState(null);
  const [wards, setWards] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await axios.get(
        `https://provinces.open-api.vn/api/p?depth=2`
      );
      if (unmounted) return;
      setCityProvinces(result.data);
    }
    fetch();
    return () => (unmounted = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {}, [orders]);

  //
  return (
    <>
      <SelectCustom
        list={cityProvinces}
        className={
          "w-full rounded-lg p-2.5 border-2 border-solid border-gray-200 relative"
        }
        attribute={"name"}
        placeHolder={"Nhập tỉnh / thành phố"}
        table={"Chọn tỉnh / thành phố"}
        setData={(item) => {
          let unmounted = false;
          async function fetch() {
            const result = await axios.get(
              `https://provinces.open-api.vn/api/${"p"}/${item.code}?depth=2`
            );
            if (unmounted) return;
            setWards(null);
            setDistricts(result.data.districts);
            dispatch(ordersAction.updateAddressPayment(item.name, 0));
          }
          fetch();
          return () => (unmounted = true);
        }}
        dataProps={
          orders.infoPayment.cityProvince
            ? orders.infoPayment.cityProvince
            : "Chọn tỉnh / thành phố"
        }
      />
      <SelectCustom
        list={districts ? districts : []}
        className={
          "w-full rounded-lg p-2.5 border-2 border-solid border-gray-200 relative"
        }
        attribute={"name"}
        placeHolder={"Nhập quận / huyện"}
        table={"Chọn quận / huyện"}
        setData={(item) => {
          let unmounted = false;
          async function fetch() {
            const result = await axios.get(
              `https://provinces.open-api.vn/api/${"d"}/${item.code}?depth=2`
            );
            if (unmounted) return;
            setWards(result.data.wards);
            dispatch(ordersAction.updateAddressPayment(item.name, 1));
          }
          fetch();
          return () => (unmounted = true);
        }}
        dataProps={
          orders.infoPayment.district
            ? orders.infoPayment.district
            : "Chọn quận / huyện"
        }
        disabled={districts ? false : true}
      />
      <SelectCustom
        list={wards ? wards : []}
        className={
          "w-full rounded-lg p-2.5 border-2 border-solid border-gray-200 relative"
        }
        attribute={"name"}
        placeHolder={"Nhập phường / xã"}
        table={"Chọn phường / xã"}
        setData={(item) =>
          dispatch(ordersAction.updateAddressPayment(item.name, 2))
        }
        dataProps={
          orders.infoPayment.ward ? orders.infoPayment.ward : "Chọn phường / xã"
        }
        disabled={wards ? false : true}
      />
    </>
  );
}

export default AddressPayment;
