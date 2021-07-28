import React, { Component } from "react";

class ImageMain extends Component {
  render() {
    return (
      <img src={this.props.URL} className="w-full h-64 object-cover" alt="" />
    );
  }
}

export default ImageMain;
