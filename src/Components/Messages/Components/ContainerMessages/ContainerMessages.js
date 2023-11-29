import React, { useEffect, useRef } from "react";
import TextMessage from "../ContentMessages/Components/TextMessage/TextMessage";
import { useRecoilValue } from "recoil";
import { messagesChanged } from "../../GlopalStateRecoil/AllData";

function ContainerMessages() {
  const refCont = useRef();
  const Messages = useRecoilValue(messagesChanged);
  // Scroll To Bottom Fun
  const scrollToBottom = () => {
    let elHeight = document.getElementById("message-text")?.clientHeight;
    refCont?.current?.scrollTo({ top: elHeight, behavior: "smooth" });
  };
  // Scroll To Bottom Fun
  useEffect(() => {
    scrollToBottom();
  }, [Messages.length]);
  return (
    <div
      ref={refCont}
      id="message-text"
      className="cont d-flex flex-column-reverse gap-2 flex-grow-1"
    >
      {Messages.map((item,idx) => (
        <TextMessage {...item} key={idx} />
      ))}
    </div>
  );
}

export default ContainerMessages;
