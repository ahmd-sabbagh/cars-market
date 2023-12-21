import { useRef } from "react";
import TextMessage from "../../../../../../Components/Messages/Components/ContentMessages/Components/TextMessage/TextMessage";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import { contentMessagesHarag } from "../../atoms/atoms";
import "./ContentMessage.css";

function ContentMessage() {
  const refCont = useRef();
  const Messages = useRecoilValue(contentMessagesHarag);
  // Scroll To Bottom Fun
  const scrollToBottom = () => {
    let elHeight = document.getElementById("message-harag")?.clientHeight;
    refCont?.current?.scrollTo({ top: elHeight, behavior: "smooth" });
  };
  // Scroll To Bottom Fun
  useEffect(() => {
    scrollToBottom();
  }, [Messages.length]);
  return (
    <>
      <div
        ref={refCont}
        id="message-harag"
        className="d-flex flex-column-reverse gap-1 flex-grow-1 px-3 px-md-0 pb-2"
      >
        {Messages.map((item, idx) => (
          <TextMessage {...item} key={idx} />
        ))}
      </div>
    </>
  );
}

export default ContentMessage;
