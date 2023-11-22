import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollarComponent from "../../../ScrollarComponent/ScrollarComponent";
import { trans } from "../../../Navbar/Navbar";
import User from "./Components/User";
import { IoClose } from "react-icons/io5";
import { openListUserMessages } from "../../GlopalStateRecoil/AllData";
import { useRecoilState } from "recoil";
import NotUser from "./Components/NotUser/NotUser";
import axios from "axios";
import { basedDomin } from "../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../Others/Error";
import { useState } from "react";
import Loader from "../../../Loader/Loader";

function ListedUsers() {
  //
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  //
  // State
  const [users, setUsers] = useState([]);
  const [exist, setExist] = useState(false);
  const [loader, setLoader] = useState(false);
  // State
  const [openListUser, setOpenListUser] = useRecoilState(openListUserMessages);
  // Get User Chat
  const getUserChat = () => {
    setLoader(true);
    axios
      .post(
        `${basedDomin}/vendor/orders/offers`,
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setUsers(data.data.data);
        // console.log(data.data.data);
        if (data.data.data.length === 0) {
          setExist(false);
        } else {
          setExist(true);
        }
        setLoader(false);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // UseEffect
  useEffect(() => {
    getUserChat();
  }, []);
  return (
    <div className="all-message full-height d-flex flex-column gap-4">
      {/* Head */}
      <div className="top d-flex align-items-center justify-content-between">
        <span className="message-count fs-20-600">{`${trans(
          "requestes_message.all_requestes"
        )}`}</span>
        <span
          className="flex-c pointer fs-24-700"
          onClick={() => {
            setOpenListUser(false);
          }}
        >
          <IoClose />
        </span>
      </div>
      {/* Message Tap */}
      <div className="side flex-grow-1">
        {loader ? (
          <div className=" full-height flex-c">
            <Loader width={"150px"} />
          </div>
        ) : exist ? (
          <ScrollarComponent height="100%">
            <div className="d-flex flex-column gap-2">
              {users.map((item) => (
                <User {...item} key={item.order_id} />
              ))}
            </div>
          </ScrollarComponent>
        ) : (
          <div className=" full-height flex-c">
            <NotUser />
          </div>
        )}
      </div>
    </div>
  );
}

export default ListedUsers;
