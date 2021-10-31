import React, { useEffect, useState } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useDispatch, useSelector } from "react-redux";
import {
  PAGE_PROFILE_USER,
  PROFILE_VOUCHER,
} from "../../../../constants/Config";
import FilterVoucher from "./FilterVoucher/FilterVoucher";
import InputAddVoucher from "./InputAddVoucher/InputAddVoucher";
import ItemVoucher from "./ItemVoucher/ItemVoucher";
import * as profilesAction from "../../../../actions/profile/index";
import * as voucherApi from "../../../../api/voucherApi";
import NotVoucher from "./NotVoucher/NotVoucher";

function MyVoucher(props) {
  //
  const dispatch = useDispatch();
  const { user, headers } = useSelector((state) => {
    return {
      user: state.user,
      headers: state.headers,
    };
  });
  const [vouchers, setVouchers] = useState(null);
  const [data, setData] = useState(0);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      try {
        const result = await voucherApi.getDiscountCodeByIdUser(
          user.id,
          0,
          data,
          headers
        );
        if (unmounted) return;
        setVouchers(result.data);
      } catch (error) {
        throw error;
      }
    }
    const timeOut = setTimeout(() => {
      fetch();
    }, 500);

    return () => {
      unmounted = true;
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  //
  return (
    <>
      <BreadcrumbsItem to={`${PAGE_PROFILE_USER}/${PROFILE_VOUCHER}`}>
        Mã giảm giá
      </BreadcrumbsItem>
      <div className="w-full">
        <div className="w-full flex font-semibold justify-between items-center dark:text-gray-300">
          <div className="">Voucher</div>
          <div className="flex p-2">
            <span
              onClick={() => dispatch(profilesAction.viewHistoryVoucher())}
              className="mx-2 px-2 text-organce cursor-pointer"
            >
              Xem lịch sử Voucher
            </span>
          </div>
        </div>
        <InputAddVoucher setVouchers={setVouchers} />
        <FilterVoucher
          setData={setData}
          setVouchers={setVouchers}
          data={data}
        />
        {vouchers ? (
          vouchers.length > 0 ? (
            <>
              <div className="w-full flex flex-wrap">
                {vouchers.map((voucher, index) => {
                  return <ItemVoucher voucher={voucher} key={index} />;
                })}
              </div>
            </>
          ) : (
            <NotVoucher />
          )
        ) : (
          <div className="w-full h-20 flex items-center justify-center">
            <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
          </div>
        )}
      </div>
    </>
  );
}

export default MyVoucher;
