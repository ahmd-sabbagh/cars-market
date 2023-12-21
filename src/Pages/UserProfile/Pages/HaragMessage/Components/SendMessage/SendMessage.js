import { useRecoilState, useRecoilValue } from "recoil";
import { trans } from "../../../../../../Components/Navbar/Navbar";
import { ReactComponent as Send } from "../../../../Assets/send.svg";
import { contentMessagesHarag, haragMessages } from "../../atoms/atoms";
import { useRef, useState } from "react";
import { ErrorComponent } from "../../../../../../Others/Error";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { basedDomin } from "../../../../../../Api/basedDomin";
import Loader from "../../../../../../Components/Loader/Loader";
import { useEffect } from "react";
import Pusher from "pusher-js";

function SendMessage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  const ref = useRef();
  const routMessage = useRecoilValue(haragMessages);
  const [allMessage, setAllMessage] = useRecoilState(contentMessagesHarag);
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  // Pusher Request Message
  useEffect(() => {
    const pusher = new Pusher("e1a99b18f88e0adba1aa", {
      cluster: "eu",
    });
    const channel = pusher.subscribe(
      `user-channel-${routMessage.adChat.user}-chat-shop-ad-${routMessage.adChat.ad}-user-${userId}`
    );
    channel.bind(
      `chat-shop-ad-${routMessage.adChat.ad}-user-${userId}`,
      (message) => {
        setAllMessage((current) => [message.data, ...current]);
      }
    );
    return () => {
      pusher.unsubscribe(
        `user-channel-${routMessage.adChat.user}-chat-shop-ad-${routMessage.adChat.ad}-user-${userId}`
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Pusher Request Message
  // Send Message
  const onsubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${basedDomin}/shop/chat/ads/${routMessage.adChat.ad}/send/user/${routMessage.adChat.user}`,
        { message },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAllMessage((current) => [data.data, ...current]);
      setLoader(false);
      ref.current.value = "";
    } catch (error) {
      ErrorComponent(error, navigate);
      setLoader(false);
    }
  };
  return (
    <>
      <form onSubmit={onsubmit} className="send-message border-top">
        <div className="input-message d-flex">
          <input
            placeholder={trans("harag_message.write_message")}
            className="flex-grow-1 border-0 bg-transparent"
            type="text"
            required
            ref={ref}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            type="submit"
            className={`icon border-0 ${loader ? "bg-dark" : "bg-green"}`}
            disabled={loader}
          >
            {loader ? <Loader width={"25px"} /> : <Send />}
          </button>
        </div>
      </form>
    </>
  );
}

export default SendMessage;
