import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from "../../Others/Error";
import { trans } from "../Navbar/Navbar";

function Paginations({
  routemore,
  routeLess,
  state,
  setState,
  status,
  setStatus,
  setScroll,
}) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // Pagination Function
  var pagArr = [];
  const [num, setNum] = useState(2);
  const pagination = (num = 1) => {
    axios
      .post(
        `${routemore}${num}`,
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        pagArr = data.data.data.data;
        const all = state.concat(pagArr);
        setState(all);
        if (data.data.data.links.next === null) {
          setStatus(false);
        } else {
          setStatus(true);
        }
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // Pagination Less
  const paginationLess = () => {
    axios
      .post(
        `${routeLess}`,
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        setState(data.data.data.data);
        setStatus(true);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // Pagination Less
  return (
    <div>
      {status ? (
        <button
          className="py-3 px-5 bg-main border-0 text-white r-10 d-block"
          onClick={() => {
            setNum(num + 1);
            pagination(num);
            setScroll(false);
          }}
        >
          {trans("ads_details.more")}
        </button>
      ) : (
        <button
          className="py-3 px-5 bg-main border-0 text-white r-10 d-block"
          onClick={() => {
            setNum(2);
            paginationLess();
            setScroll(true);
          }}
        >
          {"عرض اقل"}
        </button>
      )}
    </div>
  );
}

export default Paginations;
