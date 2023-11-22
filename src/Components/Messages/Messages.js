import React from "react";
import "./Messages.css";
import ListedUsers from "./Components/ListedUsers/ListedUsers";
import ContentMessages from "./Components/ContentMessages/ContentMessages";
import { useRecoilValue } from "recoil";
import { openListUserMessages } from "./GlopalStateRecoil/AllData";

function Messages() {
  const openListUser = useRecoilValue(openListUserMessages);
  return (
    <div className="Messages flex-grow-1 bg-white overflow-hidden position-relative r-10 d-flex flex-column">
      {/* All Message */}
      <div
        className={`list-side box-sh p-3 bg-white ${openListUser && "direct"}`}
      >
        <ListedUsers />
      </div>
      {/* Content Message */}
      <ContentMessages />
    </div>
  );
}

export default Messages;
