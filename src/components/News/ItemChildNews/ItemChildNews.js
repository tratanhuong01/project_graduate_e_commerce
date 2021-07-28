import React, { Component } from "react";
import ItemNews from "../../Index/News/NewsRight/ItemNews/ItemNews";

class ItemChildNews extends Component {
  render() {
    return (
      <div className="w-full sm:w-1/2 m-2 bg-white relative">
        <ItemNews />
      </div>
    );
  }
}

export default ItemChildNews;
