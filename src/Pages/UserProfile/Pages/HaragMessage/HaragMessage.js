import React, { useEffect } from "react";
import { trans } from "../../../../Components/Navbar/Navbar";
import { useState } from "react";
import ListesUsers from "./Components/ListesUsers/ListesUsers";
import SendMessage from "./Components/SendMessage/SendMessage";
import Head from "./Components/Head/Head";
import ContentMessage from "./Components/ContentMessage/ContentMessage";
import { getContentChat } from "./callApiFunctions/getContentChat";
import { useNavigate } from "react-router-dom";
import { contentMessagesHarag, haragMessages } from "./atoms/atoms";
import { useRecoilState } from "recoil";
import Loader from "../../../../Components/Loader/Loader";
import NotUser from "../../../../Components/NotUser/NotUser";
import "./HaragMessage.css"

function HaragMessage() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [status, setStatus] = useState(true);
  const [message, setMessage] = useRecoilState(haragMessages);
  const [contentMessage, setContentMessage] = useRecoilState(contentMessagesHarag);
  // console.log(message)
  useEffect(() => {
    if (message.adChat.ad && message.adChat.user) {
      getContentChat(
        `/shop/chat/ads/${message.adChat.ad}/user/${message.adChat.user}`,
        setMessage,
        message,
        setContentMessage,
        setLoader,
        navigate
      );
      console.log(message.adChat.ad,message.adChat.user);
    } else {
      console.log("no thing");
    }
  }, [message.adChat.ad,message.adChat.user]);
  return (
    <div className="AllPageMessage py-4 px-0 px-lg-3">
      <div className="head">
        <h3 className="fs-24-600">{trans("harag_message.title")}</h3>
        <p>{trans("harag_message.disc")}</p>
      </div>
      {/* cont */}
      <div className="cont mt-5 px-3 px-md-4 bg-white overflow-hidden r-10">
        {/* All Message */}
        <ListesUsers setState={setStatus} />
        {/* Content Message */}
        <div
          className={`control transion-5 full-width pt-4 ${
            status && "right-0"
          }`}
        >
          <div className="content-message full-height">
            {loader ? (
              <div className="full-height flex-c" id="loader">
                <Loader width="100px" />
              </div>
            ) : message.contentMessage ? (
              <>
                {/* Head */}
                <Head setState={setStatus} />
                {/* container message */}
                <ContentMessage />
                {/* Text Send Message */}
                <SendMessage />
              </>
            ) : (
              <div className=" full-height flex-c" id="not-chat">
                <NotUser />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HaragMessage;
