import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "./Components/User";
import { IoClose } from "react-icons/io5";
import { useRecoilState, useRecoilValue } from "recoil";
import NotUser from "./Components/NotUser/NotUser";
import axios from "axios";
import { useState } from "react";
import ScrollarComponent from "../../../../../../Components/ScrollarComponent/ScrollarComponent";
import { trans } from "../../../../../../Components/Navbar/Navbar";
import { basedDomin } from "../../../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../../../Others/Error";
import Loader from "../../../../../../Components/Loader/Loader";
import {
  blockedUserChangeStatus,
  buyerOpenListUserMessages,
  filterUserListType,
} from "../../GlopalStateRecoil/AllData";

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
  // State Filter User Blocked
  const filterBlockedList = useRecoilValue(blockedUserChangeStatus);
  // State Filter User Blocked
  // State List User Type
  const [filterTypesList, setFilterTypesList] =
    useRecoilState(filterUserListType);
  // State List User Type
  // State Open List User
  const [openListUser, setOpenListUser] = useRecoilState(
    buyerOpenListUserMessages
  );
  // State Open List User
  // Get User Chat
  const getUserChat = () => {
    setLoader(true);
    axios
      .get(`${basedDomin}/buyer/orders/all-offers/${filterTypesList}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setUsers(data.data.data);
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
  }, [filterTypesList, filterBlockedList]);

  // Sort List User
  function compareDates(a, b) {
    const dateA = new Date(a.time);
    const dateB = new Date(b.time);

    if (dateA > dateB) {
      return -1;
    }
    if (dateA < dateB) {
      return 1;
    }
    return 0;
  }
  // Sort List Users
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
              {users.sort(compareDates).map((item, idx) => (
                <User {...item} key={idx} />
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
