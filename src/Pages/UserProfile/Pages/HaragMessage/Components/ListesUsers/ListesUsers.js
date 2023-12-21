import React, { useEffect } from "react";
import ScrollarComponent from "../../../../../../Components/ScrollarComponent/ScrollarComponent";
import { trans } from "../../../../../../Components/Navbar/Navbar";
import { getUsersChat } from "../../callApiFunctions/getUsersChat";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/ar";
import Loader from "../../../../../../Components/Loader/Loader";
import NotUser from "../../../../../../Components/NotUser/NotUser";
import { useRecoilState } from "recoil";
import { haragMessages } from "../../atoms/atoms";

function ListesUsers({ setState }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  const [message, setMessage] = useRecoilState(haragMessages);
  useEffect(() => {
    getUsersChat(setUsers, setLoader, navigate);
  }, []);
  // Moment
  const getTime = (time) => {
    var timeago;
    if (localStorage.getItem("i18nextLng") === "ar") {
      timeago = moment(time).locale("ar").format("h:mm a");
    } else {
      timeago = moment(time).locale("en").format("h:mm a");
    }
    return timeago;
  };
  // Moment
  console.log(users);
  return (
    <>
      <div className="list-window bg-white">
        <div className="all-message full-height py-4">
          {loader ? (
            <div className=" full-height flex-c">
              <Loader width="70px" />
            </div>
          ) : users.length > 0 ? (
            <>
              <span className="message-count fs-20-600">{`${trans(
                "harag_message.all_message"
              )} (${users.length})`}</span>
              <div className="side mt-4">
                <ScrollarComponent height="300px">
                  <div className="d-flex flex-column gap-2">
                    {users.map((item) => (
                      <div
                        className="link-message d-flex gap-3 pointer justify-content-between transion-5"
                        onClick={() => {
                          setState(true);
                          setMessage({
                            ...message,
                            adChat: {
                              ad: item.ad.id,
                              user: item.last_message.from_user_id,
                            },
                          });
                        }}
                        key={item.id}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div
                            className="image flex-c bg-image"
                            style={{
                              backgroundImage: `url(${item.last_message.from.image})`,
                            }}
                          ></div>
                          <div className="text">
                            <h4>{item.last_message.from.name}</h4>
                            {item.last_message.type === "text" && (
                              <p className="mt-2">
                                {item.last_message.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="time mt-1">
                          {getTime(item.last_message.created_at)}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollarComponent>
              </div>
            </>
          ) : (
            <NotUser />
          )}
        </div>
      </div>
    </>
  );
}

export default ListesUsers;
