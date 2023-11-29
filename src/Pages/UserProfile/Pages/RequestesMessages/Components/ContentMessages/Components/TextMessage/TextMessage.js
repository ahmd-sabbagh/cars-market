import "./TextMessage.css";
import moment from "moment";
import "moment/locale/ar";

function TextMessage({ message, created_at, from_user_id }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const lngDir = localStorage.getItem("i18nextLng");
  // Moment
  var timeago;
  if (localStorage.getItem("i18nextLng") === "ar") {
    timeago = moment(created_at).locale("ar").format("h:mm a");
  } else {
    timeago = moment(created_at).locale("en").format("h:mm a");
  }
  // Moment
  return (
    <div
      className={`TextMessage d-flex ${
        from_user_id === user?.id ? "me justify-content-end" : "you"
      }`}
    >
      <div
        className="Text d-flex flex-column"
        data-aos={`zoom-in-${lngDir === "ar" ? "right" : "left"}`}
        data-aos-offset="0"
      >
        <span className="fs-12-400">{message}</span> <span>{timeago}</span>
      </div>
    </div>
  );
}

export default TextMessage;
