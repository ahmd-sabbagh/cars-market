import React, { useState } from "react";
import "./OtherImages.css";
import { trans } from "../../../../Components/Navbar/Navbar";
import Image1 from "./Assets/1.png";
import Image2 from "./Assets/2.png";
import Image3 from "./Assets/3.png";
import { ReactComponent as Chat } from "./Assets/chat.svg";
import SendMessage from "./SendMessage/SendMessage";
import Popup from "../../../../Components/Popup/Popup";

function OtherImages({ ad }) {
  const imageArr = [Image1, Image2, Image3];
  const [openSendMessage, setOpenSendMessage] = useState({
    status: false,
  });
  return (
    <>
      {openSendMessage.status && (
        <Popup
          state={{
            ...openSendMessage,
            text: `${trans("ads_details.send_message_to")} ${ad?.owner?.name}`,
          }}
          setState={setOpenSendMessage}
        >
          <SendMessage
            data={ad}
            Route={`/shop/chat/ads/${ad?.id}/send/user/${ad?.owner?.id}`}
            state={openSendMessage}
            setState={setOpenSendMessage}
          />
        </Popup>
      )}
      <div className="OtherImages">
        <h3 className="title-dev mb-4">{trans("ads_details.other_image")}</h3>
        <div className="images d-flex flex-column gap-3">
          {imageArr.map((img, idx) => (
            <div
              className="img bg-image r-10"
              key={idx}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
        {/* Button Conect with buyr */}
        <button
          className="r-10 full-width d-block border-0 bg-main text-white d-flex align-items-center gap-3 justify-content-center"
          typ="button"
          onClick={() => {
            setOpenSendMessage({ ...openSendMessage, status: true });
          }}
        >
          <span>
            <Chat />
          </span>
          <span>{trans("ads_details.contact_to_vendor")}</span>
        </button>
      </div>
    </>
  );
}

export default OtherImages;
