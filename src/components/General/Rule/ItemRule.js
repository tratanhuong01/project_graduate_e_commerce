import React, { Component } from "react";

class ItemRule extends Component {
  render() {
    return (
      <div className={this.props.classNameOfTagDiv}>
        <span className="flex items-center text-xm font-semibold">
          <i className={this.props.classNameOfTagI}></i>
          {this.props.Content}
        </span>
      </div>
    );
  }
}

export default ItemRule;
