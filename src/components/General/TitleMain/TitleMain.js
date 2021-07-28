import React, { Component } from "react";

class TitleMain extends Component {
  render() {
    return (
      <p
        className="p-8 font-bold text-5xl text-center 
        hover:text-organce cursor-pointer"
      >
        {this.props.Content}
      </p>
    );
  }
}

export default TitleMain;
