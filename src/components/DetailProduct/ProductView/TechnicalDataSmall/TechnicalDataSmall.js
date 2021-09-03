import React, { useEffect, useState } from "react";
import api from "../../../../Utils/api";
import ItemTechnicalData from "../../../Modals/ModalInfoDetailProduct/TechnicalData/ItemTechnicalData/ItemTechnicalData";
import * as modalsAction from "../../../../actions/modal/index";
import { useDispatch } from "react-redux";
function TechnicalDataSmall(props) {
  //
  const dispatch = useDispatch();
  const { products } = props;
  const [data, setData] = useState(null);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(
        `attributeProducts/${products.idLineProduct}`,
        "GET",
        null
      );
      if (unmounted) return;
      setData(result.data);
    }
    fetch();
    return () => {
      unmounted = false;
    };
    //
  }, []);
  //
  return (
    <>
      <p className="font-bold text-2xl mb-4">{products.nameLineProduct}</p>
      <div
        className="w-full overflow-y-hidden relative"
        style={{ height: 500, maxHeight: 500 }}
      >
        {data && (
          <>
            {data.map((attribute, index) => {
              return <ItemTechnicalData key={index} attribute={attribute} />;
            })}
            <div className="w-full absolute bottom-0 p-7 bg-white bg-opacity-70 flex items-center justify-center">
              <button
                onClick={() =>
                  dispatch(
                    modalsAction.openModalInfoDetailProduct(
                      products.idLineProduct
                    )
                  )
                }
                className="text-sm text-organce font-semibold px-4 py-2 rounded-full border-2
              border-solid border-organce bg-white hover:bg-organce hover:text-white"
              >
                Xem thêm cấu hình chi tiết
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default TechnicalDataSmall;
