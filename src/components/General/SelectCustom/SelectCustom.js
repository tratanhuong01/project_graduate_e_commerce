import React, { useEffect, useState } from "react";

function SelectCustom(props) {
  //

  const {
    className,
    list,
    attribute,
    setData,
    placeHolder,
    table,
    label,
    disabled,
    dataProps,
    concat,
  } = props;
  const [listCurrent, setListCurrent] = useState(list);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(
    dataProps
      ? { [attribute]: `${dataProps}` }
      : { [attribute]: `Chọn ${table}` }
  );
  useEffect(() => {
    setListCurrent(list);
    setContent(
      dataProps
        ? { [attribute]: `${dataProps}` }
        : { [attribute]: `Chọn ${table}` }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, dataProps]);
  //
  return (
    <div
      className={`w-full relative mb-2 ${disabled ? "cursor-not-allowed" : ""}`}
    >
      {label !== "" && label && (
        <label
          className={`${"text-gray-800 z-50 dark:text-white"} text-xm px-1 flex font-semibold`}
        >
          {label}
        </label>
      )}
      <div
        onClick={() => {
          if (!disabled) {
            if (show) {
              setValue("");
              setListCurrent(list);
            }
            setShow(!show);
          }
        }}
        className={`${className} cursor-pointer ${
          disabled ? " opacity-50" : ""
        }`}
      >
        <i className="bx bx-chevron-down absolute top-1.5 right-3 text-3xl"></i>
        <span>
          {concat ? `${concat} ${content[attribute]}` : content[attribute]}
        </span>
      </div>
      {show && (
        <div className="w-full bg-white dark:bg-dark-third absolute top-full mt-1 left-0 right-0 z-50">
          <input
            type="text"
            placeholder={placeHolder}
            className={
              "w-full p-2 border-l-2 border-r-2 border-t-2 dark:border-gray-300 border-solid border-blue-500 relative shadow-lg dark:bg-dark-third"
            }
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              let listNew = [];
              list.forEach((item) => {
                if (
                  item[attribute]
                    .toLowerCase()
                    .indexOf(event.target.value.toLowerCase()) !== -1
                )
                  listNew.push(item);
              });
              setListCurrent(listNew);
            }}
          />
          <div className=" overflow-y-auto scrollbar-css max-h-48 w-full border-2 border-solid shadow-xl border-blue-500  dark:border-gray-300">
            {listCurrent.length > 0 ? (
              listCurrent.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setData(item);
                      setContent(item);
                      setShow(false);
                      setListCurrent(list);
                      setValue("");
                    }}
                    key={index}
                    className={`w-full p-2.5 border-b-2 border-solid relative hover:bg-gray-200 dark:hover:bg-dark-second`}
                  >
                    {concat
                      ? `${item[attribute]} / ${
                          item[concat.data1][concat.data2]
                        }`
                      : item[attribute]}
                  </div>
                );
              })
            ) : (
              <p className="w-full pl-2 py-4 font-semibold text-gray-500">
                Không tìm thấy nội dung bạn cần tìm
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default SelectCustom;
