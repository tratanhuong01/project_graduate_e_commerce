import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: new Intl.NumberFormat("ban", "id").format(0) + " VNĐ",
      to: new Intl.NumberFormat("ban", "id").format(100000000) + " VNĐ",
    };
  }
  replaceAllString = (string) => {
    return string.replace(/\D/g, "");
  };
  onChangeFrom = (event) => {
    var target = event.target;
    var name = target.name;
    var value = Number(this.replaceAllString(target.value));
    var to = Number(this.replaceAllString(this.state.to));
    if (event.nativeEvent.inputType === "deleteContentBackward") {
      if (Math.round(value / 10) <= 0) {
        this.setState({
          [name]: new Intl.NumberFormat("ban", "id").format(0) + " VNĐ",
        });
      } else {
        this.setState({
          [name]:
            new Intl.NumberFormat("ban", "id").format(value / 10) + " VNĐ",
        });
      }
    } else {
      if (value.length < 0) {
        this.setState({
          [name]: new Intl.NumberFormat("ban", "id").format(0) + " VNĐ",
        });
      } else {
        if (value > to) {
          this.setState({
            [name]:
              new Intl.NumberFormat("ban", "id").format(to - 1000000) + " VNĐ",
          });
        } else {
          this.setState({
            [name]: new Intl.NumberFormat("ban", "id").format(value) + " VNĐ",
          });
        }
      }
    }
  };
  onChangeTo = (event) => {
    var target = event.target;
    var name = target.name;
    var value = Number(this.replaceAllString(target.value));
    var from = Number(this.replaceAllString(this.state.from));
    if (event.nativeEvent.inputType === "deleteContentBackward") {
      if (from === 0) {
        this.setState({
          [name]: new Intl.NumberFormat("ban", "id").format(1000000) + " VNĐ",
        });
      } else if (from === value) {
        this.setState({
          [name]:
            new Intl.NumberFormat("ban", "id").format(value + 1000000) + " VNĐ",
        });
      } else {
        if (Math.round(value / 10) <= from) {
          this.setState({
            [name]: new Intl.NumberFormat("ban", "id").format(from) + " VNĐ",
          });
        } else {
          this.setState({
            [name]:
              new Intl.NumberFormat("ban", "id").format(value / 10) + " VNĐ",
          });
        }
      }
    } else {
      if (value > 100000000) {
        this.setState({
          [name]: new Intl.NumberFormat("ban", "id").format(100000000) + " VNĐ",
        });
      } else {
        if (value < from) {
          this.setState({
            [name]:
              new Intl.NumberFormat("ban", "id").format(from + 1000000) +
              " VNĐ",
          });
        } else {
          this.setState({
            [name]: new Intl.NumberFormat("ban", "id").format(value) + " VNĐ",
          });
        }
      }
    }
  };
  filterProductPrice = () => {
    // this.props.filterProductPrice(this.props.product, {
    //   from: this.replaceAllString(this.state.from),
    //   to: this.replaceAllString(this.state.to),
    // });
  };
  render() {
    var { from, to } = this.state;
    return (
      <>
        <p className="text-xl my-3 font-semibold">Lọc giá</p>
        <div className="w-full my-2 flex">
          <div className="flex items-center">
            <input
              type="text"
              name="from"
              className="w-1/2 text-sm bg-white p-2 mb-2 text-center"
              value={from}
              placeholder="Từ"
              onChange={this.onChangeFrom}
            />
            <i className="bx bxs-right-arrow-alt text-gray-700 text-xl"></i>
            <input
              type="text"
              name="to"
              className="w-1/2 bg-white text-sm p-2 mb-2 rounded-xl text-center"
              value={to}
              placeholder="Đến"
              onChange={this.onChangeTo}
            />
          </div>
        </div>
        <button
          onClick={this.filterProductPrice}
          type="button"
          className="px-5 py-2 my-2 bg-organce text-white font-semibold 
                rounded-full"
        >
          Lọc giá
        </button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getProduct: state.getProduct,
    product: state.product,
    filterProduct: state.filterProduct,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    filterProductPrice: (products, price) => {
      dispatch(actions.filterProductPrice(products, price));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Price);
