import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectCustom from "../../../../General/SelectCustom/SelectCustom";
import * as ordersAction from "../../../../../actions/order/index";
import * as addressApi from "../../../../../api/addressApi";

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
      const result = await addressApi.getAddress({
        name: "province",
        data: null,
      });
      if (unmounted) return;
      setCityProvinces(result.data.data);
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
        // concat={"Tỉnh "}
        list={cityProvinces}
        className={
          "w-full rounded-lg p-2.5 border-2 border-solid border-gray-200 dark:border-dark-third relative"
        }
        attribute={"ProvinceName"}
        placeHolder={"Nhập tỉnh / thành phố"}
        table={"Chọn tỉnh / thành phố"}
        setData={(item) => {
          let unmounted = false;
          async function fetch() {
            const result = await addressApi.getAddress({
              name: "district",
              data: { province_id: item.ProvinceID },
            });
            if (unmounted) return;
            setWards(null);
            setDistricts(result.data.data);
            dispatch(
              ordersAction.updateAddressPayment(JSON.stringify(item), 0)
            );
          }
          fetch();
          return () => (unmounted = true);
        }}
        dataProps={
          orders.infoPayment.cityProvince
            ? JSON.parse(orders.infoPayment.cityProvince).ProvinceName
            : "Chọn tỉnh / thành phố"
        }
      />
      <SelectCustom
        list={districts ? districts : []}
        className={
          "w-full rounded-lg p-2.5 border-2 border-solid border-gray-200 dark:border-dark-third relative"
        }
        attribute={"DistrictName"}
        placeHolder={"Nhập quận / huyện"}
        table={"Chọn quận / huyện"}
        setData={(item) => {
          let unmounted = false;
          async function fetch() {
            const result = await addressApi.getAddress({
              name: "ward",
              data: { district_id: item.DistrictID },
            });
            if (unmounted) return;
            setWards(result.data.data);
            dispatch(
              ordersAction.updateAddressPayment(JSON.stringify(item), 1)
            );
          }
          fetch();
          return () => (unmounted = true);
        }}
        dataProps={
          orders.infoPayment.district
            ? JSON.parse(orders.infoPayment.district).DistrictName
            : "Chọn quận / huyện"
        }
        disabled={districts ? false : true}
      />
      <SelectCustom
        list={wards ? wards : []}
        className={
          "w-full rounded-lg p-2.5 border-2 border-solid border-gray-200 dark:border-dark-third relative"
        }
        attribute={"WardName"}
        placeHolder={"Nhập phường / xã"}
        table={"Chọn phường / xã"}
        setData={(item) => {
          dispatch(ordersAction.updateAddressPayment(JSON.stringify(item), 2));
          dispatch(
            ordersAction.calcalatorFeeRequest({
              mode: 0,
              districtTo: JSON.parse(orders.infoPayment.district).DistrictID,
              WardCode: item.WardCode,
            })
          );
        }}
        dataProps={
          orders.infoPayment.ward
            ? JSON.parse(orders.infoPayment.ward).WardName
            : "Chọn phường / xã"
        }
        disabled={wards ? false : true}
      />
    </>
  );
}

export default AddressPayment;
