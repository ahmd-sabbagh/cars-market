import React from "react";
import "./Messages.css";
import ListedUsers from "./Components/ListedUsers/ListedUsers";
import ContentMessages from "./Components/ContentMessages/ContentMessages";
import { useRecoilValue } from "recoil";
import { buyerOpenListUserMessages } from "./GlopalStateRecoil/AllData";
import { trans } from "../../../../Components/Navbar/Navbar";

function Messages() {
  const openListUser = useRecoilValue(buyerOpenListUserMessages);
  return (
    <div
      className="py-3 px-md-2 RequestesMessages d-flex flex-column"
      style={{ minHeight: "600px" }}
    >
      <div className="head mb-5">
        <h3 className="fs-24-600">{trans("requestes_message.title")}</h3>
        <p>{trans("requestes_message.disc")}</p>
      </div>
      <div className="Messages flex-grow-1 bg-white overflow-hidden position-relative r-10 d-flex flex-column">
        {/* All Message */}
        <div
          className={`list-side box-sh p-3 bg-white ${
            openListUser && "direct"
          }`}
        >
          <ListedUsers />
        </div>
        {/* Content Message */}
        <ContentMessages />
      </div>
    </div>
  );
}

export default Messages;
