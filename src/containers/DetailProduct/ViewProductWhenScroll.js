import React, { Component } from "react";
import Left from "../../components/DetailProduct/ViewProductWhenScroll/Left";
import Right from "../../components/DetailProduct/ViewProductWhenScroll/Right";

class ViewProductWhenScroll extends Component {
  render() {
    return (
      <div
        id="modal__product__children"
        className="w-full sticky top-0 bg-white z-20 shadow-lg border-b-2 
        border-solid border-gray-100"
      >
        <div className="xl:w-4/5 md:bg-transparent mx-auto flex p-4">
          <Left />
          <Right />
        </div>
      </div>
    );
  }
}

export default ViewProductWhenScroll;
