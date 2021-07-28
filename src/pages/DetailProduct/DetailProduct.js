import React, { Component } from "react";
import MainDetailProduct from "../../containers/DetailProduct/MainDetailProduct";
import Second from "../../containers/Second";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
class DetailProduct extends Component {
  constructor(props) {
    super(props);
    var { match, product, user, resetDetailProduct } = this.props;
    resetDetailProduct();
    this.viewProduct(match.params.slug, product, user);
    window.addEventListener("scroll", this.viewScrollProduct);
  }
  componentDidMount() {
    var { match, product, user, closeModal } = this.props;
    this.viewProduct(match.params.slug, product, user);
    closeModal();
  }
  viewProduct = (slug, product, user) => {
    this.props.viewProduct(slug, product, user);
  };
  viewScrollProduct = () => {
    this.props.viewScrollProduct();
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    var { match, product, user } = this.props;
    this.viewProduct(match.params.slug, product, user);
  }
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <MainDetailProduct />
        <Second />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    resetDetailProduct: () => {
      dispatch(actions.resetDetailProduct());
    },
    viewProduct: (slug, products, user) => {
      dispatch(actions.viewProduct(slug, products, user));
    },
    closeModal: () => {
      dispatch(actions.closeModal());
    },
    viewScrollProduct: () => {
      dispatch(actions.viewScrollProduct());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
