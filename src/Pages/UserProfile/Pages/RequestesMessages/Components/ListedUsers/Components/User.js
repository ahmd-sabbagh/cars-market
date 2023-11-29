import React from "react";
import moment from "moment";
import "moment/locale/ar";
import { useRecoilState } from "recoil";
import {
  buyerChangeUserId,
  buyerOpenListUserMessages,
} from "../../../GlopalStateRecoil/AllData";
import { trans } from "../../../../../../../Components/Navbar/Navbar";
function User({ vendor, time, last_message_type, last_message, order_id }) {
  // Moment
  var timeago;
  if (localStorage.getItem("i18nextLng") === "ar") {
    timeago = moment(time).locale("ar").format("h:mm a");
  } else {
    timeago = moment(time).locale("en").format("h:mm a");
  }
  // Moment
  const [userChatId, setUserChatId] = useRecoilState(buyerChangeUserId);
  const [openListUser, setOpenListUser] = useRecoilState(
    buyerOpenListUserMessages
  );
  return (
    <div
      className="text-black link-message d-flex gap-3 pointer justify-content-between transion-5 border-top pt-2"
      onClick={() => {
        setUserChatId({
          ...userChatId,
          order_id: order_id,
          vendor_id: vendor.id,
        });
        setOpenListUser(false);
      }}
    >
      <div className="d-flex align-items-center gap-2">
        <div
          className="image bg-image"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundImage: `url(${vendor?.image})`,
          }}
        ></div>
        <div className="text">
          <h4 className="fs-14-500">{vendor?.name}</h4>
          {last_message && (
            <p className="mt-1 fs-12-500 text-color">
              {last_message_type === "text"
                ? last_message
                : last_message_type === "file"
                ? trans("file")
                : trans("record")}
            </p>
          )}
        </div>
      </div>
      <div className="time fs-12-500">{timeago}</div>
    </div>
  );
}

export default User;
