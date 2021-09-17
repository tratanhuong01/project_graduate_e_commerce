import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as messagesAction from "../../../../actions/messages/index";
import ItemChat from "./ItemChat/ItemChat";
import ItemLoadingChat from "./ItemLoadingChat/ItemLoadingChat";

function ItemChatFirst(props) {
  const { admin, type, item } = props;
  const [first, setFirst] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    const timeOut = setTimeout(() => {
      dispatch(messagesAction.updateFirstSupportLive(true));
      setFirst(true);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
    //
  }, []);
  return first ? (
    <ItemChat item={item} type={type} />
  ) : (
    <ItemLoadingChat admin={admin} />
  );
}

export default ItemChatFirst;
