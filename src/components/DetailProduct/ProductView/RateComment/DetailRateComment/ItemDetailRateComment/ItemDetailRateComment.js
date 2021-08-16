import React from "react";
import Star from "../../Star/Star";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function ItemDetailRateComment(props) {
  return (
    <div className="w-full p-2 mb-1">
      <div className="w-full my-1 flex">
        <span className="font-semibold mr-3">Hưởng</span>
        <div className="flex items-center text-yellow-500">
          <Star />
        </div>
      </div>
      <div className="w-full my-1 flex items-center">
        Sản phẩm này ở đà nẵng còn không ạ
      </div>
      <div className="w-full flex my-1">
        <Zoom>
          <img
            src="https://bizweb.dktcdn.net/100/420/160/files/co-nen-mua-poco-x3-pro-1.jpg?v=1623732159363"
            alt=""
            className="w-20 h-20 m-1 rounded-lg object-cover"
          />
        </Zoom>
        <Zoom>
          <img
            src="https://bizweb.dktcdn.net/100/420/160/files/co-nen-mua-poco-x3-pro-1.jpg?v=1623732159363"
            alt=""
            className="w-20 h-20 m-1 rounded-lg object-cover"
          />
        </Zoom>
        <Zoom>
          <img
            src="https://bizweb.dktcdn.net/100/420/160/files/co-nen-mua-poco-x3-pro-1.jpg?v=1623732159363"
            alt=""
            className="w-20 h-20 m-1 rounded-lg object-cover"
          />
        </Zoom>
      </div>
      <div className="w-full flex my-1">
        <ul className="flex font-semibold">
          <li className="mx-1 text-organce text-sm">Gửi trả lời</li>
          <li className="flex mx-1 items-center">
            <span className="flex items-center w-1.5 h-1.5 rounded-full bg-gray-500"></span>
          </li>
          <li className="mx-1 text-gray-500 flex items-center">
            <span className="bx bxs-like mr-1 text-sm"></span>
            <span className="mx-1.5 text-sm">0</span>
            <span className="mr-1 text-sm text-organce">Hữu ích</span>
          </li>
          <li className="flex mx-1 items-center">
            <span className="flex items-center w-1.5 h-1.5 rounded-full bg-gray-500"></span>
          </li>
          <li className="mx-1 text-organce text-sm">
            <span className="fas fa-exclamation-triangle mr-1 text-sm"></span>
            <span className="mr-1 text-sm">Báo cáo vi phạm</span>
          </li>
          <li className="flex mx-1 items-center">
            <span className="flex items-center w-1.5 h-1.5 rounded-full bg-gray-500"></span>
          </li>
          <li className="mx-1 text-gray-500 text-sm">22:11 02/08/2021</li>
        </ul>
      </div>
    </div>
  );
}

export default ItemDetailRateComment;