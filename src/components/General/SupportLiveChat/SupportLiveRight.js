import React, { createRef, useEffect, useState } from "react";
import ContentChatRight from "./ContentChatRight/ContentChatRight";
import ContentChatTop from "./ContentChatTop/ContentChatTop";
import ControlChatRight from "./ControlChatRight/ControlChatRight";
import * as messagesApi from "../../../api/messagesApi";
function SupportLiveRight(props) {
  //
  const { groupChat, setInfoChat, userSupport } = props;
  const [message, setMessage] = useState(null);
  const [send, setSend] = useState(false);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await messagesApi.getMessageByIdGroupChat(groupChat.id);
      if (unmounted) return;
      setMessage(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [send]);
  const ref = createRef(null);
  const scrollBottomContent = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };
  //
  return !message ? (
    <div
      className="fixed right-8 bottom-8 z-second"
      style={{ width: 380 }}
    ></div>
  ) : (
    <div
      className="fixed right-8 bottom-8 z-second overflow-auto bg-white pb-1"
      style={{ width: 380, maxHeight: 500, height: 500 }}
    >
      <div className="w-full h-full flex flex-col">
        <ContentChatTop
          message={message}
          setInfoChat={setInfoChat}
          userSupport={userSupport}
        />
        <ContentChatRight
          ref={ref}
          message={message}
          scrollBottomContent={scrollBottomContent}
        />
        <ControlChatRight
          send={send}
          setSend={setSend}
          refData={ref}
          message={message}
          scrollBottomContent={scrollBottomContent}
        />
      </div>
    </div>
  );
}

export default SupportLiveRight;
