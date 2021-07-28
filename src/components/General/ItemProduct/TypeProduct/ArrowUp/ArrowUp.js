import React, { Component } from "react";

class ArrowUp extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <span className="flex items-center cursor-pointer">
          <i className="bx bxs-left-arrow-alt text-2xl text-gray-500"></i>
        </span>
      </div>
    );
  }
}

export default ArrowUp;
