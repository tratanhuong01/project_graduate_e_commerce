import React, { useEffect, useState } from "react";
import ItemBillContent from "../MyBill/ItemBill/ItemBillContent/ItemBillContent";
import CostDetailBill from "./CostDetailBill/CostDetailBill";
import DetailBillTop from "./DetailBillTop/DetailBillTop";
import InfoDetailBill from "./InfoDetailBill/InfoDetailBill";
import MethodPayment from "./MethodPayment/MethodPayment";
import StatusDetailBill from "./StatusDetailBill/StatusDetailBill";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import {
  PAGE_PROFILE_USER,
  PROFILE_BILL,
  PROFILE_DETAIL_BILL,
} from "../../../../constants/Config";
import api from "../../../../Utils/api";
import { useDispatch, useSelector } from "react-redux";
import * as profilesAction from "../../../../actions/profile/index";

function DetailBill(props) {
  //
  const { billProps } = props;
  const dispatch = useDispatch();
  const headers = useSelector(state => state.headers);
  const [bill, setBill] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;

    const timeOut = setTimeout(() => {
      if (billProps) {
        if (billProps.bill) {
          setBill(billProps);
        }
        else {
          const fetch = async () => {
            const result = await api(`bills/${billProps}`, 'GET', null, headers);
            if (unmounted) return;
            setBill(result.data);
          }
          fetch();
        }
        dispatch(profilesAction.updateIdBillProfile());
      }
      window.scrollTo(0, 0);
    }, 200);
    return () => {
      unmounted = true;
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="w-full">
      <BreadcrumbsItem
        to={`${PAGE_PROFILE_USER}/${PROFILE_BILL}/${PROFILE_DETAIL_BILL}`}
      >
        Chi tiết đơn hàng
      </BreadcrumbsItem>
      <DetailBillTop bill={bill} />
      {bill ? (
        <>
          <StatusDetailBill bill={bill} />
          <InfoDetailBill bill={bill} />
          <ItemBillContent cost={true} bill={bill} />
          <CostDetailBill bill={bill} />
          <MethodPayment bill={bill} />
        </>
      ) : (
        <div className="w-full h-32 flex items-center justify-center">
          <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
        </div>
      )}
    </div>
  );
}

export default DetailBill;
