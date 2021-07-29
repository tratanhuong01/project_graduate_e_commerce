import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../../actions/index";
import * as Config from "../../../constants/Config";

function Search(props) {
  //
  const states = useSelector((state) => {
    return {
      product: state.product,
    };
  });
  const { product } = states;
  const [keyword, setKeyword] = useState("");
  const [stateSearch, setStateSearch] = useState(false);
  const dispatch = useDispatch();
  const searchProduct = () => {
    dispatch(actions.searchProduct(product, keyword));
    setStateSearch(true);
  };
  const searchProductPress = (event) => {
    if (event.charCode === 13) {
      dispatch(actions.searchProduct(product, keyword));
      setStateSearch(true);
    }
  };
  if (stateSearch) {
    return <Redirect to={Config.PAGE_SEARCH} />;
  }
  //
  return (
    <>
      <div className="w-full rouned-full relative">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          onChange={(event) => setKeyword(event.target.value)}
          value={keyword}
          onKeyPress={searchProductPress}
          className="w-full py-2.5 px-4 rounded-full border-2 border-solid border-black"
        />
        <i
          onClick={searchProduct}
          className="bx bx-search text-3xl absolute right-3 top-2 cursor-pointer"
        ></i>
      </div>
    </>
  );
}

export default Search;
