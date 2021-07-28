import React, { Component } from "react";

class Sale extends Component {
  render() {
    return (
      <span
        className="bg-red-500 font-semibold text-xs p-1.5 cursor-pointer absolute
            top-4 -left-1 rounded-r-2xl z-10 text-white"
      >
        -{this.props.sale} %
      </span>
    );
  }
}

export default Sale;
