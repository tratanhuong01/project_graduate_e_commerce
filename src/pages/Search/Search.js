import React from "react";
import MainSearch from "../../containers/Search/MainSearch";
import useResetPage from "../../hook/useResetPage";

function Search(props) {
  //
  useResetPage(null);
  //
  return (
    <>
      <MainSearch />
    </>
  );
}

export default Search;
