import { useNavigate } from "react-router-dom";
import { ReactComponent as Send } from "../../../../Assets/send.svg";
import { useRef, useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { ErrorComponent } from "../../../../../../../../Others/Error";
import { trans } from "../../../../../../../../Components/Navbar/Navbar";
import Loader from "../../../../../../../../Components/Loader/Loader";
import { basedDomin } from "../../../../../../../../Api/basedDomin";
import { buyerChangeUserId, buyerMessagesChanged } from "../../../../GlopalStateRecoil/AllData";

function Footer() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const ref = useRef();
  const userId = useRecoilValue(buyerChangeUserId);
  const [loader, setLoader] = useState(false);
  // Messages Container
  const [Messages, setMessages] = useRecoilState(buyerMessagesChanged);
  // Mesage State
  const [message, sendMessage] = useState("");
  // Onsubmit
  const submit = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}/buyer/orders/${userId.order_id}/offers/${userId.vendor_id}/send-messages`,
        { message },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessages([data.data,...Messages]);
      setLoader(false);
      ref.current.value = "";
      sendMessage("")
    } catch (error) {
      ErrorComponent(error, navigate);
      setLoader(false);
    }
  };
  // Onsubmit
  return (
    <div className="send-message border-top p-3">
      <form onSubmit={submit} className="input-message d-flex">
        <input
          ref={ref}
          placeholder={trans("harag_message.write_message")}
          className="flex-grow-1 border-0 bg-transparent fs-12-400"
          type="text"
          onChange={(e) => {
            sendMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className={`icon border-0 ${loader ? "bg-dark" : "bg-green"}`}
          disabled={loader}
        >
          {loader ? <Loader width={"25px"} /> : <Send />}
        </button>
      </form>
    </div>
  );
}

export default Footer;