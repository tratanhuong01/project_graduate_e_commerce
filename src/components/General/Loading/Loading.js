import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div className="w-full h-screen relative bg-white">
        <img
          src="/images/loading.gif"
          alt=""
          className="w-28 h-28 rounded-full absolute top-1/2 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2 "
        />
      </div>
    );
  }
}

export default Loading;
