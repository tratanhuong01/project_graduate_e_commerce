import React, { forwardRef, useEffect } from "react";
import { useSelector } from "react-redux";
import ItemChat from "./ItemChat/ItemChat";
import ItemChatFirst from "./ItemChatFirst";
import ItemLoadingChat from "./ItemLoadingChat/ItemLoadingChat";

function ContentChatRight(props, refData) {
  //
  const { scrollBottomContent } = props;
  const messages = useSelector((state) => state.messages);
  useEffect(() => {
    scrollBottomContent();
    //
  }, [scrollBottomContent]);
  //
  return messages.list.messagesList ? (
    <div
      ref={refData}
      className="w-full px-1 flex-1 flex items-start py-5 flex-col overflow-y-auto shadow-xl  
        scrollbar-css overflow-x-hidden border-l-2 border-r-2 border-solid border-gray-100"
    >
      {messages.list.messagesList.map((item, index) => {
        if (messages.first) {
          if (item.userMessages)
            return <ItemChat key={index} type={0} item={item} />;
          else return <ItemChat key={index} type={1} item={item} />;
        } else {
          if (item.typeMessages === 1)
            return (
              <ItemChatFirst
                key={index}
                item={item}
                admin={messages.admin}
                type={0}
              />
            );
          else {
            if (item.userMessages)
              return <ItemChat key={index} type={0} item={item} />;
            else return <ItemChat key={index} type={1} item={item} />;
          }
        }
      })}
      {messages.typing && <ItemLoadingChat admin={messages.admin} />}
    </div>
  ) : (
    ""
  );
}

export default forwardRef(ContentChatRight);
