import React, { Component } from "react";
import MainSearch from "../../containers/Search/MainSearch";
import Second from "../../containers/Second";
class Search extends Component {
  render() {
    return (
      <>
        <MainSearch />
        <Second />
      </>
    );
  }
}

export default Search;
