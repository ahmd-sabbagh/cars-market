import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from "./Components/Head/Head";
import Footer from "./Components/Footer/Footer";
import NoChatOpen from "./Components/NoChatOpen/NoChatOpen";
import { useRecoilState, useRecoilValue } from "recoil";
import { changeUserId, messagesChanged } from "../../GlopalStateRecoil/AllData";
import axios from "axios";
import { basedDomin } from "../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../Others/Error";
import Loader from "../../../Loader/Loader";
import { useRef } from "react";
import ContainerMessages from "../ContainerMessages/ContainerMessages";
import Offers from "./Components/Offers/Offers";

function ContentMessages() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const refCont = useRef();
  const userId = useRecoilValue(changeUserId);
  // Get UseR Chat
  const [Messages, setMessages] = useRecoilState(messagesChanged);
  const [usersChat, setUsersChat] = useState();
  const [exist, setExist] = useState(false);
  const [loader, setLoader] = useState(false);
  const getUserChat = () => {
    setLoader(true);
    axios
      .post(
        `${basedDomin}/vendor/orders/offers/${userId}`,
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setUsersChat(data.data);
        setMessages(data.data.messages.data);
        setExist(true);
        setLoader(false);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // UseEffect
  useEffect(() => {
    if (userId) {
      getUserChat();
    } else {
      console.log("Nothing");
    }
  }, [userId]);
  // Get UseR Chat
  return (
    <div className="ContentMessages d-flex flex-column flex-grow-1">
      <>
        {loader ? (
          <div className=" full-height flex-c">
            <Loader width={"150px"} />
          </div>
        ) : exist ? (
          <>
            <Head {...usersChat.buyer_data} />
            {/* Content Message */}
            <div className="message-text d-flex flex-column justify-content-end gap-1 flex-grow-1 px-2 py-1 px-sm-3 position-relative">
              {/* Offers */}
              <Offers {...usersChat} />
              {/* Nessages */}
              <ContainerMessages />
            </div>
            {/* Content Message */}
            <Footer refCont={refCont} />
          </>
        ) : (
          <div className=" flex-grow-1 flex-c flex-column gap-4 ">
            <NoChatOpen />
          </div>
        )}
      </>
    </div>
  );
}

export default ContentMessages;
