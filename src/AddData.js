import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "./Utils/api";
import * as StringUtils from "./Utils/StringUtils";
function AddData(props) {
  //
  const [listColor, setListColor] = useState([]);
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
  const [listImage, setListImage] = useState([]);
  const [url, setUrl] = useState("");
  const convertStringToSlug = (string) => {
    return string
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };
  const push = async () => {
    const lineProduct = await api("lineProducts", "POST", {
      id: "",
      nameLineProduct: nameProduct,
      groupProduct: groupProduct,
    });
    let id = 1000000000;
    const getId = await api("getIdBestNew", "GET", null);
    if (getId.data === null || getId.data === "") {
    } else {
      id = Number(getId.data.id.replace("SP", ""));
    }
    let listPromise = [];
    let listIdProduct = [];
    let listPromisePrice = [];
    if (listColorChoose.length > 0 && listMemoryChoose.length > 0) {
      listColorChoose.forEach(async (dt1, index) => {
        let image = await api("images", "POST", {
          id: "",
          alt: "",
          src: listImage[index],
          type: 0,
        });
        listMemoryChoose.forEach(async (dt2) => {
          id++;
          listPromise.push(
            api("products", "POST", {
              id: `SP${id}`,
              describeProduct: null,
              isShow: 1,
              slug: `${convertStringToSlug(
                StringUtils.removeVietnameseTones(
                  `${nameProduct} ${dt2.nameMemory} ${dt1.description} `
                )
              )}`,
              brandProduct: brand,
              colorProduct: dt1,
              imageProduct: image.data,
              lineProduct: lineProduct.data,
              memoryProduct: dt2,
              userProduct: null,
              sizeProduct: null,
            })
          );
          listIdProduct.push(id);
        });
      });
    } else if (listColorChoose.length === 0) {
      let image = await api("images", "POST", {
        id: "",
        alt: "",
        src: listImage[0],
        type: 0,
      });
      id++;
      listPromise.push(
        api("products", "POST", {
          id: `SP${id}`,
          describeProduct: null,
          isShow: 1,
          slug: `${convertStringToSlug(
            StringUtils.removeVietnameseTones(`${nameProduct} `)
          )}`,
          brandProduct: brand,
          colorProduct: null,
          imageProduct: image.data,
          lineProduct: lineProduct.data,
          memoryProduct: null,
          userProduct: null,
          sizeProduct: null,
        })
      );
      listIdProduct.push(id);
    } else if (listMemoryChoose.length === 0) {
      let image = await api("images", "POST", {
        id: "",
        alt: "",
        src: listImage[0],
        type: 0,
      });
      id++;
      listPromise.push(
        api("products", "POST", {
          id: `SP${id}`,
          describeProduct: null,
          isShow: 1,
          slug: `${convertStringToSlug(
            StringUtils.removeVietnameseTones(`${nameProduct} `)
          )}`,
          brandProduct: brand,
          colorProduct: null,
          imageProduct: image.data,
          lineProduct: lineProduct.data,
          memoryProduct: null,
          userProduct: null,
          sizeProduct: null,
        })
      );
      listIdProduct.push(id);
    } else
      listColorChoose.forEach(async (dt1, index) => {
        let image = await api("images", "POST", {
          id: "",
          alt: "",
          src: listImage[index],
          type: 0,
        });
        id++;
        listPromise.push(
          api("products", "POST", {
            id: `SP${id}`,
            describeProduct: null,
            isShow: 1,
            slug: `${convertStringToSlug(
              StringUtils.removeVietnameseTones(
                `${nameProduct} ${dt1.description} `
              )
            )}`,
            brandProduct: brand,
            colorProduct: dt1,
            imageProduct: image.data,
            lineProduct: lineProduct.data,
            memoryProduct: null,
            userProduct: null,
            sizeProduct: null,
          })
        );
        listIdProduct.push(id);
      });

    listIdProduct.forEach(async (item) => {
      listPromisePrice.push(
        await api("productInputs", "POST", {
          productInput: {
            id: "",
            amount: 10,
            priceInput: Number(priceInput),
            timeInput: "2021-08-08 18:30:30",
            productInput: null,
          },
          id: item,
        })
      );
      listPromisePrice.push(
        await api("productOutputs", "POST", {
          productOutput: {
            id: "",
            amount: 10,
            priceOutput: Number(priceOutput),
            timeOutput: "2021-08-08 18:30:30",
            productOutput: null,
          },
          id: item,
        })
      );
    });
    axios
      .all(listPromise)
      .then(
        axios.spread((...responses) => {
          console.log(responses);
        })
      )
      .catch((errors) => {
        // react on errors.
      });
    axios
      .all(listPromisePrice)
      .then(
        axios.spread((...responses) => {
          console.log(responses);
        })
      )
      .catch((errors) => {
        // react on errors.
      });
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
      setListBrand(brands.data);
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
