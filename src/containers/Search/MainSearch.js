import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderNormal from "../../components/Header/HeaderNormal/HeaderNormal";
import Rule from "../../containers/General/Rule";
import ReciveInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import ItemProductSearch from "../../components/General/ItemProduct/ItemProductSearch";
import NotifyNumberProductSearch from "../../components/Search/NotifyNumberProductSearch";
class MainSearch extends Component {
  render() {
    const { search } = this.props;
    const showProductSearchs = search.map((item, index) => {
      return <ItemProductSearch product={item} key={index} />;
    });
    return (
      <div className="w-full">
        <div className="w-full relative text-white md:text-black">
          <HeaderNormal />
        </div>
        <div className="w-full bg-gray-100">
          <div className="xl:w-4/5 w-full mx-auto p-4">
            <NotifyNumberProductSearch number={showProductSearchs.length} />
            <div className="w-full flex flex-wrap">
              {showProductSearchs}
              {showProductSearchs}
            </div>
          </div>
          <Rule />
          <ReciveInfo />
          <EndFooter />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};
export default connect(mapStateToProps)(MainSearch);
