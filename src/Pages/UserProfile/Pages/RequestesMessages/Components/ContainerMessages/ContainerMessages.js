import React, { useEffect, useRef } from "react";
import TextMessage from "../ContentMessages/Components/TextMessage/TextMessage";
import { useRecoilValue } from "recoil";
import { buyerMessagesChanged } from "../../GlopalStateRecoil/AllData";

function ContainerMessages({ margin }) {
  const refCont = useRef();
  const Messages = useRecoilValue(buyerMessagesChanged);
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
      style={{ marginTop: margin ? "0px" : "62px" }}
    >
      {Messages.map((item, idx) => (
        <TextMessage {...item} key={idx} />
      ))}
    </div>
  );
}

export default ContainerMessages;
