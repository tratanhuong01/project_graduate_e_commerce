import React from "react";
import MainSearch from "../../containers/Search/MainSearch";
import useResetPage from "../../hook/useResetPage";

function Search(props) {
  //
  const params = new URLSearchParams(window.location.search);
  useResetPage(null);

  //
  return (
    <>
      <MainSearch slug={params.get("slug")} keyword={params.get("query")} />
    </>
  );
}

export default Search;
