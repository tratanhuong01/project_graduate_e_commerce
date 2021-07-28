import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../../actions/index";
import * as Config from "../../../constants/Config";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      stateSearch: false,
    };
  }
  onChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };
  searchProduct = () => {
    const { searchProduct, product } = this.props;
    const { keyword } = this.state;
    searchProduct(product, keyword);
    this.setState({
      stateSearch: true,
    });
  };
  searchProductPress = (event) => {
    const { searchProduct, product } = this.props;
    if (event.charCode === 13) {
      searchProduct(product, event.target.value);
      this.setState({
        stateSearch: true,
      });
    }
  };
  render() {
    const { stateSearch, keyword } = this.state;
    if (stateSearch) {
      return <Redirect to={Config.PAGE_SEARCH} />;
    }
    return (
      <>
        <div className="w-full rouned-full relative">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            onChange={this.onChange}
            value={keyword}
            onKeyPress={this.searchProductPress}
            className="w-full py-2.5 px-4 rounded-full border-2 border-solid border-black"
          />
          <i
            onClick={this.searchProduct}
            className="bx bx-search text-3xl absolute right-3 top-2 cursor-pointer"
          ></i>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    searchProduct: (products, keyword) => {
      dispatch(actions.searchProduct(products, keyword));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
