import React, { useEffect } from "react";
import { useHistory } from "react-router";
import api from "../../Utils/api";
import jwt_decode from "jwt-decode";
import * as productApi from "../../api/productApi";

function ProcessBill(props) {
  const params = new URLSearchParams(window.location.search);
  const history = useHistory();
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const access_token = params.get("access_token");
      const type = params.get("type");
      if (access_token) {
        const idToken = jwt_decode(access_token);
        const typeToken = jwt_decode(type);
        if (idToken.jti && typeToken.jti) {
          if (
            idToken.exp < Date.now() / 1000 &&
            typeToken.exp < Date.now() / 1000
          ) {
            let bill = await api(`bills/${idToken.jti}`, "GET", null);
            if (bill.data.bill) {
              if (
                bill.data.bill.status === Number(typeToken.jti) ||
                bill.data.bill.status === -1 ||
                bill.data.bill.status === 0
              )
                alert("Token không hợp lệ!!");
              else {
                bill.data.bill.status = typeToken.jti;
                await api(`bills`, "PUT", bill.data.bill);
                if (Number(typeToken.jti) === -1) {
                  for (
                    let index = 0;
                    index < bill.data.billDetailList.length;
                    index++
                  ) {
                    const element = bill.data.billDetailList[index];
                    await productApi.removeItemCurrentAndItemSold(
                      element.billDetail.amount,
                      element.productFull.idProduct
                    );
                  }
                }
                alert(
                  Number(typeToken.jti) === -1
                    ? "Bạn đã hủy đơn hàng !!"
                    : "Bạn đã xác nhận đơn hàng !!"
                );
              }
              history.push("");
            } else history.push("");
          }
        }
      } else history.push("");
    }
    if (unmounted) return;
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
}

export default ProcessBill;
