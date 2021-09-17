import React, { createRef, useEffect, useState } from "react";
import ContentChatRight from "./ContentChatRight/ContentChatRight";
import ContentChatTop from "./ContentChatTop/ContentChatTop";
import ControlChatRight from "./ControlChatRight/ControlChatRight";
import * as messagesAction from "../../../actions/messages/index";
import { useDispatch, useSelector } from "react-redux";
function SupportLiveRight(props) {
  //
  const { setInfoChat } = props;
  const [send, setSend] = useState(false);
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(messagesAction.loadMessageRequest(messages.group));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [send]);
  useEffect(() => {
    //
    messages.socket.on(`receiveMessage.${messages.group.id}`, () => {
      dispatch(messagesAction.loadMessageRequest(messages.group));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [send]);
  const ref = createRef(null);
  const scrollBottomContent = () => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  };
  //
  return (
    <div
      className="fixed right-8 bottom-8 z-second overflow-auto bg-white pb-1"
      style={{ width: 380, maxHeight: 500, height: 500 }}
    >
      <div className="w-full h-full flex flex-col">
        <ContentChatTop setInfoChat={setInfoChat} />
        <ContentChatRight ref={ref} scrollBottomContent={scrollBottomContent} />
        <ControlChatRight
          send={send}
          setSend={setSend}
          refData={ref}
          scrollBottomContent={scrollBottomContent}
        />
      </div>
    </div>
  );
}

export default SupportLiveRight;
