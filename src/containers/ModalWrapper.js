import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseModal from "../components/General/CloseModal/CloseModal";
import LoadingModal from "../components/General/Loading/LoadingModal/LoadingModal";
import { OFF_LOADING_MODAL } from "../constants/ActionTypes";

function ModalWrapper(props) {
  //
  const modal = useSelector((state) => state.modal);
  const {
    className,
    style,
    title,
    children,
    addEvent,
    styleChildren,
    Component,
    data,
    notHeader,
    fixed,
  } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch({ type: OFF_LOADING_MODAL });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div
      className={className}
      style={modal.loading ? { ...style, overflow: "hidden" } : style}
    >
      <div className="w-full relative rounded-lg bg-white dark:bg-dark-second z-50">
        {!notHeader && (
          <div
            className="w-full fixed top-0 bg-white dark:bg-dark-third z-50 h-16 flex items-center justify-center 
            rounded-lg"
          >
            {data ? (
              <Component setIndex={data.setData} index={data.data} />
            ) : (
              <p className="text-2xl font-bold dark:text-white">{title}</p>
            )}
            <CloseModal fixed={fixed} addEvent={addEvent} />
            <hr />
          </div>
        )}
        <div
          className={`w-full ${notHeader ? "" : "pt-16"} relative  +  ${
            modal.loading
              ? "overflow-hidden"
              : "overflow-x-hidden overflow-y-auto scrollbar-css"
          } `}
          style={styleChildren}
        >
          {children}
          {modal.loading && <LoadingModal />}
        </div>
      </div>
    </div>
  );
}

export default ModalWrapper;
