import React, { useEffect, useState } from "react";
import api from "./Utils/api";

function AddData(props) {
  //
  const [listColor, setListColor] = useState([]);
  const [listCategoryProduct, setListCategoryProduct] = useState([]);
  const [listGroupProduct, setListGroupProduct] = useState([]);
  const [listBrand, setListBrand] = useState([]);
  const [groupProduct, setGroupProduct] = useState("");
  const [brand, setBrand] = useState("");
  const [listColorChoose, setListColorChoose] = useState([]);
  const [nameProduct, setNameProduct] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [priceOutput, setPriceOutput] = useState("");
  const [sale, setSale] = useState(0);
  const [listMemory, setListMemory] = useState([]);
  const [listMemoryChoose, setListMemoryChoose] = useState([]);
  const [listSlug, setListSlug] = useState([]);
  const [listImage, setListImage] = useState([]);
  const [url, setUrl] = useState("");
  const convertStringToSlug = (string) => {
    return string
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };
  const gereralSlug = () => {
    let dt = [...listSlug];
    listMemoryChoose.forEach((element_1) => {
      listColorChoose.forEach((element_2) => {
        dt.push(`${element_1} - ${element_2}`);
      });
    });
    return dt;
  };
  const push = async () => {
    const lineProduct = await api("lineProducts", "POST", {
      id: "LP1000000000",
      nameLineProduct: nameProduct,
      groupProduct: groupProduct,
    });
    for (let index = 0; index < listColorChoose.length; index++) {
      const dt1 = listColorChoose[index];
      let image = await api("images", "POST", {
        id: "",
        alt: "",
        src: listImage[index],
        type: 0,
      });
      listMemory.forEach(async (dt2) => {
        let product = await api("products", "POST", {
          id: "",
          describeProduct: null,
          isShow: 1,
          slug: `${convertStringToSlug(
            `${nameProduct} ${dt2.nameMemory} ${dt1.description} `
          )}`,
          brandProduct: brand,
          colorProduct: dt1,
          imageProduct: image.data,
          lineProduct: lineProduct.data,
          memoryProduct: dt2,
          userProduct: null,
          sizeProduct: null,
        });
        // await api("productInputs", "POST", {
        //   id: "",
        //   amount: 10,
        //   priceInput: Number(priceInput),
        //   timeInput: "2021-08-08 18:30:30",
        //   productInput: product.data,
        // });
        // await api("productOutputs", "POST", {
        //   id: "",
        //   amount: 10,
        //   priceOutput: Number(priceOutput),
        //   timeOutput: "2021-08-08 18:30:30",
        //   productOutput: product.data,
        // });
      });
    }
  };
  useEffect(() => {
    //
    const data = async () => {
      const colors = await api("colors", "GET", null);
      const memories = await api("memories", "GET", null);
      const brands = await api("brands", "GET", null);
      const groupProducts = await api("groupProducts", "GET", null);
      setListColor(colors.data);
      setListGroupProduct(groupProducts.data);
      // setListBrand(brands.data);
      setListMemory(memories.data);
    };

    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="w-1/3 mx-auto my-10">
      <select
        onChange={(event) => setGroupProduct(JSON.parse(event.target.value))}
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
      >
        {listGroupProduct.map((item, index) => {
          return (
            <option value={JSON.stringify(item)} key={index}>
              {item.nameGroupProduct}
            </option>
          );
        })}
      </select>
      <select
        onChange={(event) => setBrand(JSON.parse(event.target.value))}
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
      >
        {listBrand.map((item, index) => {
          return (
            <option value={JSON.stringify(item)} key={index}>
              {item.nameBrand}
            </option>
          );
        })}
      </select>
      <div className="w-full max-w-full overflow-x-auto my-2 flex">
        {listColor.map((item, index) => {
          return (
            <div
              onClick={() => {
                setListColorChoose([...listColorChoose, item]);
              }}
              className={`w-10 h-10 rounded-full cursor-pointer mx-1 flex-shink-0`}
              style={{ backgroundColor: item.code }}
              key={index}
            ></div>
          );
        })}
      </div>
      <div className="w-full max-w-full overflow-x-auto my-2 flex">
        {listMemory.map((item, index) => {
          return (
            <div
              onClick={() => {
                setListMemoryChoose([...listMemoryChoose, item]);
              }}
              className={`w-14 h-14 rounded-full cursor-pointer mx-2 flex-shink-0 flex justify-center 
              items-center font-bold border-2 border-solid border-gray-300`}
              key={index}
            >
              {item.nameMemory}
            </div>
          );
        })}
      </div>
      <input
        type="text"
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
        placeholder="Tên sản phẩm"
        onChange={(event) => setNameProduct(event.target.value)}
        value={nameProduct}
      />
      <button
        onClick={() => console.log(gereralSlug())}
        className="w-full px-10 py-3 rounded-full bg-green-500 text-white font-bold my-2"
      >
        Tạo slug
      </button>
      <input
        type="text"
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
        placeholder="Đường dẫn hình ảnh"
        onChange={(event) => setUrl(event.target.value)}
        value={url}
      />
      <button
        onClick={() => {
          setListImage([...listImage, url]);
          setUrl("");
        }}
        className="w-full px-10 py-3 rounded-full bg-green-500 text-white font-bold my-2"
      >
        Thêm url
      </button>
      <input
        type="text"
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
        placeholder="Giá nhập vào"
        onChange={(event) => setPriceInput(event.target.value)}
        value={priceInput}
      />
      <input
        type="text"
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
        placeholder="Giá bán ra"
        onChange={(event) => setPriceOutput(event.target.value)}
        value={priceOutput}
      />
      <input
        type="text"
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
        placeholder="Giảm giá"
        onChange={(event) => setSale(event.target.value)}
        value={sale}
      />
      <button
        onClick={() => push()}
        className="w-full px-10 py-3 rounded-full bg-green-500 text-white font-bold my-2"
      >
        Thêm
      </button>
    </div>
  );
}

export default AddData;
