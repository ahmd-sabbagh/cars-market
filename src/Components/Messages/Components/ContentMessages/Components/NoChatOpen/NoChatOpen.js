import React from "react";
import { ReactComponent as Chat } from "../../../../Assets/noChat.svg";
import { trans } from "../../../../../Navbar/Navbar";
import { openListUserMessages } from "../../../../GlopalStateRecoil/AllData";
import { useRecoilState } from "recoil";
function NoChatOpen() {
  const [open, setOpen] = useRecoilState(openListUserMessages);
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
