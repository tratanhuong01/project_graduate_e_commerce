import React, { useEffect, useState } from "react";
import api from "../../../../Utils/api";
import ItemTechnicalData from "../../../Modals/ModalInfoDetailProduct/TechnicalData/ItemTechnicalData/ItemTechnicalData";
import * as modalsAction from "../../../../actions/modal/index";
import { useDispatch, useSelector } from "react-redux";
function TechnicalDataSmall(props) {
  //
  const dispatch = useDispatch();
  const { products } = props;
  const headers = useSelector((state) => state.headers);
  const [data, setData] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      try {
        const result = await api(
          `attributeProducts/${products.idLineProduct}`,
          "GET",
          null,
          headers
        );
        if (unmounted) return;
        setData(result.data);
      } catch (error) {
        throw error;
      }
    }
    fetch();
    return () => {
      unmounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);
  //
  return (
    <>
      {data && data.length > 0 && (
        <p className="font-bold text-2xl mb-4">{products.nameLineProduct}</p>
      )}
      {data && (
        <div
          className={`w-full overflow-y-hidden relative " ${data.length > 0 ? "" : "hidden"
            }`}
          style={{ maxHeight: 500 }}
        >
          {data.map((attribute, index) => {
            return <ItemTechnicalData key={index} attribute={attribute} />;
          })}
          <div className="w-full absolute bottom-0 p-7 bg-gray-300 bg-opacity-50 flex items-center justify-center">
            <button
              onClick={() =>
                dispatch(
                  modalsAction.openModalInfoDetailProduct(
                    products.idLineProduct
                  )
                )
              }
              className="text-sm text-organce font-semibold px-4 py-2 rounded-full border-2
              border-solid border-organce bg-white hover:bg-organce hover:text-white dark:bg-dark-main"
            >
              Xem thêm cấu hình chi tiết
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TechnicalDataSmall;
