import { useState } from "react";
import { ReactComponent as Chat } from "./Assets/chat.svg";
import { ReactComponent as Report } from "./Assets/flag.svg";
import moment from "moment";
import "moment/locale/ar";
import { MdDeleteSweep } from "react-icons/md";
import axios from "axios";
import { basedDomin } from "../../../../Api/basedDomin";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorComponent, SuccsesComponent } from "../../../../Others/Error";
import { useRecoilState } from "recoil";
import { commentsData } from "../GlopalStateRecoil/AllData";
import Loader from "../../../../Components/Loader/Loader";

function CommentComp({ comment, ownerId }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const prams = useParams();
  const [loader, setLoader] = useState(false);
  // Time
  var timeago;
  if (localStorage.getItem("i18nextLng") === "ar") {
    timeago = moment(comment.created_at).locale("ar").fromNow();
  } else {
    timeago = moment(comment.created_at).fromNow();
  }
  // Time
  const [viewMore, setViewMore] = useState(100);
  // Function Delete
  const [Data, setComments] = useRecoilState(commentsData);
  const submitDelete = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}/shop/ads/delete-comment/${comment.id}`,
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments(data.data);
      SuccsesComponent(data.message);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      ErrorComponent(error, navigate);
    }
  };
  return (
    <div className="CommentComp">
      <div className="comp-nav d-flex justify-content-between">
        <div className="d-flex gap-3">
          <div
            className="profile bg-image"
            style={{ backgroundImage: `url(${comment.user.image})` }}
          ></div>
          <div className="user-id d-flex flex-column">
            <div className="name">{comment.user.name}</div>
            <div className="time">{timeago}</div>
          </div>
        </div>
        <div className="buttons d-flex gap-3">
          {/* Report */}
          {ownerId === user?.id
            ? comment.user.id !== user?.id && (
                <form onSubmit={submitDelete}>
                  <button
                    type="submit"
                    disabled={loader}
                    className="border flex-c rounded-circle"
                  >
                    {loader ? <Loader width={"30px"} /> : <Report />}
                  </button>
                </form>
              )
            : null}
          {/* Delete Comment */}
          {comment.user.id === user?.id && (
            <form onSubmit={submitDelete}>
              <button
                type="submit"
                disabled={loader}
                className="border flex-c rounded-circle"
              >
                {loader ? (
                  <Loader width={"30px"} />
                ) : (
                  <MdDeleteSweep style={{ color: "#e31e25" }} />
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      {/* View */}
      <div className="message mt-3">
        {comment.comment.length > 100
          ? `${comment.comment.substring(1, viewMore)}...`
          : comment.comment}
        {comment.comment.length > 100 &&
          (viewMore <= 100 ? (
            <button
              className="border-0 bg-transparent"
              style={{ fontSize: "14px", fontWeight: "700", color: "#e31e25" }}
              onClick={() => {
                setViewMore(comment.comment.length);
              }}
            >
              {"اقرأ المزيد"}
            </button>
          ) : (
            <button
              className="border-0 bg-transparent"
              style={{ fontSize: "14px", fontWeight: "700", color: "#006838" }}
              onClick={() => {
                setViewMore(100);
              }}
            >
              {"عرض أقل"}
            </button>
          ))}
      </div>
    </div>
  );
}

export default CommentComp;
