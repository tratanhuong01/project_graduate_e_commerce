import React from "react";
import { useSelector } from "react-redux";
import CloseModal from "../components/General/CloseModal/CloseModal";
import LoadingModal from "../components/General/Loading/LoadingModal/LoadingModal";

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
  //
  return (
    <div className={className} style={style}>
      <div className="w-full relative rounded-lg bg-white z-50">
        {!notHeader && (
          <div
            className="w-full fixed top-0 bg-white z-50 h-16 flex items-center justify-center 
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
          className={`w-full ${notHeader ? "" : "pt-16"} relative`}
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
