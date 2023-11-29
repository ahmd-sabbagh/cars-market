import React from "react";
import { ReactComponent as Chat } from "../../../../Assets/noChat.svg";
import { useRecoilState } from "recoil";
import { trans } from "../../../../../../../../Components/Navbar/Navbar";
import { buyerOpenListUserMessages } from "../../../../GlopalStateRecoil/AllData";
function NoChatOpen() {
  const [open, setOpen] = useRecoilState(buyerOpenListUserMessages);
  return (
    <>
      <div
        className="flex-c pointer"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Chat />
      </div>
      <p
        className=" fs-16-500 text-color text-center"
        style={{ maxWidth: "367px" }}
      >
        {trans("not_open_chat")}
      </p>
    </>
  );
}

export default NoChatOpen;
